"use client"
import axios from "axios";
import Image from "next/image";
import test from "node:test";
import React, { FormEvent } from "react";
import logopng from "../../public/logo.png"
export default function Login(){
    interface Login  {
        email:string,
        password:string
    }
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    console.log(email, password);
    const validaEmail = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    );
    const validaPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$")
    const [emailErr, setEmailErr] = React.useState(false);
    const [passwordErr, setPasswordErr] = React.useState(false);
    const validatemail = ()=>{
      if(!validaEmail.test(email)){
        setEmailErr(true)
      }
      else{
        setEmailErr(false)
      }
    }
    const validatePass = ()=>{
      if(!validaEmail.test(email)){
        setPasswordErr(true)
      }
      else{
        setPasswordErr(false)
      }
    }
    const [login, setLogin] = React.useState({
      email:"", 
      password:""
    });
  const [loading, setLoading] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const [showFeed, setShowFeed] = React.useState(false);
  const Loginn = (ev:{ target: HTMLInputElement; }) =>{
    const {name, value} = ev.target;
    setLogin({... login, [name]:value})
  }

  const pegaDoBd = async (e:FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try{

console.log(login)
      const res = await axios.post('http://10.5.9.9:38000/auth/login/aluno', login)
      localStorage.setItem("token", res.data.token)
      if(res.status === 401){
        console.log("Error")
      }else{
        console.log("Foi");
        console.log(res);
        return location.href = "http://localhost:3000/secretaria"
      }
      setTimeout(() => {

        setLoading(false);
        setOk(true);
        setShowFeed(true);
       }, 2000);
  
      } catch(err) {
        setOk(false);
        setShowFeed(true);
        setLoading(false);
      }}
   const isEmailValid = (email:string)=>{
    console.log( /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email))

   }
  return(
  <>
<main>
    <section className=" w-1/2 float-left">
        <Image src={logopng} alt="" className=" relative w-5/6 ml-16 mt-12" />

    </section>
  <section className=" w-1/2 h-full float-right">
  <div className="flex flex-col items-center mt-56 py-8 md:h-72 w-full ">
     
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 h-96     dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl -mt-4 dark:text-white" >
                {"Entre em sua conta"}  
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={pegaDoBd}>
                  <div>
                      <label  htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Digite seu email institucional:</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@mail.com" value={email} onChange={e=>setEmail(e.target.value)} required />
                      {!login.email && <span className="text-white text-xs" data-testid="email-requerid">Email é obrigatório</span>}
                   
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insira sua senha:</label>
                      <input type="password" name="password" id="password" placeholder="*******" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>setPassword(e.target.value)} value={password} required />
                  </div>
                  <div className="flex items-center justify-between">
                      <a href="#" className="text-sm -mt-4 font-medium text-primary-600 hover:underline text-white ">Esqueceu a senha?</a>
                  </div>
                  <div className=" rounded-md border-solid w-full h-12">
                <button type="submit" className="w-full text-white h-full bg-green-500 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ingressar</button>
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