import { NavbarProf } from "../components/navbarprof";
import Image from "next/image";
import professorpgn from "../../public/professor.png";
import alunopgn from "../../public/aluno.png";
import turmapgn from "../../public/turma.png"
import api from "@/shared/utils/my-axios";
api.interceptors.request.use(config => {
    // loga(log) uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });
export default function HomeProf(){
   
    return(
        <>

        <title>Professor</title>
            <NavbarProf />
            <h1 className="text-center text-gray-700 font-bold mt-20 text-4xl">Home Professor</h1>
            <div className="justify-center flex gap-16 mt-32 first-letter: w-full h-full " >
        <div className="w-96 h-96 bg-gray-200 border-b-gray-950 rounded-md p-2 shadow gap-y-2 ">
            <Image className=" h-48 w-80 justify-center flex ml-5 mt-8"  alt="" src={turmapgn} />
            <div className="mt-8 justify-center">
            <a href="/professor/turmas"><button className=" dark:bg-green-700 hover:bg-green-800 text-white rounded-md h-10 w-full" type="button">Selecionar Turma</button></a>

        </div>
        </div>
      
    <div className="w-96 h-96 rounded-md p-2 shadow bg-gray-200 gap-y-2 ">
    <Image className=" h-48 w-80 justify-center flex ml-5 mt-8"  alt="" src={professorpgn} />
    <div className="mt-8 justify-center">
    <a href="/professor/aulas"><button className=" dark:bg-green-700 hover:bg-green-800 text-white rounded-md h-10 w-full" type="button">Registrar Aula</button></a>
       <a href="/professor/aulas/registradas"><button className=" dark:bg-blue-600 hover:bg-blue-700 mt-4 text-white rounded-md h-10 w-full" type="button">Ver aulas registradas</button> </a>
       </div>
    </div>
    </div>
    </> 
    )
}