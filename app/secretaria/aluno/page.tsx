
"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import { NavbarSec } from '@/app/components/navbarsec'

type Alunos = {
  map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
  id : string,
  name : string,
  curso: string
}
export default function TurmadoAluno() {
  const {id} = useParams();
  const [aluno, setAluno] = React.useState<Alunos|null>(null);

  const carregaAluno = async () => {
    
    try{
    const res = await fetch('http://localhost:38000/alunos');
    const data = await res.json();
    setAluno(data);
    console.log(aluno)
    }catch(err){

      console.log(err);
    }

  }

  React.useEffect(() => {
    carregaAluno();
  }, [])
  
  return (
    <>

      <main className='w-full h-full'>
        <NavbarSec />
      <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Selecionar turma do aluno</h1>
      <table className='border-2 m-auto mt-32 w-1/2 h-auto border-black border-collapse text-center text-2xl' >
      <thead className=' bg-gray-400'><tr>
            <th className=' border border-black'>Rm</th>
            <th className=' border border-black'>Nome</th>
            <th className=' border border-black'>Curso</th>
            </tr>
        </thead>
        <tbody >
          {aluno && aluno.map(Aluno => (
            <tr className=' border border-black'>
              <td className=' border border-black'>{Aluno.id}</td>
              <td className=' border border-black'>{Aluno.name}</td>
              <td className=' border border-black'>{Aluno.curso}</td>
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
