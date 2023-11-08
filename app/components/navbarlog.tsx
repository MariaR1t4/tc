import { HomeIcon, User2, Users, GanttChartSquare } from "lucide-react";
import Image from "next/image";
import logopngg from "../../public/logo_branca.png"


export function NavbarLog(){
    return(  
  
<nav className="bg-white border-gray-200 w-full dark:bg-blue-800">
  <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
  <Image src={logopngg} alt="" className=" fixed w-32 h-20 mb-2 ml-16" />

        <li className="self-center text-4xl font-semibold ml-64 whitespace-nowrap dark:text-white inline-block ">Alumnus</li>
    <div className="hidden md:block md:w-auto" id="navbar-default">
 
    </div>
  </div>
</nav>

)
}