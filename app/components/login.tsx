"use client";

import { GoogleLogin } from '@react-oauth/google';
import logopng from "../../public/logo.png"
import { CredentialResponse, GoogleOAuthProvider } from "@react-oauth/google";
import Image from "next/image";
import React from "react";
import { API_URL } from '@/shared/constants/api';
import api from '@/shared/utils/my-axios';

const Login = () => {
  const [willLogin, setWillLogin] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const responseGoogle = async (response: any) => {
    setLoading(true)
    
    try{console.log(response);
      const tokenId = response.credential;
      const clientId = response.clientId;
      const fcmToken = localStorage.getItem('fcmToken');
     await api.post(`${API_URL}/login`, 
      {token: tokenId, fcmToken},
    )
    
    if(response.tipo === "Secretaria" || "secretaria"){
      window.location.href="/secretaria";
    } else if (response.tipo === "Professor" || "professor"){
      window.location.href="/professor";
    }else(response.tipo === "Aluno" || "aluno");{
      window.location.href="/aluno"
    }

    
  } finally {
      setLoading(false);
    }
    
  }
  
  const login = async (e: any) => {
    e.preventDefault();
    setWillLogin(true)
  }

  return(
  <>
  <title>Alumnus</title>
<main>
    <section className=" w-1/2 float-left">
        <Image src={logopng} alt="" className=" relative w-5/6 ml-16 mt-12" />
     
    </section>
  <section className=" w-1/2 h-96 float-right">
  <div className="flex flex-col items-center mt-56 py-8 md:h-72 w-full ">
     
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 h-96 dark:border-gray-700"  >
          <div className="p-6 space-y-4 -mt-2 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-700 md:text-2xl -mt-4 dark:text-white" >
                {"Entre em sua conta"}  
              </h1>
              <form className="space-y-4 md:space-y-6" >
                  <div className='-mt-3'> 
                      <label  htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Digite seu email institucional:</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@mail.com"  required />
                  </div>
                  <div>
                      <label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insira sua senha:</label>
                      <input type="password" name="senha" id="senha" placeholder="*******" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                  </div>
                  <div className="flex items-center justify-between">
                      <a href="#" className="text-sm -mt-4 font-medium text-primary-600 hover:underline text-white ">Esqueceu a senha?</a>
                  </div>
        
                  <div className=" rounded-md border-solid w-full h-12">
                <button type="submit" className="w-full text-white h-full bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ingressar</button>
                  </div>
                  <div className="ml-20 mb-10">
          {willLogin ? 
          <GoogleLogin onSuccess={responseGoogle} ></GoogleLogin> :
          <button onClick={login} type="submit" className='text-sm -mt-8 font-medium text-primary-600 hover:underline text-white'>Login com </button> }
        </div>
              </form>
          </div>
          
      </div>
  </div>
  <ul className=" float-right mt-56 mr-64">
    <li>Quem somos?</li>
  </ul>
  </section>
  </main>
  </>
  )}
  export default Login;