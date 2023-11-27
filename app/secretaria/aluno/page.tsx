
"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { NavbarSec } from '@/app/components/navbarsec'
import { API_URL } from '@/shared/constants/api'
import api from '@/shared/utils/my-axios'
import Image from "next/image";
import Aluno from './alunos/page'
import turmapgn from "../../../public/turma.png"


type Alunos = {
  map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
  rm : string,
  name : string,
  email: string,
  telefone:string
}
export default function AlunodoAluno() {
  const {rm} = useParams();
  const [aluno, setAluno] = React.useState<Alunos|null>(null);

  api.interceptors.request.use(config => {
    // loga(log) uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });
  useEffect(()=>{
    api.get(`${API_URL}/secretaria/aluno/lista-aluno/`)

    .then(response => {
      setAluno (response.data);
      console.log(response.data);
    })
  },[])
  
  return (
    <>
    
    <title>Secretaria</title>

 <NavbarSec />      
 <main className='w-full flex-col justify-center h-full'>
 
        <h1 className=" text-center drop-shadow-xl mb-16 text-gray-700 font-bold mt-20 text-4xl">Selecionar Aluno</h1>
  
          {aluno && aluno.map(Aluno => (
              <>
              <div className='ml-32 mt-5 mb-6 justify-center inline-block'>
              <div className="max-w-sm rounded overflow-hidden shadow-lg inline-block ml-12 ">
              <div className="px-6 py-4  ">
                <div className="font-bold text-xl mb-2">Aluno: {Aluno.nome}</div>
                <h2 className='text-lg'>Rm: {Aluno.rm}
                </h2>
                <h2 className='text-lg'>Telefone: {Aluno.telefone}</h2>
                <div className='flex justify-center '>
      <a href="/secretaria/aluno/editar/id={Aluno.rm}"><button className=' mr-32 bg-green-700 w-28 h-10 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white' onClick={() => localStorage.setItem("rm", Aluno.rm)} id='editarAluno'>Editar Aluno</button></a>
      <button className=' bg-blue-700 w-28 h-10  text-white hover:bg-blue-800 rounded-md transition ease-in duration-100 hover:-translate-y-1' id='verAluno'>Ver Aluno</button>
      </div>
      </div>
              
            </div>
            </div>
              </>
          ))}  
      </main>
  </>
     

  )
}
/*<table className='border-2 m-auto mt-20 w-1/2 h-auto border-black border-collapse text-center text-2xl' >
<thead className=' bg-gray-400'><tr>
      <th className=' border border-black'>Rm</th>
      <th className=' border border-black'>Nome</th>
      <th className=' border border-black'>Email</th>
      <th className=' border border-black'>Telefone</th>
      <th className=' border border-black'>Senha</th>
   
      </tr>
  </thead>
  <tbody >
    {aluno && aluno.map(Aluno => (
      <tr className=' border border-black'>
        <td className=' border border-black'>{Aluno.rm}</td>
        <td className=' border border-black'>{Aluno.nome}</td>
        <td className=' border border-black'>{Aluno.email}</td>
        <td className=' border border-black'>{Aluno.telefone}</td>
        <td className=' border border-black'>{Aluno.senha}</td>

      </tr>
    ))}
  </tbody>
</table>*/