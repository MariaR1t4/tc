
"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { NavbarSec } from '@/app/components/navbarsec'
import { API_URL } from '@/shared/constants/api'
import api from '@/shared/utils/my-axios'


type Aulas = {
  map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
  id : string,
    description : string,
    nomeProfessor: string,
    nomeDisciplina: string,
    nomeAula:string
  }
export default function Aula() {
  const {id_aula} = useParams();
  const [aula, setAula] = React.useState<Aulas|null>(null);

 {/* api.interceptors.request.use(config => {
    // loga(log) uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });*/}
  useEffect(()=>{
    api.get( `${API_URL}/professor/aula/encontra-aula/:id_aula`)

    .then(response => {
      setAula (response.data);
      console.log(response.data);
    })
  },[])
  
  return (
    <>
                <title>Professor</title>
 <NavbarSec />      
 <main className='w-full flex-col justify-center h-full'>
 
        <h1 className=" text-center drop-shadow-xl text-gray-700 font-bold mt-20 mb-16 text-4xl">Aulas Registradas</h1>
  
          {aula && aula.map(Aula => (
              <><div className='ml-32 mt-5 mb-6 justify-center inline-block'>
              <div className="max-w-sm rounded overflow-hidden shadow-lg inline-block ml-12 ">


              <div className="px-6 py-4  ">
                <h1 className="font-bold text-xl mb-2">Id Aula:{Aula.id}</h1>
            
            <div className='flex justify-center '>
              
       <a href="/professor"> <button className=' mr-32 bg-green-700 mt-4 w-28 h-10 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white' id='exibeToken'>Voltar</button></a>
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

  /*<tr className=' border hover:bg-blue-200  border-black'>
                <td className=' border  border-black'>{Turma.id_turma}</td>
                <td className=' border border-black'>{Turma.curso}</td>
                <td className=' border border-black'>{Turma.periodo}</td>
                <td className=' border border-black'>{Turma.modulo}</td>
                <td className=' border border-black'>{Turma.descricao}</td>

              </tr>*/