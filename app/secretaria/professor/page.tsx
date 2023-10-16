
"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { NavbarSec } from '@/app/components/navbarsec'
import axios from 'axios'

type Alunos = {
  map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
  id : string,
  name : string,
  curso: string
}
 export default function ProfSec() {
  const {id} = useParams();
  const [professor, setProfesor] = React.useState<Alunos|null>(null);

  axios.interceptors.request.use(config => {
    // loga(log) uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });
  useEffect(()=>{
    axios.get('http://10.5.9.9:38000/app/professor/')

    .then(response => {
      setProfesor (response.data);
      console.log(response.data);
    })
  },[])
  // faz uma requisição GET
;
  
  
  return (
    <>
      <main className='w-full h-full'>
        <NavbarSec />
        <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Selecionar Professor</h1>
      <table className='border-2 m-auto mt-32 w-1/2 h-auto border-black border-collapse text-center text-2xl' >
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
            // eslint-disable-next-line react/jsx-key
            <tr className=' border border-black'>
              <td className=' border border-black'>{Professor.id_tabela_professor}</td>
              <td className=' border border-black'>{Professor.name}</td>
              <td className=' border border-black'>{Professor.email}</td>
              <td className=' border border-black'>{Professor.password}</td>
              <td className=' border border-black'>{Professor.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-3 flex justify-center gap-96 '>
      <a href="/secretaria/professor/editar?id=${p.rm}"><button className='mr-80 bg-green-700 w-32 h-10 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white'>Editar Professor</button></a>
      <button className=' bg-blue-700 w-28 h-10 text-white hover:bg-blue-800 rounded-md transition ease-in duration-100 hover:-translate-y-1'>Ver Professor</button>
      </div>   
      </main>
    
  </>
     

  )
}
