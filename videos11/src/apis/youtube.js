import axios from 'axios';

const KEY = 'AIzaSyAkz6CCnyzhB53GaPRlRCRkQAhpBsKh3kA'
//this key will be sent to whoever access this site

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
