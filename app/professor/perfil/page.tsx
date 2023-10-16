"use client"
import React, { useState } from 'react';


import { NavbarProf } from '@/app/components/navbarprof';



export default function PerfilProf(){
  return(
<main>
<NavbarProf/>

<h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Perfil do professor</h1>

<table className='border-2 m-auto mt-32 w-1/2 h-auto border-black border-collapse text-center text-2xl'>
    <thead className=' bg-gray-400'>
        <tr>
            <th className=' border border-black'>Nome</th>
            <th className=' border border-black'>email</th>
            <th className=' border border-black'>contato</th>
            <th className=' border border-black'>modulo</th>
        </tr>
    </thead>
    <tbody>
     
        
    </tbody>
</table>
</main>
  )
  }
