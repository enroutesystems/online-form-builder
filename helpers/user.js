import collections from './collections'
import {auth, firestore} from '../firebaseConfig'

const addUserToCollection = async(result) => {

    let oDocument = {

    }

    try{
        const document = await firestore.collection('users').doc(result.user.uid).set({
            email: result.user.email
        })

        oDocument.ok = true
        oDocument.data = document
    }
    catch(err){
        oDocument.ok = false
        oDocument.error = err
    }
    
    return oDocument
}

export const firebaseLogin = async(email, password) => {
    let result
    
    try{    
        result = await auth.signInWithEmailAndPassword(email, password)
    }
    catch(err){
        
    }
    if(result)
        return {
            email: result.user.email,
            uid: result.user.uid,
        }
    else
        return undefined
}

export const firebaseSignUp = async(email, password) => {
    let result
    
    try{
        result = await auth.createUserWithEmailAndPassword(email, password)
        const oDocument = await addUserToCollection(result)

        //if there's a problem saving user in users collection, then it is deleted
        if(!oDocument.ok){
            await auth.currentUser.delete()
            throw {...oDocument.error}
        }
    }
    catch(err){
        result = err
    }

    return result
}

export const getUser = async(email, uid) => {

    let userSnapshot
    let userDoc

    if(email)
        userSnapshot = await firestore.collection(collections.users).where('email', '==', email).get()

    if(uid)
        userDoc = await firestore.collection(collections.users).doc(uid).get()

    let user

    if(userSnapshot){
        console.log(1)
        userSnapshot.forEach(doc => {
            user = {
                uid: doc.id,
                email: doc.data().email
            }
        })
    }

    if(userDoc){

        try{
            user = {
                uid,
                email: userDoc.data().email
            }
        }
        catch{user = {}}
    }

    return user
}