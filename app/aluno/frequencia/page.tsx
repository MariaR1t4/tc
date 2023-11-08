"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { NavbarAluno } from '@/app/components/navbar-aluno';
import api from '@/shared/utils/my-axios';
import { API_URL } from '@/shared/constants/api';


type Frequencias = {
    map(arg0: (Frequencia: any) => React.JSX.Element): React.ReactNode
    rm : string,
    qtd_frequencia : string,
    data_frequencia: string
  }
  export default function Frequencia() {
    const {id} = useParams();
    const [frequencia, setFrequencia] = React.useState<Frequencias|null>(null);
  
    api.interceptors.request.use(config => {
        // loga(log) uma mensagem antes da requisição HTTP ser enviada
        console.log('A requisição foi enviada');
        return config;
      });
      useEffect(()=>{
        api.get( `${API_URL}/frequencia/lista-frequencia/`)
    
        .then(response => {
          setFrequencia (response.data);
          console.log(response.data);
        })
      },[])

    return(
<>
<main>
<NavbarAluno/>

<h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Frequência</h1>

<table className='border-2 m-auto mt-32 w-1/2 h-auto border-black border-collapse text-center text-2xl'>
    <thead className=' bg-gray-400'>
        <tr>
            <th className=' border border-black'>Rm:</th>
            <th className=' border border-black'>Data Frequencia</th>
            <th className=' border border-black'>Quantidade de Frequencia</th>
        </tr>
    </thead>
    <tbody>
        {frequencia && frequencia.map(Frequencia =>(
        <tr key={Frequencia.rm}>
            <td className=' border border-black'>{Frequencia.rm}</td>
            <td className=' border border-black'>{Frequencia.data_frequencia}</td>
            <td className=' border border-black'>{Frequencia.qtd_frequencia}</td>
        </tr>
        ))}
        
    </tbody>
</table>
</main>
</>
)
}