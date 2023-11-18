
"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { API_URL } from '@/shared/constants/api'
import api from '@/shared/utils/my-axios'
import { NavbarProf } from '@/app/components/navbarprof'


type Turma = {
  map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
    id_turma: number,
    modulo: string,
    curso: string,
    descricao: string,
    periodo: string
  }
function TurmaProf() {
  const {id_turma} = useParams();
  const [turma, setTurma] = React.useState<Turma|null>(null);

  api.interceptors.request.use(config => {
    // loga(log) uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });
  useEffect(()=>{
    api.get( `${API_URL}/secretaria/turma/lista-turma/`)

    .then(response => {
      setTurma (response.data);
      console.log(response.data);
    })
  },[])
  
  return (
    <>
                <title>Professor</title>
 <NavbarProf />      
 <main className='w-full flex-col justify-center h-full'>
 
        <h1 className=" text-center drop-shadow-xl text-gray-700 font-bold mt-20 mb-16 text-4xl">Selecionar turma</h1>
  
          {turma && turma.map(Turma => (
              <><div className='ml-32 mt-5 mb-6 justify-center inline-block'>
              <div className="max-w-sm rounded overflow-hidden shadow-lg inline-block ml-12 ">


              <div className="px-6 py-4  ">
                <div className="font-bold text-xl mb-2">Turma:{Turma.id_turma}</div>
                <p className='text-lg'>Curso: {Turma.curso}
                </p>
                <p className='text-lg'>Periodo: {Turma.periodo}</p>
                <p className='text-lg'>Módulo: {Turma.modulo}</p>
                <p className='text-lg'>Descrição: {Turma.descricao}</p>
            <div className='flex justify-center '>
              
            <a href={`/secretaria/turmas/editar?id_turma=${id_turma}`}>
      <button className=' bg-blue-700 w-28 h-10 float-right mt-4 text-white hover:bg-blue-800 rounded-md transition ease-in duration-100 hover:-translate-y-1'   id='verTurma'>Ver Turma</button></a>
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
export default TurmaProf;
      