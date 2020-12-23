import {firebaseSignUp} from '../../../helpers/user'

export default async(req,res) => {
    const email = req.body.email
    const password = req.body.password

    if(!email || !password){
        res.statusCode = 400
        res.json({
            ok: false,
            message: 'Email and password must be provided '
        })
        return
    }

    const result = await firebaseSignUp(email, password)
    
    //if result has user property the user was created
    if(result.user){
        res.statusCode = 200
        res.json({
            ok: true,
            user: result.user
        })
    }
    else{

        res.statusCode = 400
        res.json({
            ok: false,
            error: result
        })
    }
}