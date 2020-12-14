import {firestore} from '../firebaseConfig'
import collections from './collections'
import {getResponses} from './answer'

const getForms = async(uid) => {

    const forms = []

    const snapshotForms = await firestore.collection(collections.forms)
        .where('uid', '==', uid).get()

    snapshotForms.forEach(doc => forms.push(doc))

    return forms
}

const getUsersWhoAnsweredCount = (form) => {
    console.log(form)
    if(form.responses[0]){

        let counter = form.responses.filter(response => response.questionId === form.responses[0].questionId).length

        form.usersWhoAnswered = counter
    }
    else{
        form.usersWhoAnswered = 0
    }
        
    return form
}

export const formsStatistics = async(uid) => {

    const responses = []

    const forms = await getForms(uid)


    for(let form of forms){

        const formWithAnswers = await getResponses(form.id)
        responses.push(getUsersWhoAnsweredCount(formWithAnswers))
    }

    return responses
}