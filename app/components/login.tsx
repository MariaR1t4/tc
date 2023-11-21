"use client";

import { GoogleLogin } from '@react-oauth/google';

import logopng from "../../public/logo.png"
import { CredentialResponse, GoogleOAuthProvider } from "@react-oauth/google";
import Image from "next/image";
import React from "react";
import { API_URL } from '@/shared/constants/api';
import api from '@/shared/utils/my-axios';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

const Login = () => {
  const [willLogin, setWillLogin] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const Router = useRouter()
  
  const responseGoogle = async (response: any) => {
    setLoading(true)
    
    
    try{console.log(response);
      const tokenId = response.credential;
      const clientId = response.clientId;
      const fcmToken = localStorage.getItem('fcmToken');   
      
      

    const logar = await api.post(`${API_URL}/login`, 
    {token: tokenId},{
      headers: {
        "authorization": response.token,
        "tipo":response.tipo,
      }
    }
  )
    

    const tipo_user = logar.data.tipo;
    console.log(logar.data.token)
    console.log(logar.data)
    console.log(tipo_user)

    setCookie('token', logar.data.token)
    setCookie('tipo', logar.data.tipo)

    if (tipo_user == "Aluno" || tipo_user == "aluno") {
      Router.push('/aluno')
    } else if (tipo_user == "Secretaria" || tipo_user == "secretaria") {
      Router.push('/secretaria')
    } else if (tipo_user == "Professor" || tipo_user == "professor" ) {
      Router.push('/professor')  
    }
      else 
      console.log("Deu ruim em irmão")

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
                  <div className=" rounded-md border-solid w-full h-12">
                  </div>
                  <div className="ml-20 mb-10">
          {willLogin ? 
          <GoogleLogin onSuccess={responseGoogle} ></GoogleLogin> :
          <button onClick={login} type="submit" className='text-sm -mt-8 font-medium text-primary-600 hover:underline text-white'>Login com </button> 
          }
        </div>
              </form>
          </div>
          
      </div>
  </div>

  </section>
  </main>
  </>
  )}
  export default Login;