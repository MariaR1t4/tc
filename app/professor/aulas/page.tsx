"use client";
import { NavbarProf } from "@/app/components/navbarprof";
import { API_URL } from "@/shared/constants/api";
import api from "@/shared/utils/my-axios";
import { useRouter } from "next/router";
import { type } from "os";
import React, { FormEvent, useEffect } from "react";
import { useState } from "react";

type Aulas = {
  map(arg0: (Aula: any) => React.JSX.Element): React.ReactNode;
  id_aula: string;
  professor_disciplina: string;
  descricao: string;
};

type Professor = {
  id: number;
  name: string;
};

type Materias = {
  id: number;
  name: string;
  teacherId: number;
};

const professores: Professor[] = [
  { id: 1, name: "Adileine" },
  { id: 2, name: "Fillipe" },
  { id: 3, name: "Robson" },
];

const materias: Materias[] = [
  { id: 1, name: "Banco de Dados", teacherId: 1 },
  { id: 2, name: "Projetos", teacherId: 1 },
  { id: 3, name: "LPIII", teacherId: 2 },
  { id: 4, name: "Segurança", teacherId: 3 },
];

export default function RegistroAula() {
  const [form, setForm] = React.useState({
    id_aula: "",
    id_professor: "",
    id_disciplina: "",
    id_turma: "",
    descricao: "",
  });
  const [aulas, setAulas] = React.useState();
  const atualizaForm = (ev: { target: HTMLInputElement }) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };
  const enviarParaoBd = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(form);
      const res = await api.post(`${API_URL}/professor/aula/cria-aula`, form);
      console.log();
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
  /*  api.interceptors.request.use(config => {
            // loga(log) uma mensagem antes da requisição HTTP ser enviada
            console.log('A requisição foi enviada');
            return config;
          });*/
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);
  const [description, setDescription] = useState("");

  return (
    <>
      <NavbarProf />
      <main className=" w-full h-full">
        <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">
          Cadastrar Aula
        </h1>
        <form
          className=" w-1/3 h-full gap-2 flex flex-col ml-auto mr-auto mt-24"
          onSubmit={enviarParaoBd}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="nome"
              id="nome"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-white rounded-3xl pl-8 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={atualizaForm}
              required
            />
            <label
              htmlFor="nome"
              className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9"
            >
              Nome:
            </label>
          </div>
          <select
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-white rounded-3xl pl-8 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            id="teacher"
            value={selectedTeacher || ""}
            onChange={(e) => setSelectedTeacher(Number(e.target.value) || null)}
          >
            <option
              value=""
              className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9"
            >
              Selecione um professor
            </option>
            {professores.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name}
              </option>
            ))}
          </select>
          <select
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-white rounded-3xl pl-8 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            id="subject"
            value={selectedSubject || ""}
            onChange={(e) => setSelectedSubject(Number(e.target.value) || null)}
          >
            <option
              value=""
              className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9"
            >
              Selecione uma matéria
            </option>
            {materias
              .filter(
                (subject) =>
                  !selectedTeacher || subject.teacherId === selectedTeacher
              )
              .map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
          </select>

          <button
            type="submit"
            className="text-white  hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700  dark:focus:ring-green-800"
          >
            Registrar Aula
          </button>
        </form>
      </main>
    </>
  );
}

function setShowFeed(arg0: boolean) {
  throw new Error("Function not implemented.");
}
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
