import axios from 'axios'

const get = async(path, params) => {

    return await axios.get(`${process.env.HOST}${path}`, {
        params
    })
}

const post = async(path, body) => {
    console.log(path, process.env.HOST)
    console.log(`${process.env.HOST}${path}`)
    return await axios.post(path, body)
}

export default {
    get,
    post
}