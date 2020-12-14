import {auth} from '../../../firebaseConfig'

export default async(req, res) => {

    const email = req.body.email

    if(!email)
        return {message: 'email is required'}
    
    try{
        await auth.sendPasswordResetEmail(email)
        return {ok: true}
    }
    catch{ return {message: 'Error while trying to send rese password email'}}
}