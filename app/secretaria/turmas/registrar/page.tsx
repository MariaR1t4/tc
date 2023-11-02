 "use client"


import { NavbarSec } from "@/app/components/navbarsec";
import { API_URL } from "@/shared/constants/api";
import api from "@/shared/utils/my-axios";
import React, { FormEvent, useEffect } from "react";



export default function TurmaCadastro(){
  interface Turma {
    curso:string,
    modulo:string,
    periodo:string,
    descricao:string
  }
  const [form, setForm] = React.useState({curso: '', modulo:'',periodo:'',descricao:''});
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
      const res = await api.post(`${API_URL}/secretaria/turma/cria-turma`,form)
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
            <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Cadastrar Turma</h1>
<form className=" w-1/3 h-full gap-2 flex flex-col ml-auto mr-auto mt-24" onSubmit={enviarParaoBd}>
    
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="curso" id="curso" value={form.curso} onChange={atualizaForm} className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-white rounded-3xl pl-8 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="curso" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Curso:</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="modulo" id="modulo" value={form.modulo} onChange={atualizaForm} className="block pl-8 rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="modulo" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Módulo:</label>
    </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="periodo" id="periodo" value={form.periodo} onChange={atualizaForm} className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack pl-8 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="periodo" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 pl-8 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Periodo:</label>
      
  </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="descricao" id="descricao" value={form.descricao} onChange={atualizaForm} className="block pl-8 rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="descricao" className="peer-focus:font-medium pl-8 absolute text-lg text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Descrição:</label>
    </div>
    
  
 

  <button type="submit"  className="text-white  hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700  dark:focus:ring-green-800" >Criar Turma</button>
</form >
</main>
        </>
    )
}

