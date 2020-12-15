import {formsStatistics} from '../../../helpers/statistics'

export default async(req, res) => {

    const uid = req.query.uid

    if(!uid)
        return {message: 'uid is required'}

    const result = await formsStatistics(uid)

    res.statusCode = 200
    res.json(result)
    
}