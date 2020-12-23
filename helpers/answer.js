import {firestore} from '../firebaseConfig'
import collections from './collections'
import {getUser} from './user'
import {getQuestions} from './form'

export const getResponses = async(formId, uid) => {

    const arrayResponses = []

    const questions = await getQuestions(formId)

    for(let question of questions){
        let snapshotUserResponses = firestore.collection(collections.userResponses)
            .where('questionId', '==', question.questionId)

        if(uid)
            snapshotUserResponses = await snapshotUserResponses.where('uid', '==', uid).get()
        else
            snapshotUserResponses = await snapshotUserResponses.get()

        snapshotUserResponses.forEach(doc => arrayResponses.push(doc.data()))
    }

    for(let index in arrayResponses){
        let responserUid = arrayResponses[index].uid || undefined 
        arrayResponses[index].user = responserUid ? await getUser(undefined, arrayResponses[index].uid) : {email: 'Anonymous'}
        arrayResponses[index].question = questions.find(question => question.questionId === arrayResponses[index].questionId)

        delete arrayResponses[index].questionId
        delete arrayResponses[index].uid
    }
    return {
        formId,
        responses: arrayResponses.sort((a, b) => a.question.number - b.question.number)
    }
}

/**
 * Validates if sent answers have the correct format
 * @param {object[]} answers 
 */
const validateAnswers = (answers) => {
    

    for(let answer of answers){
        if(!answer.questionId)
            return {message: 'Every answer must have a questionId'}

        //checks if answer contains response or optionAnswerId but not both
        if((answer.response || answer.optionAnswerId)){
            if(answer.response && answer.optionAnswerId)
                return {message: 'No answer should contain both response and optionAnswerId'}
        }
        else
            return {message: 'Every answer must have a response or optionAnswerId'}
    }

    return {ok: true}
}

/**
 * 
 * @param {object} form 
 * @param {string} formId 
 * @param {string} uid 
 */
export const isAllowedToAnswer = async(form, formId, uid) => {

    const responses = await (await getResponses(formId)).responses

    //Checks if form has reached the limit of responses.
    if(form.limitResponses){

        let responsesCount = 0
        
        responses.forEach(response => {
            if(response.questionId === responses[0].questionId)
                responsesCount++

        })

        if(form.limitResponses <= responsesCount)
            return {message: 'This form has reached the limit of responses.'} 
    }

    //Checks if form has date limit and compares it with actual date
    if(form.endDate){
        
        if(new Date() > new Date(form.endDate))
            return {message: 'This form has reached the limit date to fill it'}
    }

    let oAllowedUser = {}

    //Checks if form is public or not
    if(!form.isPublic){

        if(!uid)
            return {message: 'uid is required to fill this form'}

        if(responses.some(response => response.user.uid === uid))
            return {message: 'You have already filled this form.'}

        const snapshotAllowedUsers = await firestore.collection(collections.allowedUsers)
            .where('formId', '==', formId)
            .where('uid', '==', uid)
            .get()

        snapshotAllowedUsers.forEach(doc => oAllowedUser = doc.data())

        if(oAllowedUser.uid === uid)
            return {ok: true}
        else
            return {message: 'User is not allowed to fill this form'}
    }
    else{
        return {ok:true}
    }

    
}

/**
 * Deletes all the responses in form made by the user
 * @param {string} uid 
 * @param {object[]} answers 
 */
const deleteUserResponse = async(uid, answers) => {
    const batch = firestore.batch()

    for(let answer of answers){

        const snapshotUserResponse = await firestore.collection(collections.userResponses)
            .where('questionId', '==', answer.questionId).where('uid', '==', uid).get()
        
        snapshotUserResponse.forEach(doc => {
            batch.delete(doc.ref)
        })
    }

    await batch.commit()
}

/**
 * Saves the answers of a specific form into database
 * @param {string} uid 
 * @param {string[]} answers 
 */
export const sendAnswers = async(formId, uid, answers) => {

    const form =  await (await firestore.collection(collections.forms).doc(formId).get()).data()

    console.log('ANSWERS',answers)
    const validation = validateAnswers(answers)
    
    const allowedUser = await isAllowedToAnswer(form, formId, uid)
    
    if(validation.message)
        return {message: validation.message}

    if(allowedUser.message)
        return {message: allowedUser.message}


    for(let answer of answers){
        
        const data = {...answers}

        if(uid)
            data.uid = uid
            
        try{
            if(uid)
                await firestore.collection(collections.userResponses).add({
                    uid,
                    ...answer
                })
            else
                await firestore.collection(collections.userResponses).add({...answer})
        }
        catch{
            await deleteUserResponse(uid, answers)
            return {message: 'Error while trying to save response into database'}
         }
    }
    
    return {ok: true}
}