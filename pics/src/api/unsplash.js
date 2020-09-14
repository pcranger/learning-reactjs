import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID AJadT4eeLQPq2cIv4X82CzTyyv4XvLx-QUsIJoToFC8'
    }
})
