
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
export default function Aluno() {
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
      <h1 className=" text-center text-gray-700 font-bold mt-12 text-7xl">Selecionar turma do aluno</h1>
      <table className='border-2 m-auto mt-32 w-2/3 h-96 border-black border-collapse text-center text-4xl' >
      <thead className=' bg-gray-400'><tr>
            <th className=' border border-black'>Rm</th>
            <th className=' border border-black'>Nome</th>
            <th className=' border border-black'>Curso</th>
            </tr>
        </thead>
        <tbody >
          {aluno && aluno.map(Aluno => (
            <tr className=' border border-black' key={Aluno.id}>
              <td className=' border border-black'>{Aluno.id}</td>
              <td className=' border border-black'>{Aluno.name}</td>
              <td className=' border border-black'>{Aluno.curso}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-3 flex justify-center gap-96 '>
      <button className=' mr-80 bg-green-700 w-28 h-10 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white'>Selecionar Turma</button>
      <button className=' bg-red-700 w-28 h-10 text-white hover:bg-red-800 rounded-md transition ease-in duration-100 hover:-translate-y-1'>Excluir Turma</button>
      </div>
      </main>
    
  </>
     

  )
}
