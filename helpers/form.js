import {firestore, ad} from '../firebaseConfig'
import admin from 'firebase-admin'

async function asyncForEach(array, callback, result) {

    let results = []

    for (let index = 0; index < array.length; index++) {
        let array = await callback(array[index], result)
        console.log('jojo', array)
      results.push();
    }

    return results
  }

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

export const createForm = async(uid, formName, isPublic, limitResponses, endDate) => {

    if(!uid)
        return {message: 'User ID is required'}
    
    if(!formName)
        return {message: 'Form name is required'}

    const data = {
        uid, 
        formName,
        isPublic: isPublic ? isPublic : false
    }

    if(limitResponses)
        data.limitResponses = limitResponses

    if(endDate){
        if(typeof endDate === Date)
            data.endDate = admin.firestore.Timestamp.fromDate(endDate)
        else
            return {message: 'Date has not the correct format'}
    }
    

    const result = await firestore.collection('forms').doc().set(data)


}