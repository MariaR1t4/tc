'use client'
import React, { useEffect } from "react";
import MyFade from "@/app/components/my-fade";
import { ClipLoader } from "react-spinners";
import MyBackdrop from "@/app/components/backdrop";
import { NavbarAluno } from "@/app/components/navbar-aluno";
import { API_URL } from "@/shared/constants/api";
import api from "@/shared/utils/my-axios";


export default function RegFrequencia() {
  interface Frequencia {
    token_aluno: ""
  };
  const [form, setForm] = React.useState({ nome: '', idProf: '', idTurma: '', descricao: '', token_aluno: '' });
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
    try {
      const res = await api.post(`${API_URL}/professor/aula/cria-aula`, form);
      console.log(res.data);
      setTimeout(() => {
        setLoading(false);
        setShowFeed(true);
      }, 2000);
    } catch (err) {
      setShowFeed(true);
      setLoading(false);
    }
  };



  return (
    <>
      <main className=" w-full h-full">
        <NavbarAluno />
        <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Registrar Frequência</h1>

        {loading && <div style={{ position: "absolute", zIndex: 1000, top: "55vh", left: "46vw", width: "20vw", height: "20vh" }} ><ClipLoader
          color={"black"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"

        /></div>}

        {showFeed && <MyBackdrop feed={ok} show={showFeed} cancelShow={() => setShowFeed(false)} />}
        <MyFade in={showFeed} cancelShow={() => setShowFeed(false)} />

        <div className="flex justify-center items-center mt-32 flex-col">
          <input type="text" name="token" id="token" className="relative py-2.5 px-0 w-2/6 text-lg mb-10 text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-center" placeholder=" Insira o código do Token " required />
          <button className=' bg-gray-700 w-44 h-10 hover:bg-gray-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white' onClick={enviaServidor}>Enviar</button>
        </div>

      </main>
    </>
  )
}