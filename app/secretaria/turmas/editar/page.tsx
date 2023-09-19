"use client"

import { NavbarSec } from "@/app/components/navbarsec";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";


type Turma = {
    map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
    id_turma : string,
    name : string,
    curso: string
  }
export default function TurmaEditar(){
    
    const {id} = useParams();
    const [turma, setTurma] = React.useState<|null>(null);
  
    axios.interceptors.request.use(config => {
      // loga(log) uma mensagem antes da requisição HTTP ser enviada
      console.log('A requisição foi enviada');
      return config;
    });
    useEffect(()=>{
      axios.get('http://10.5.9.9:38000/app/turma/')
  
      .then(response => {
        setTurma (response.data);
        console.log(response.data);
      })
    },[])
    return(
        <>
        <NavbarSec />
        <main className=" w-full h-full">
            <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Editar Turma</h1>
<form className=" w-1/3 h-full gap-2 flex flex-col ml-auto mr-auto mt-24" >
    
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="cursoturma" id="cursoturma" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-white rounded-3xl pl-8 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  required />
      <label htmlFor="cursoturma" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Curso:</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="codturma" id="codturma" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="codturma" className="peer-focus:font-medium absolute pl-8 text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Código da Turma:</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="salaturma" id="salaturma" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="salaturma" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Sala:</label>
    </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="repeat_password" id="floating_repeat_password" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 pl-8 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Turno:</label>
      
  </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="number" name="qntdalrturma" id="qntdalrturma" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="qntdalrturma" className="peer-focus:font-medium pl-8 absolute text-lg text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Quantidade de Alunos:</label>
    </div>
    <div className='mt-3 flex justify-center gap-96 '>
      <button className=' bg-green-700 w-44 h-14 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white'>Editar Turma</button>
      <button className=' bg-red-700 w-48 h-14 text-white hover:bg-red-800 rounded-md transition ease-in duration-100 hover:-translate-y-1'>Excluir Turma</button>
      </div>
</form >
</main>
        </>

        
    )
}

