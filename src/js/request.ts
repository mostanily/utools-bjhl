import axios from 'axios'

const request = axios.create({
    baseURL: 'https://comm.ams.game.qq.com',
    timeout: 5000,
    method: 'POST'
})

request.interceptors.request.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default request