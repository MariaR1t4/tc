"use client";

import { NavbarSec } from "@/app/components/navbarsec";
import { API_URL } from "@/shared/constants/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AlunoEditar() {
  const [post, setPost] = useState({
    rm:"",
    nome: "",
    email: "",
    telefone: "",
  });
  const rm = localStorage.getItem("rm");
  /*
  useEffect(() => {
    axios
      .get(`${API_URL}/secretaria/aluno/encontra-aluno/:${rm}`)
      .then((response) => console.log(response.data));
  }, []);
  const handleInput = (event) => {
    setPost({ ...post, [event.target.value]: event.target.value });
  };
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`${API_URL}/secretaria/aluno/edita-aluno/:${rm}`, { post })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }*/

 // const [post, setPost] = React.useState(false);
  React.useEffect(() => {
    axios.get(`${API_URL}/secretaria/aluno/encontra-aluno/${rm}`)
    .then((response) => {
      setPost(response.data);
    });
  }, [rm]);

  function updatePost() {
    axios
      .put(`${API_URL}/secretaria/aluno/edita-aluno/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"
  return (
    <>
      <NavbarSec />
      <main className=" w-full h-full">
        <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">
          Editar Aluno
        </h1>
        <form className=" w-1/3  h-full gap-2 flex flex-col ml-auto mr-auto mt-24">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="nomealuno"
              id="nomealuno"
              value={post.nome}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-white rounded-3xl pl-8 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="nomealuno"
              className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9"
            >
              Nome:
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="rmaluno"
              id="rmaluno"
              value={post.rm}

              className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="rmaluno"
              className="peer-focus:font-medium absolute pl-8 text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9"
            >
              RM:
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="telaluno"
              id="telaluno"
              value={post.telefone}

              className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="telaluno"
              className="peer-focus:font-medium pl-8 absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9"
            >
              Curso:
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="emailaluno"
              id="emailaluno"
              value={post.email}
              className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="emailaluno"
              className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 pl-8 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9"
            >
              Email:
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="telefonealuno"
              id="telefonealuno"
              className="block rounded-3xl py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="telefonealuno"
              className="peer-focus:font-medium pl-8 absolute text-lg text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-9"
            >
              Telefone do Aluno:
            </label>
          </div>

          <div className="mt-3 flex justify-center gap-96 ">
            <button className=" bg-green-700 w-28 h-14 hover:bg-green-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white" onClick={updatePost}>
              Editar Aluno
            </button>
            <button className=" bg-red-700 w-28 h-14 text-white hover:bg-red-800 rounded-md transition ease-in duration-100 hover:-translate-y-1">
              Excluir Aluno
            </button>
          </div>
        </form>
      </main>
    </>
  );
}