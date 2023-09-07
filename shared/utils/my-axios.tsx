import axios from 'axios'
import { setCookie, getCookie } from 'cookies-next';

const API_URL = "http:/10.5.9.9"

const api = axios.create({
    baseURL: API_URL
});

api.interceptors.request.use(
    (config) => {
      
            const token = getCookie('token')
            if(token){
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            
        
        return config
    },

)