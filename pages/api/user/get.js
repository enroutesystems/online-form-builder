import {getUser} from '../../../helpers/user'

export default async (req, res) => {

    const email = req.query.email
    const uid = req.query.uid

    if(!email && !uid){
        res.statusCode = 400
        res.json({
            ok: false,
            message: 'You must send email or uid'
        })
    }

    if(email && uid){
        res.statusCode = 400
        res.json({
            ok: false,
            message: 'Only one parameter is allowed'
        })
    }

    let user

    if(email){
        user = await getUser(email)
    }

    if(uid)
        user = await getUser(undefined, uid)

    res.statusCode = 200
    res.json({
        ok: true,
        user
    })
}