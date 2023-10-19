import axios from 'axios';
import React from 'react'
import { setCookie, getCookie } from 'cookies-next';
 
const API_URL = "http://10.5.9.9:38000/"

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
    (error) => {
    Promise.reject(error)
    }
)
api.interceptors.response.use(resp =>{
    console.log("OK");
    return resp;
}, (error)=>{
    console.log("Não Autorizado");
    console.log(error.response);
    if(error.response.status == 403)
    {
        window.location.href="/login"
    }
   else if(error.response.status == 404){
    console.log("Deu ruim")
   }
    return Promise.reject(error);
}
)
export default api;