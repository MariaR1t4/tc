
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
 export default function ProfSec() {
  const {id} = useParams();
  const [professor, setProfesor] = React.useState<Alunos|null>(null);

  api.interceptors.request.use(config => {
    // loga(log) uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });
  useEffect(()=>{
    api.get(`${API_URL}/professor/`)

    .then(response => {
      setProfesor (response.data);
      console.log(response.data);
    })
  },[])
  // faz uma requisição GET
;
  
  
return (
  <>
<NavbarSec />      
<main className='w-full flex-col justify-center h-full'>

      <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Selecionar turma</h1>

        {professor && professor.map(Professor => (
            <><div className='ml-24 mt-7 inline-block'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg inline-block ml-5 ">


            <div className="px-6 py-4  ">
              <div className="font-bold text-xl mb-2">Id:{Professor.id_tabela_professor}</div>
              <p className="text-gray-700 text-base">Professor: {Professor.name}
              </p>
              <p>Email: {Professor.email}</p>
              <p>Senha: {Professor.password}</p>
              <p>Tel: {Professor.telefone}</p>
              <div className='mt-3 flex justify-center gap-96 '>
    <a href="/secretaria/turmas/editar?id={Turma.id_turma}"><button className=' mr-80 bg-green-700 w-28 h-10 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white' id='editarTurma'>Editar Turma</button></a>
    <button className=' bg-blue-700 w-28 h-10 block text-white hover:bg-blue-800 rounded-md transition ease-in duration-100 hover:-translate-y-1' id='verTurma'>Ver Turma</button>
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