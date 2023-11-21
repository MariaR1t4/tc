"use client"

import { NavbarSec } from "@/app/components/navbarsec";
import Turma from "@/app/professor/turmas/page";
import { API_URL } from "@/shared/constants/api";
import api from "@/shared/utils/my-axios";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";


type Turma = {
  id_turma: string,
  modulo: string,
  curso: string,
  descricao: string,
  periodo: string,
};
export default function TurmaEditar(){
    
    // const id_turma = "1d6655e1-20f7-47d8-85e5-c28751f31147";
    const id_turma = localStorage.getItem("idTurma");
    console.log('id ->', id_turma)
    const [turma, setTurma] = React.useState({
      modulo: "",
      curso: "",
      descricao: "",
      periodo: "",
    });
  
    useEffect(() => {
      // Fazer uma solicitação GET para obter os detalhes da turma a ser editada
      api.get(`${API_URL}/secretaria/turma/encontra-turma/${id_turma}`)
        .then((response) => {
          console.log('dados ->',response)
          setTurma(response.data);
          console.log("turma", turma)
        })
        .catch((error) => {
          console.error("Erro ao carregar os dados da turma:", error);
        });
    }, []);
  
    const atualizaForm = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = ev.target;
      setTurma({ ...turma, [name]: value });
    };
    const handleEditarTurma = (event: React.FormEvent) => {
      event.preventDefault();
      api.put(`${API_URL}/secretaria/turma/edita-turma/${id_turma}`, turma)
        .then((response) => {
          console.log("Turma editada com sucesso:", response.data);
        })
        .catch((error) => {
          console.error("Erro ao editar a turma:", error);
        });
    };
    /*api.interceptors.request.use(config => {
      // loga(log) uma mensagem antes da requisição HTTP ser enviada
      console.log('A requisição foi enviada');
      return config;
    });
    useEffect(()=>{
      api.put(`${API_URL}/secretaria/turma/edita-turma/:id_turma}` )
         
      .then(response => {
        setTurma (response.data);
        console.log(response.data);
      })
    },[])*/
    return(
        <>
 <title>Secretaria</title>
        <NavbarSec />
        <main className=" w-full h-full">
            <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Editar Turma</h1>
<form className=" w-1/3 h-full gap-2 flex flex-col ml-auto mr-auto mt-24" onSubmit={handleEditarTurma} >
    
  <div className="relative z-0 w-full mb-6 group">
  <input
  type="text" name="curso"id="cursoturma" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-white rounded-3xl pl-8 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={turma?.curso || ''} onChange={atualizaForm} placeholder="" required
/>      <label htmlFor="cursoturma" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Curso: </label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="modulo" id="modulo" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={turma?.modulo || ''} onChange={atualizaForm} required />
        <label htmlFor="modulo" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Módulo:</label>
    </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="periodo" id="periodo" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={turma?.periodo || ''} onChange={atualizaForm} required />
      <label htmlFor="periodo" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Período:</label>
      
  </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="descricao" id="descricao" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" value={turma?.descricao || ''} onChange={atualizaForm} required />
        <label htmlFor="descricao" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Descrição:</label>
    </div>
    <div className='mt-3 flex justify-center gap-96 '>
      <button type="submit" className=' bg-green-700 w-44 h-14 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white'> Editar Turma</button>
      <button className=' bg-red-700 w-48 h-14 text-white hover:bg-red-800 rounded-md transition ease-in duration-100 hover:-translate-y-1'>Excluir Turma</button>
      </div>
</form >
</main>
        </>

        
    )
}

