import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-5992d.firebaseio.com/'
});

export default instance;