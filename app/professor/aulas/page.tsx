"use client"
import { NavbarProf } from "@/app/components/navbarprof";
import { API_URL } from "@/shared/constants/api";
import api from "@/shared/utils/my-axios";
import { type } from "os";
import React, { useEffect } from "react";
import { useState } from "react";

type Aulas ={
    map(arg0: (Aula: any) => React.JSX.Element): React.ReactNode
    id : string,
    name : string,
    curso: string
  }


export default function RegistroAula(){
    const [startDate, setStartDate] = useState(new Date());
    const [aulas, setAulas]= React.useState()
    useEffect(()=>{
        api.get(`${API_URL}/aluno/`)
    
        .then(response => {
          setAulas (response.data);
          console.log(response.data);
        })
      },[])

    return(
        <>
        <NavbarProf />
        
        
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

        </>
    )
}