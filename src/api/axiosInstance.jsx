
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://apiv3.apifootball.com/',
})
    
export default axiosInstance;