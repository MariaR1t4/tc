
"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { NavbarSec } from '@/app/components/navbarsec'
import { API_URL } from '@/shared/constants/api'
import api from '@/shared/utils/my-axios'
import { Router, useRouter } from 'next/router'

type Professor = {
  map(arg0: (Professor: any) => React.JSX.Element): React.ReactNode
  id_professor : string,
  nome : string,
  email: string,
  telefone:string,
}
 export default function ProfSec() {
  const router = useRouter;
  const {id} = useParams();
  const [professor, setProfesor] = React.useState<Professor|null>(null);

  api.interceptors.request.use(config => {
    // loga(log) uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });
  useEffect(()=>{
    api.get(`${API_URL}/secretaria/professor/lista-professor/`)

    .then(response => {
      setProfesor(response.data);
      console.log(response.data);
    })
  },[])
  // faz uma requisição GET
;
useEffect(()=>{
 api.delete(`${API_URL}/secretaria/professor/delete-professor/:id_professor`)
 .then(response=>{
  setProfesor(response.data);
  console.log(response.data)
 })
 })
  
  
return (
  <>
<title>Secretaria</title>
 
<NavbarSec />      
<main className='w-full mb-6 flex-col justify-center h-full'>

      <h1 className=" text-center drop-shadow-xl text-gray-700 font-bold mt-20 mb-16 text-4xl">Selecionar Professor</h1>

        {professor && professor.map(Professor => (
            <>
            <div className='ml-32 mt-5 mb-6 justify-center inline-block'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg inline-block ml-12 ">


            <div className="px-6 py-4  ">
              <div className="font-bold text-xl mb-2">Id:{Professor.id_professor}</div>
              <p className='text-lg'>Professor: {Professor.nome}
              </p>
              <p className='text-lg'>Tel: {Professor.telefone}</p>
              <div className='flex justify-center '>
    <a href="{`/secretaria/professor/editar/${Professor.id_professor}`}"><button className=' mr-32 bg-green-700 w-28 h-10 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white' id='editarProfessor' onClick={()=>{}}>Editar Professor</button></a>
    <button className=' bg-blue-700 w-28 h-10  text-white hover:bg-blue-800 rounded-md transition ease-in duration-100 hover:-translate-y-1' id='excluirProfessor'>Excluir Professor</button>
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
/*<table className='border-2 m-auto mt-32 w-1/2 h-auto border-black border-collapse text-center text-2xl' >
      <thead className=' bg-gray-400'><tr>
            <th className=' border border-black'>Rm</th>
            <th className=' border border-black'>Nome</th>
            <th className=' border border-black'>Email</th>
            <th className=' border border-black'>Senha</th>
            <th className=' border border-black'>Telefone</th>
          
            </tr>
        </thead>
        <tbody >
          {professor && professor.map(Professor => (
            <tr className=' border border-black'>
              <td className=' border border-black'>{Professor.id_tabela_professor}</td>
              <td className=' border border-black'>{Professor.name}</td>
              <td className=' border border-black'>{Professor.email}</td>
              <td className=' border border-black'>{Professor.password}</td>
              <td className=' border border-black'>{Professor.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>*/