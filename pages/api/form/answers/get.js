import {getResponses} from '../../../../helpers/answer'

export default async(req, res) => {

    const uid = req.query.uid
    const formId = req.query.formId
     
    if(!formId){
        res.statusCode = 400
        res.json({
            message: 'formId is required'
        })
    }

    const result = await getResponses(formId, uid)

    res.statusCode = 200
    res.json(result)
}