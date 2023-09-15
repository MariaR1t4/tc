"use client"
import { NavbarSec } from "@/app/components/navbarsec";
import axios from "axios";
import { useParams } from "next/navigation";
import React, {useEffect} from "react";


export default function ProfEditar(){
    const {id} = useParams();
    const [professor, setProfessor] = React.useState<|null>(null);
  
    axios.interceptors.request.use(config => {
      // loga(log) uma mensagem antes da requisição HTTP ser enviada
      console.log('A requisição foi enviada');
      return config;
    });
    useEffect(()=>{
      axios.get('http://10.5.9.9:38000/app/professor/ ')
  
      .then(response => {
        setProfessor(response.data);
        console.log(response.data);
      })
    },[])
    return(
        <>
        <NavbarSec />
        <main className=" w-full h-full">
            <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Editar Professor</h1>
<form className=" w-1/3 h-full gap-2 flex flex-col ml-auto mr-auto mt-24" >
    
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="nomeprof" id="nomeprof" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-white rounded-3xl pl-8 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="nomeprof" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Nome:</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="codprof" id="codprof" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="codprof" className="peer-focus:font-medium absolute pl-8 text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Código do Professor:</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="aulasprof" id="aulasprof" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="aulasprof" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Aulas Atribuidas:</label>
    </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="emailprof" id="emailprof" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="emailprof" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 pl-8 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Email:</label>
      
  </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="number" name="disciplinaprof" id="disciplinaprof" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="disciplinaprof" className="peer-focus:font-medium pl-8 absolute text-lg text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Disciplina:</label>
    </div>
  
 

    <div className='mt-4 flex justify-center gap-96 '>
      <button className=' bg-green-700 w-48 h-14 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white'>Editar Professor</button>
      <button className=' bg-red-700 w-48 h-14 text-white hover:bg-red-800 rounded-md transition ease-in duration-100 hover:-translate-y-1'>Excluir Professor</button>
      </div>
</form >
</main>
        </>
    )
}

