
"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { NavbarSec } from '@/app/components/navbarsec'
import axios from 'axios'

type Turma = {
  map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
  id : string,
  name : string,
  curso: string
}
function Turma() {
  const {id} = useParams();
  const [turma, setTurma] = React.useState<Turma|null>(null);

  axios.interceptors.request.use(config => {
    // loga(log) uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });
  useEffect(()=>{
    axios.get('http://10.5.9.9:38000/app/turma/list/')

    .then(response => {
      setTurma (response.data);
      console.log(response.data);
    })
  },[])
  
  return (
    <>
 <NavbarSec />      
 <main className='w-full flex-col justify-center h-full'>
       
        <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Selecionar turma</h1>
      <table className='border-2 m-auto mt-32 w-1/2 h-auto border-black border-collapse text-center text-2xl' id='tabelaTurma' >
      <thead className=' bg-gray-400'><tr>
            <th className=' border border-black'>Id</th>
            <th className=' border border-black'>Curso</th>
            <th className=' border border-black'>Periodo</th>
            <th className=' border border-black'>Módulo</th>
            <th className=' border border-black'>Descrição</th>
            </tr>
        </thead>
        <tbody >
          {turma && turma.map(Turma => (
            <tr className=' border hover:bg-blue-200  border-black'>
              <td className=' border  border-black'>{Turma.id_turma}</td>
              <td className=' border border-black'>{Turma.curso}</td>
              <td className=' border border-black'>{Turma.periodo}</td>
              <td className=' border border-black'>{Turma.modulo}</td>
              <td className=' border border-black'>{Turma.descricao}</td>

            </tr>
          ))}
        </tbody>
      
      </table>
      <div className='mt-3 flex justify-center gap-96 '>
      <a href="/secretaria/turmas/editar?id={Turma.id_turma}"><button className=' mr-80 bg-green-700 w-28 h-10 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white' id='editarTurma'>Editar Turma</button></a>
      <button className=' bg-blue-700 w-28 h-10 block text-white hover:bg-blue-800 rounded-md transition ease-in duration-100 hover:-translate-y-1' id='verTurma'>Ver Turma</button>
      </div>
    
      </main>
    
  </>
     

  )
}
export default Turma