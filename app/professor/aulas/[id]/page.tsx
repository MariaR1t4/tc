
"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { NavbarSec } from '@/app/components/navbarsec'
import { API_URL } from '@/shared/constants/api'
import api from '@/shared/utils/my-axios'
import circlesvg from '../[id]/circle.svg'
import Image from 'next/image'

type Aulas = {
  map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
  id : string,
    description : string,
    nomeProfessor: string,
    nomeDisciplina: string,
    nomeAula:string
  }
export default function Aula() {
  const {id} = useParams();
  const [aula, setAula] = React.useState<Aulas|null>(null);

 {/* api.interceptors.request.use(config => {
    // loga(log) uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });*/}
  useEffect(()=>{
    api.get( `${API_URL}/professor/aula/encontra-aula/${id}`)

    .then(response => {
      setAula (response.data);
      console.log(response.data);
    })
  },[])
 
  return (
    <>
                <title>Professor</title>
 <NavbarSec />    
 <></>  
 <main className='w-full flex-col justify-center h-full'>
      
        
          {aula && (
              <div >
                 <Image className="ml-auto mr-auto w-1/2 animate-spin"  alt="" src={circlesvg} />
                <h1 className="font-bold text-8xl text-center absolute top-1/2 -ml-48 left-2/4">{id}</h1>
                
      <div className='flex justify-center '>
       </div>
              </div>
     
          )}
      </main>
  </>
  )
}

  /*<tr className=' border hover:bg-blue-200  border-black'>
                <td className=' border  border-black'>{Turma.id_turma}</td>
                <td className=' border border-black'>{Turma.curso}</td>
                <td className=' border border-black'>{Turma.periodo}</td>
                <td className=' border border-black'>{Turma.modulo}</td>
                <td className=' border border-black'>{Turma.descricao}</td>

              </tr>*/