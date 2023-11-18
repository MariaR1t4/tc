import axios from 'axios';
import React from 'react'
import { setCookie, getCookie } from 'cookies-next';
 
const API_URL = "http://192.168.15.5:38000/"

const api = axios.create({
    baseURL: API_URL
});
api.interceptors.request.use(
    (config) => {
            const tipo = getCookie('tipo')
            const token = getCookie('token')
            if(token){
                config.headers['authorization'] = `${token}`;
                config.headers['tipo'] = `${tipo}`
            }
        return config
    },
    (error) => {
    Promise.reject(error)
    }
)
api.interceptors.response.use(resp =>{
    console.log("Autorizado");
    return resp;
}, (error)=>{
    console.log("Não Autorizado");
    console.log(error.response);
    if(error.response.status == 403)
    {
        console.log(error)
        window.location.href="/"
    }
   else if(error.response.status == 404){
    console.log("Deu ruim")
   }
    return Promise.reject(error);
}
)
export default api;