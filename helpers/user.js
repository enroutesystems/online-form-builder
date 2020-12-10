import {auth} from '../firebaseConfig'

export const firebaseLogin = async(email, password) => {
    let result

    try{    
        result = await auth.signInWithEmailAndPassword(email, password)
    }
    catch(err){
        console.log(err)
    }
    
    if(result)
        return result.user
    else
        return null
}

export const firebaseSignUp = async(email, password) => {
    let result
    
    try{
        result = await auth.createUserWithEmailAndPassword(email, password)
    }
    catch(err){
        result = err
    }

    return result
}