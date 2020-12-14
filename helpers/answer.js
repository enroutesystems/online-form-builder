import {firestore} from '../firebaseConfig'
import collections from './collections'

export const getResponses = async(formId, uid) => {
    
    const arrayQuestions = []
    const arrayResponses = []

    const snapshotQuestions = await firestore.collection(collections.questions).where('formId', '==', formId).get()

    snapshotQuestions.forEach(doc => arrayQuestions.push(doc.id))

    for(let questionId of arrayQuestions){
        let snapshotUserResponses = firestore.collection(collections.userResponses)
            .where('questionId', '==', questionId)

        if(uid)
            snapshotUserResponses = await snapshotUserResponses.where('uid', '==', uid).get()
        else
            snapshotUserResponses = await snapshotUserResponses.get()

        snapshotUserResponses.forEach(doc => arrayResponses.push(doc.data()))
    }

    return {
        formId,
        responses: arrayResponses
    }
}

/**
 * Validates if sent answers have the correct format
 * @param {string[]} answers 
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
const isAllowedToAnswer = async(form, formId, uid) => {
    
    let oAllowedUser = {}

    if(!form.isPublic){

        if(!uid)
            return {message: 'uid is required to fill this form'}

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
            console.log('data', doc.data())
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


    const validation = validateAnswers(answers)
    const allowedUser = await isAllowedToAnswer(form, formId, uid)

    if(validation.message)
        return {message: validation.message}

    if(allowedUser.message)
        return {message: allowedUser.message}


    for(let answer of answers){
    
        try{
            await firestore.collection(collections.userResponses).add({
                uid,
                ...answer
            })
        }
        catch{
            await deleteUserResponse(uid, answers)
            return {message: 'Error while trying to save response into database'}
         }
    }
    
    return {ok: true}
}