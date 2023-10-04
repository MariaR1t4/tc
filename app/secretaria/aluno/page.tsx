
"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { NavbarSec } from '@/app/components/navbarsec'
import { API_URL } from '@/shared/constants/api'
import api from '@/shared/utils/my-axios'

type Alunos = {
  map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
  id : string,
  name : string,
  curso: string
}
export default function TurmadoAluno() {
  const {id} = useParams();
  const [aluno, setAluno] = React.useState<Alunos|null>(null);

  api.interceptors.request.use(config => {
    // loga(log) uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });
  useEffect(()=>{
    api.get(`${API_URL}/aluno/`)

    .then(response => {
      setAluno (response.data);
      console.log(response.data);
    })
  },[])
  
  return (
    <>

      <main className='w-full h-full'>
        <NavbarSec />
      <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Selecionar turma do aluno</h1>
      <table className='border-2 m-auto mt-32 w-1/2 h-auto border-black border-collapse text-center text-2xl' >
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
      </table>
      <div className='mt-3 flex justify-center gap-96 '>
      <button className=' bg-green-700 mr-80 w-32 h-10 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white'>Editar Aluno</button>
      <button className=' bg-blue-700 w-28 h-10 text-white hover:bg-blue-800 rounded-md transition ease-in duration-100 hover:-translate-y-1'>Ver Aluno</button>
      </div>
      </main>
    
  </>
     

  )
}
