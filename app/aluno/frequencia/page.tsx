"use client"

import { NavbarAluno } from "@/app/components/navbaraluno"
import axios from 'axios'
import { useParams } from "next/navigation"


type Turma = {
    map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode
    id: string,
    name : string,
    curso: string
    
  }

export default function frequencia(){
    const {id} = useParams();
    const [frequencia, setFrequencia] = React.useState<Turma|null>(null);

    axios

    return(
<>
<main>
<NavbarAluno/>

<h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Frenquência</h1>

<table className='border-2 m-auto mt-32 w-1/2 h-auto border-black border-collapse text-center text-2xl'>
    <thead className=' bg-gray-400'>
        <tr>
            <th className=' border border-black'>Nome</th>
            <th className=' border border-black'>Faltas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className=' border border-black'>vanesso</td>
            <td className=' border border-black'>20</td>
        </tr>
    </tbody>
</table>
</main>
</>
)
}