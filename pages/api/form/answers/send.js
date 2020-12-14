import {sendAnswers} from '../../../../helpers/answer'

export default async(req,res) => {

    const uid = req.body.uid
    const answers = req.body.answers
    const formId = req.body.formId

    if(!answers){
        res.statusCode = 400
        res.json({
            ok: false,
            message: 'answers are required'
        })
    }

    const result = await sendAnswers(formId, uid, answers)

    res.statusCode = result.message ? 400 : 200
    res.json(result)
}