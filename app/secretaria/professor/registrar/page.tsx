"use client"
import { NavbarSec } from "@/app/components/navbarsec";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";
import { API_URL } from "@/shared/constants/api";
import api from "@/shared/utils/my-axios";


export default function ProfCadastro(){
    interface Professor {
        name:string,
        telefone:string,
        email:string,
        senha:string
      }
      const [form, setForm] = React.useState({name:'', telefone:'', email:'', password:''});
      const [loading, setLoading] = React.useState(false);
      const [ok, setOk] = React.useState(false);
      const [showFeed, setShowFeed] = React.useState(false);
      const atualizaForm = (ev:{ target: HTMLInputElement; }) =>{
        const {name, value} = ev.target;
        setForm({... form, [name]:value})
      }
      const enviarParaoBd = async (e:FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try{
    
    console.log(form)
          const res = await api.post(`${API_URL}/professor/`,form)
          console.log(res.data)
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
    
    return(
        <>
        <NavbarSec />
        <main className=" w-full h-full">
            <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Cadastrar Professor</h1>
<form className=" w-1/3 h-full gap-2 flex flex-col ml-auto mr-auto mt-24" onSubmit={enviarParaoBd}>
    
  <div className="relative z-0 w-full mb-6 group">      
      <input type="text" name="nomeprof" id="nomeprof" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-white rounded-3xl pl-8 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={atualizaForm} required />
      <label htmlFor="nomeprof" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Nome:</label>
  </div>
 
  <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="telefone" id="telefone" className="block pl-8 rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={atualizaForm} required />
        <label htmlFor="telefone" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Telefone:</label>
    </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="email" id="email" className="block pl-8 rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={atualizaForm} required />
      <label htmlFor="email"  className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 pl-8 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Email:</label>
      
  </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="password" name="senha" id="senha" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 pl-8 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={atualizaForm} required />
        <label htmlFor="senha" className="peer-focus:font-medium pl-8 absolute text-lg text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Senha:</label>
    </div>
  
 

  <button type="submit" className="text-white  hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700  dark:focus:ring-green-800">Registrar Professor</button>
</form >
</main>
        </>
    )
}

