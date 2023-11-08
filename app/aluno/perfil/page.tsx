"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { NavbarAluno } from '@/app/components/navbar-aluno';
import { API_URL } from '@/shared/constants/api';
import api from '@/shared/utils/my-axios';


type Aluno = {
    map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
    rm : string,
    nome : string,
    telefone: string
  }
  export default function AlunoPerfil() {
    const {rm} = useParams();
    const [aluno, setAluno] = React.useState<Aluno|null>(null);
  
    useEffect(()=>{
      api.get( `${API_URL}/secretaria/aluno/lista-aluno/`)
  
      .then(response => {
        setAluno (response.data);
        console.log(response.data);
      })
    },[])
  
    

    return(
<>
<main>
<NavbarAluno/>

<h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Perfil do Aluno</h1>

<table className='border-2 m-auto mt-32 w-1/2 h-auto border-black border-collapse text-center text-2xl'>
    <thead className=' bg-gray-400'>
        <tr>
            <th className=' border border-black'>RM:</th>
            <th className=' border border-black'>Nome</th>
            <th className=' border border-black'>Telefone:</th>
        </tr>
    </thead>
    <tbody>
        {aluno && aluno.map(Aluno =>(
        <tr key={Aluno.rm}>
            <td className=' border border-black'>{Aluno.rm}</td>
            <td className=' border border-black'>{Aluno.nome}</td>
            <td className=' border border-black'>{Aluno.telefone}</td>

        </tr>
        ))}
        
    </tbody>
</table>
</main>
</>
)
}