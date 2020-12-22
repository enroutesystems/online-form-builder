import {firestore} from '../firebaseConfig'
import questionTypes from './questionTypes'
import collections from './collections'
import {isAllowedToAnswer} from './answer'
import {getUser} from './user'

const getOptionAnswers = async(questionId) => {
    const arrayOptions = []

    const snapshot = await firestore.collection(collections.optionAnswers).where('questionId', '==', questionId).get()

    snapshot.forEach(doc => arrayOptions.push({
        text: doc.data().text,
        optionAnswerId : doc.id
    }))

    return arrayOptions
}

export const getQuestions = async(formId) => {
    let snapshotQuestions
    let tempArrayQuestions = []
    let arrayQuestions = []

    snapshotQuestions = await firestore.collection(collections.questions).where('formId', '==', formId).get()
    snapshotQuestions.forEach(doc => tempArrayQuestions.push(doc))

    for(let doc of tempArrayQuestions){
        let oQuestion = {...doc.data()}

        if(oQuestion.type === questionTypes.multiOptions)
            oQuestion.options = await getOptionAnswers(doc.id)


        delete oQuestion.formId
        arrayQuestions.push({
            ...oQuestion,
            questionId: doc.id
        })
    }
    return arrayQuestions
}

export const getForms = async(uid, formId) => {

    let result = []
    let snapshotForm
    let document

    if(!uid && !formId)
        return {message: 'uid or formId was not specified'}

    try{

        if(formId){

            document = await firestore.collection(collections.forms).doc(formId).get()
            result = document.data()

            if(!result)
                return {message: 'Form was not found'}

            const isAllowed = await isAllowedToAnswer(result, formId, uid)

            if(!isAllowed.ok && result.uid !== uid)
                return {message: isAllowed.message}

            result.formId = document.id
            result.questions = await getQuestions(formId)
        }
        else{
            /*this will store forms' snapshot temporarily, because asynchronous functions
            doesn't executes correctly within forEach method of snapshot.*/
            let tempForms = []

            snapshotForm = await firestore.collection(collections.forms).where('uid', '==', uid).get()

            snapshotForm.forEach(doc => {
                tempForms.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            for(let form of tempForms){
                form.data.formId = form.id
                form.data.questions = await getQuestions(form.id)
                result.push(form.data)
            }
        }
    }
    catch(err){
        console.log('ERROR', err)
    }

    return result
}

/**
 * Registers each option of options array into database
 * @param {string} questionId
 * @param {array} options
 */
const createOptionAnswers = async (questionId, options) => {

    for(let text of options){

        try {
            await firestore.collection(collections.optionAnswers).add({
                questionId,
                text
            })
        }
        catch{ return {ok: false, message: 'Error while trying to save option answers'} }
    }

    return {ok: true}
}

/**
 * Validates if the question object has the necessary properties
 * @param {object} question
 */
const validateQuestion = (question) => {

    if(!question)
        return {ok: false, message: 'Form must have at least one question'}

    if(!question.type || !question.text)
        return {ok: false, message: 'Question text and type must be provided'}

    if(!question.cardColor)
        return {ok: false, message: 'Every question must have a cardColor'}

    if(question.type === questionTypes.range){
        if(!question.range || question.range.minValue === undefined || question.range.maxValue === undefined)
            return {ok: false, message: 'Questions of type range must have minValue and maxValue'}
    }

    //if question type is multi-options
    if(question.type === questionTypes.multiOptions){

        //if question options doesn't have at least 2 options
        if(!question.options || !question.options instanceof Array || question.options.length <= 1)
            return {ok: false, message: 'Question of type "multi-options" must have at least two option'}

    }

    return {ok: true}
}

/**
 * Registers the question into database
 * @param {string} formId
 * @param {Number} number
 * @param {object} question
 */
const createQuestion = async(formId, number, question) => {

    const validation = validateQuestion(question)

    if(!validation.ok)
        return {message: validation.message}

    let newQuestion
    try{
        newQuestion = await firestore.collection(collections.questions).doc()

        const questionData = {
            formId,
            number,
            type: question.type,
            text: question.text,
            cardColor: question.cardColor
        }

        if(question.type === questionTypes.range)
            questionData.range = {...question.range}

        await newQuestion.set(questionData)

        if(question.type === questionTypes.multiOptions){
            const resultOptionAnswers = await createOptionAnswers(newQuestion.id, question.options)
            if(!resultOptionAnswers.ok)
                return {message: resultOptionAnswers.message}
        }
    }
    catch(err){
        console.log(err)
        return { message: 'Error while trying to save questions data'}
    }

    return await (await newQuestion.get()).data()

}


/**
 * Deletes selected form and it's questions and option answes
 */
const deleteForm = async (formId) => {
    const tempMultiOptionsQuestions = []
    const batch = firestore.batch()

    //get questions with multi-options type
    const snapshotMultiOptionsQuestions = await firestore.collection(collections.questions)
        .where('formId', '==', formId).where('type', '==', questionTypes.multiOptions).get()


    //each multi-optios questions is pushed to array
    snapshotMultiOptionsQuestions.forEach(doc => tempMultiOptionsQuestions.push(doc))

    //for each question with multi-options type
    for(let doc of tempMultiOptionsQuestions){
        //get option answers for current question
        const snapshotOptionAnswers = await firestore.collection(collections.optionAnswers)
            .where('questionId', '==', doc.id)

        //delete each option of current quiestion
        snapshotOptionAnswers.forEach(doc => batch.delete(doc.ref))
    }

    const snapshotQuestions = await firestore.collection(collections.questions).where('formId', '==', formId).get()

    snapshotQuestions.forEach(doc => batch.delete(doc.ref))

    await firestore.collection('forms').doc(formId).delete()

    await batch.commit()
}

const allowUsers = async(formId, email) => {

    const user = await getUser(email)

    if(!user.uid)
        return {ok: true}

    try{
        await firestore.collection(collections.allowedUsers).add({
            formId,
            uid: user.uid
        })
    }
    catch{return {message: 'Error while trying to save allowed users'}}

    return {ok: true}
}

/**arrayDate = [year, monthIndex, day, *hour, *minutes, *seconds]
 * hour, minutes and seconds are optionals
*/
export const createForm = async(uid, formName, isPublic, limitResponses, arrayDate, arrayTime, questions, allowedUsers) => {

    if(!uid)
        return {message: 'User ID is required'}

    if(!formName)
        return {message: 'Form name is required'}

    const data = {
        uid,
        formName,
        isPublic
    }

    if(limitResponses)
        data.limitResponses = limitResponses


    if(arrayDate.length > 0){
        const arrayDateFinal = []

        //if arrayDate has at least one not undefined value, then it's pushed to arrayDateFinal
        const dateExists = arrayDate.some(value => value !== undefined)
        const timeExists = arrayTime.some(value => value !== undefined)

        if(dateExists){

            arrayDateFinal.push(...arrayDate)
            //if arrayTime has at least one not undefined value, then it's pushed to arrayDateFinal

            if(timeExists)
                arrayDateFinal.push(...arrayTime)

        }
        else{
            if(timeExists)
                return {message: 'Invalid Date'}
        }

        if(arrayDateFinal.length > 0)
            data.endDate = new Date(...arrayDateFinal).toLocaleString()

        //if endDate is not a date
        if(data.endDate == 'Invalid Date')
            return {message: 'Invalid Date'}
    }

    let result
    try{ result = await firestore.collection(collections.forms).add(data) }
    catch{  return {message: 'Error while trying to save form data'} }

    const form = await result.get()

    if(!isPublic){

        if(!allowedUsers || allowedUsers.length < 1)
            return {message: 'You must specify at least one allowed user for private forms'}

        for(let email of allowedUsers){

            const allowUsersResult = await allowUsers(form.id, email)

            if(allowUsersResult.message){
                await deleteForm(form.id)

                return {message: allowUsersResult.message}
            }
        }
    }

    for(let index in questions){

        const questionResult = await createQuestion(form.id, parseInt(index) + 1,questions[index])

        //if there's an error registering questions in database, form and it's questions are deleted
        if(questionResult.message){

            await deleteForm(form.id)

            return { message: questionResult.message}
        }
    }

    return await form.data()
}
