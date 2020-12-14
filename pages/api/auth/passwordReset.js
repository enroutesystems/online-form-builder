import {auth} from '../../../firebaseConfig'

export default async(req, res) => {

    const email = req.body.email

    if(!email){
        res.statusCode = 400
        res.json({message: 'email is required'})
        return
    }
    
    try{
        await auth.sendPasswordResetEmail(email)
        res.statusCode = 200
        res.json({ok: true})
    }
    catch{ 
        res.statusCode = 500
        res.json({message: 'Error while trying to send rese password email'})
    }
}