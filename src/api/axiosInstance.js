import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const axiosInstance = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
    },

}, true)

export default axiosInstance