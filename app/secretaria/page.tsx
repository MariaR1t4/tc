
import { NavbarSec } from "../components/navbarsec";
import Image from "next/image";
import professorpgn from "../../public/professor.png";
import alunopgn from "../../public/aluno.png";
import turmapgn from "../../public/turma.png"
import { Link } from "lucide-react";
export default function HomeSec(){

    return(
        <>
    
        <main>
            <NavbarSec />
            <h1 className=" text-center font-bold mt-20 text-4xl">Home Secretaria</h1>
            <div className="justify-center flex gap-16 mt-32 first-letter: w-full h-full " >
        <div className="w-96 h-96 bg-gray-200 border-b-gray-950 rounded-md p-2 shadow gap-y-2 ">
            <Image className=" h-48 w-80 justify-center flex ml-5 mt-8"  alt="" src={turmapgn} />
            <div className="mt-8 justify-center">
        <a href="secretaria/turmas/registrar"><button className=" dark:bg-green-700 hover:bg-green-800 transition ease-in duration-100 hover:-translate-y-1  text-white rounded-md h-10 w-full" type="button">Cadastrar turma</button> </a> 
        <a href="secretaria/turmas"><button className=" dark:bg-blue-600 hover:bg-blue-700 transition ease-in duration-100 hover:-translate-y-1  mt-4 text-white rounded-md h-10 w-full" type="button">Ver turmas</button> </a> 
        </div>
        </div>
      
    <div className="w-96 h-96 rounded-md p-2 shadow bg-gray-200 gap-y-2 ">
    <Image className=" h-48 w-80 justify-center flex ml-5 mt-8"  alt="" src={professorpgn} />
    <div className="mt-8 justify-center">
    <a href="/secretaria/professor/registrar"><button className=" dark:bg-green-700 hover:bg-green-800 transition ease-in duration-100 hover:-translate-y-1  text-white rounded-md h-10 w-full" type="button"> Cadastrar professor</button></a>
       <a href="/secretaria/professor"><button className=" dark:bg-blue-600 hover:bg-blue-700 transition ease-in duration-100 hover:-translate-y-1  mt-4 text-white rounded-md h-10 w-full" type="button">Ver professores</button> </a>
       </div>
    </div>
    <div className="w-96 h-96 bg-gray-200 rounded-md p-2 shadow gap-y-2">
    <Image className=" h-48 w-80 justify-center flex ml-5 mt-8"  alt="" src={alunopgn} />
    <div className="mt-8 justify-center">
    <a href="/secretaria/aluno/registrar"><button  className=" dark:bg-green-700 hover:bg-green-800 transition ease-in duration-100 hover:-translate-y-1  text-white rounded-md h-10 w-full" type="button"> Cadastrar Aluno </button></a>
    <a href="/secretaria/aluno"> <button className=" dark:bg-blue-600 hover:bg-blue-700 transition ease-in duration-100 hover:-translate-y-1  mt-4 text-white rounded-md h-10 w-full" type="button"> Ver Alunos </button></a>
        </div>
    </div>
    </div>
        </main>
        </>
    )
}