import {firestore, ad} from '../firebaseConfig'

const getQuestions = async(formId) => {
    let snapshotQuestions
    let arrayQuestions = []

    snapshotQuestions = await firestore.collection('questions').where('formId', '==', formId).get()
    snapshotQuestions.forEach(doc => arrayQuestions.push(doc.data()))
    return arrayQuestions
}

export const getForms = async(uid, formId) => {

    let result = []
    let snapshotForm
    let document

    if(uid && formId)
        return {message: 'You must provide uid or formId but not both.'}

    if(!uid && !formId)
        return {message: 'You must provide uid or formId'}

    try{
        
        if(formId){
            document = await firestore.collection('forms').doc(formId).get()
            result = document.data()
            result.questions = await getQuestions(formId)
        }

        if(uid){
            /*this will store forms' snapshot temporarily, because asynchronous functions 
            doesn't executes correctly within forEach method of snapshot.*/
            let tempForms = []

            snapshotForm = await firestore.collection('forms').where('uid', '==', uid).get()

            snapshotForm.forEach(doc => {
                tempForms.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            for(let form of tempForms){
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

const createQuestion = async(formId, number, question) => {

    if(!question)
        return {message: 'Form must have at least one question'}

    if(!question.type || !question.text)
        return {message: 'Question text and type must be provided'}

    let result

    try{
        result = await firestore.collection('questions').add({
            formId,
            number,
            type: question.type,
            text: question.text
        })
    }
    catch{ 
        return { message: 'Error while trying to save questions data'}
    }

    return await (await result.get()).data()
    
}

/**arrayDate = [year, monthIndex, day, *hour, *minutes, *seconds] 
 * hour, minutes and seconds are optionals
*/
export const createForm = async(uid, formName, isPublic, limitResponses, arrayDate, arrayTime, questions) => {

    if(!uid)
        return {message: 'User ID is required'}
    
    if(!formName)
        return {message: 'Form name is required'}

    const data = {
        uid, 
        formName,
        isPublic: isPublic == 'true'
    }

    if(limitResponses)
        data.limitResponses = limitResponses

    if(arrayDate.length > 0){
        const arrayDateFinal = []

        //if arrayDate has at least one not undefined value, then it's pushed to arrayDateFinal
        const dateExists = arrayDate.some(value => value !== undefined)
        const timeExists = arrayTime.some(value => value !== undefined)

        if(dateExists){

            arrayDateFinal.push(arrayDate)
            //if arrayTime has at least one not undefined value, then it's pushed to arrayDateFinal

            if(timeExists)
                arrayDateFinal.push(arrayTime)

        }
        else{
            if(timeExists)
                return {message: 'Invalid Date'}
        }


        data.endDate = new Date(arrayDateFinal).toLocaleString() 

        //if endDate is not a date
        if(data.endDate == 'Invalid Date')            
            return {message: 'Invalid Date'}
    }

    let result
    try{ result = await firestore.collection('forms').add(data) }
    catch{  return {message: 'Error while trying to save form data'} }

    const form = await result.get()

    for(let index in questions){
        
        const questionResult = await createQuestion(form.id, parseInt(index) + 1,questions[index])

        //if there's an error registering questions in database, form and it's questions are deleted
        if(questionResult.message){

            const snapshot = await firestore.collection('questions').where('formId', '==', form.id).get()
            const batch = firestore.batch()

            snapshot.forEach(doc => batch.delete(doc.ref))

            await firestore.collection('forms').doc(form.id).delete()

            await batch.commit()

            return { message: questionResult.message}
        }
    }

    return await form.data()
}