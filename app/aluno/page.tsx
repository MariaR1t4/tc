"use client"
import Image from "next/image";
import { useState } from "react";
import alunopgn from "../../public/aluno.png";
import turmapgn from "../../public/turma.png"
import { NavbarAluno } from "../components/navbar-aluno";
import BasicCard from "../components/successcard";


export default function AlunoPage() {
    return (
        <>
            <main>
                <NavbarAluno />
                <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Home Aluno</h1>
                <div className="justify-center flex gap-16 mt-32 first-letter: w-full h-full " >
                    <div className="w-96 h-96 bg-gray-200 border-b-gray-950 rounded-md p-2 shadow gap-y-2 ">
                        <Image className=" h-48 w-80 justify-center flex ml-5 mt-8" alt="" src={turmapgn} />
                        <div className="mt-8 justify-center">
                            <a href="aluno/registrar"><button className=" dark:bg-green-700 hover:bg-green-800 transition ease-in duration-100 hover:-translate-y-1  text-white rounded-md h-10 w-full" type="button">Registrar frequência</button> </a>
                            <a href="aluno/frequencia"><button className=" dark:bg-blue-600 hover:bg-blue-700 transition ease-in duration-100 hover:-translate-y-1  mt-4 text-white rounded-md h-10 w-full" type="button">Ver frequência</button> </a>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )

}