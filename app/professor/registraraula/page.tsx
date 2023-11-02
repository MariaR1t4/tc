"use client"
import { NavbarSec } from "@/app/components/navbarsec";
import axios from "axios";
import { useParams } from "next/navigation";
import React, {useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import MyFade from "@/app/components/my-fade"



export default function ProfEditar() {
 
        const [form, setForm] = React.useState({ nome: '', idProf: '', idTurma: '', descricao: '' });
        const [loading, setLoading] = React.useState(false);
        const [ok, setOk] = React.useState(false);
        const [showFeed, setShowFeed] = React.useState(false);
        const atualizaForm = (e: { target: { nome: any; value: any; }; }) => {
          const { nome, value } = e.target;
          setForm({ ...form, [nome]: value })
        }
        const enviaServidor = async (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          setLoading(true);
          try{
          const res = await fetch('http://localhost:38000/alunos', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(form)
          });
          setTimeout(() => {
            setLoading(false);
            setOk(true);
            setShowFeed(true);
           }, 2000);
      
          } catch(err) {
            setOk(false);
            setShowFeed(true);
            setLoading(false);
          }
      
        }
   
    return(
        <>
        <NavbarSec />
        <main className=" w-full h-full">
            <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Criar aula</h1>
<form className=" w-1/3 h-full gap-2 flex flex-col ml-auto mr-auto mt-24" >
    
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="nomeprof" id="nomeprof" className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-white rounded-3xl pl-8 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="nomeprof" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Nome:</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="codprof" id="codprof" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="codprof" className="peer-focus:font-medium absolute pl-8 text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Código do Professor:</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="aulasprof" id="aulasprof" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="aulasprof" className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Código da turma</label>
    </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="emailprof" id="emailprof" className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="emailprof" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 pl-8 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9">Descrição:</label>
      
  </div>
  {loading && <div style={{position: "absolute", zIndex: 1000, top: "45vh", left: "45vw", width: "20vw", height: "20vh"}} ><ClipLoader
        color={"black"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        
      /></div>}

      {/*showFeed && <MyBackdrop feed={ok} show={showFeed} cancelShow={() => setShowFeed(false)}  /> */}
      <MyFade in={showFeed} cancelShow={() => setShowFeed(false)}/>
    
  
 

    <div className='mt-4 flex justify-center gap-96 '>
      <button className=' bg-green-700 w-48 h-14 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white' onClick={enviaServidor}>Criar Aula</button>
      <button className=' bg-red-700 w-48 h-14 text-white hover:bg-red-800 rounded-md transition ease-in duration-100 hover:-translate-y-1'>Excluir Aula</button>
      </div>
</form >
</main>
        </>
    )
}

