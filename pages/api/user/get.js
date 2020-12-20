import {getUser} from '../../../helpers/user'

export default async (req, res) => {

    const email = req.query.email

    if(!email){
        res.statusCode = 400
        res.json({
            ok: false,
            message: 'email is required'
        })
        return
    }

    const user = await getUser(email)

    res.statusCode = 200
    res.json({
        ok: true,
        user
    })
}