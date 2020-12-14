import {getForms} from '../../../helpers/form'

export default async(req, res) => {

    const uid = req.query.uid
    const formId = req.query.formId

    const result = await getForms(uid, formId)
    let ok
    
    if(result.message){
        res.statusCode = 400
        ok = false
    }
    else{
        res.statusCode = 200
        ok = true
    }

    res.json({
        ok,
        result
    })

}