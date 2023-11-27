import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import logopng from '../../public/logo.png';
import Image from 'next/image';
import { API_URL } from '@/shared/constants/api';
import api from '@/shared/utils/my-axios';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

const Login = () => {
  const [willLogin, setWillLogin] = useState(true); 
  const [loading, setLoading] = useState(false);
  const Router = useRouter();

  useEffect(() => {
   
    setWillLogin(true); 
  }, []);

  const responseGoogle = async (response : any) => {
    setLoading(true);
    
    try {
      console.log(response);
      const tokenId = response.credential;
      const clientId = response.clientId;
      const fcmToken = localStorage.getItem('fcmToken');   
      
      

      await api.post(`${API_URL}/login`, { token: tokenId, fcmToken });

      const logar = await api.post(`${API_URL}/login`, { token: tokenId, fcmToken });
      const tipo_user = logar.data.tipo;

      if (tipo_user === 'Aluno' || tipo_user === 'aluno' || tipo_user === 'Secretaria' || tipo_user === 'secretaria' || tipo_user === 'Professor' || tipo_user === 'professor') {
        Router.push(`/${tipo_user.toLowerCase()}`); 
      } else {
        console.log('Tipo de usuário inválido');
      }
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const login = async (e : any) => {
    e.preventDefault();
    setWillLogin(true);
  };

  return (
    <>
      <title>Alumnus</title>
      <main>
        <section className="w-1/2 float-left">
          <Image src={logopng} alt="" className="relative w-5/6 ml-16 mt-12" />
        </section>
        <section className="w-1/2 h-96 float-right">
          <div className="flex flex-col items-center mt-56 py-8 md:h-72 w-full">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 h-96 dark:border-gray-700">
              <div className="p-6 space-y-4 -mt-2 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-700 md:text-2xl -mt-4 dark:text-white">
                  {'Entre em sua conta'}
                </h1>
                <div className="ml-14 mb-10">
                  {willLogin ? (
                    <GoogleLogin onSuccess={responseGoogle}></GoogleLogin>
                  ) : (
                    <button onClick={login} type="submit" className='text-sm -mt-8 font-medium text-primary-600 hover:underline text-black bg-gray-100'>
                      Login com Google
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <ul className="float-right mt-56 mr-64">
            <li>Quem somos?</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Login;
