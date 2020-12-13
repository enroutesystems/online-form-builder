import {createForm} from '../../../helpers/form'

export default async(req, res) => {
    const uid = req.body.uid
    const formName = req.body.formName
    const isPublic = req.body.isPublic
    const limitResponses = req.body.limitResponses
    const year = req.body.year
    const month = req.body.month
    const day = req.body.day
    const hour = req.body.hour
    const minute = req.body.minute
    const second = req.body.second
    const questions = req.body.questions

    let endDate = [year, month, day]
    let arrayTime = [hour, minute, second]

    const result = await createForm(uid, formName, isPublic, limitResponses, endDate, arrayTime, questions)

    if(result.message){
        res.statusCode = 400
        res.json({
            ok: false,
            result
        })
        return
    }

    res.statusCode = 200
    res.json({
        ok: true,
        result
    })
}