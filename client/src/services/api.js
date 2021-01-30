import axios from 'axios'

const config = require('./config/config')

export default () => {
    return axios.create({
        baseURL: `http://${config.host}:${config.port}`
    })
}