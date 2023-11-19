import { HomeIcon } from "lucide-react";
import { UserSquare2Icon } from "lucide-react";
import { Users } from "lucide-react";
import {User2 } from "lucide-react";
import {LogOutIcon } from "lucide-react";
import {SettingsIcon } from "lucide-react";
import Image from "next/image";
import logopngg from "../../public/logo_branca.png"


export function NavbarSec(){
    return(  
  
<nav className=" border-gray-200 w-full bg-blue-800">
  <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
  <Image src={logopngg} alt="" className=" fixed w-32 h-20 mb-2 ml-16" />
        <li className="self-center text-4xl font-semibold ml-64 whitespace-nowrap text-white inline-block ">Secretaria</li>
    <div className="hidden md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col md:p-0 mt-4 border text-lg  border-blue-500 rounded-lg bg-blue-500 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-blue-800 ">
        <li>
        <a href="/secretaria" className="py-2 pl-3 pr-4 text-white transition ease-in duration-100 hover:-translate-y-1  flex flex-row gap-1 rounded md:bg-transparent md:p-0 dark:text-white md:hover:text-blue-500" aria-current="page"><HomeIcon />Home</a>
        </li>       
        <li>
          <a href="/secretaria/professor" className="flex flex-row gap-1 transition ease-in duration-100 hover:-translate-y-1  py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><User2 /> Professor</a>
        </li>
        <li>
          <a href="/secretaria/turmas" className="flex flex-row gap-1 transition ease-in duration-100 hover:-translate-y-1  py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">< Users /> Turmas</a>
        </li>
        <li>
          <a href="/secretaria/aluno" className="py-2 pl-3 pr-4 transition ease-in duration-100 hover:-translate-y-1  text-gray-900 rounded  flex flex-row gap-1 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><UserSquare2Icon /> Aluno</a>
        </li>
        <li>
          <a href="/" className="py-2 pl-3 pr-4 text-gray-900 mr-12 rounded ml-20 flex flex-row gap-1 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-red-500 md:dark:hover:text-gray-50 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><LogOutIcon /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

)
}