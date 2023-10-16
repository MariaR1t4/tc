"use client"
import React, { useState } from 'react';
import { NavbarAluno } from "@/app/components/navbaraluno";
import { useParams } from "next/navigation";


type Frequencias = {
    map(arg0: (Frequencia: any) => React.JSX.Element): React.ReactNode
    id : string,
    name : string,
    faltas: string
  }
  export default function Frequencia() {
    const {id} = useParams();
    const [frequencia, setFrequencia] = React.useState<Frequencias|null>(null);
  
    const carregaFrequencia = async () => {
      
      try{
      const res = await fetch('http://localhost:38000/alunos');
      const data = await res.json();
      setFrequencia(data);
      console.log(frequencia)
      }catch(err){
  
        console.log(err);
      }
  
    }
  
    React.useEffect(() => {
      carregaFrequencia();
    }, [])

    return(
<>
<main>
<NavbarAluno/>

<h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Frequência</h1>

<table className='border-2 m-auto mt-32 w-1/2 h-auto border-black border-collapse text-center text-2xl'>
    <thead className=' bg-gray-400'>
        <tr>
            <th className=' border border-black'>Nome</th>
            <th className=' border border-black'>Faltas</th>
        </tr>
    </thead>
    <tbody>
        {frequencia && frequencia.map(Frequencia =>(
        <tr key={Frequencia.id}>
            <td className=' border border-black'>{Frequencia.name}</td>
            <td className=' border border-black'>{Frequencia.faltas}</td>
        </tr>
        ))}
        
    </tbody>
</table>
</main>
</>
)
}