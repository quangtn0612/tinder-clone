import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-2s1.herokuapp.com/'
})

export default instance;