import { BellRingIcon, LogOutIcon, User } from "lucide-react";
import NotificationButton from "./components/notificationButton";
import React from "react";
import { useRouter } from 'next/navigation';

    /*const Router = useRouter()
    const outraRota = () => {
        Router.push('/')
    }*/

    export default function ConfigGeral(){
        return(
        <>
        <h1 className="text-center font-bold mt-12 text-4xl">Configurações </h1>
        <div className="w-full h-full">
            <div className="mt-8 w-1/2 h-1/5 dark:bg-blue-50 relative mr-auto ml-auto">
                <h3 className="text-center text-2xl">Configuração de Perfil</h3>
                    
           <User className="ml-36 -mt-7"/>
            </div>
            <div className="mt-8 w-1/2 h-1/5 dark:bg-blue-50 relative mr-auto ml-auto">
                <h3 className="text-center text-2xl">Notificações</h3>
               <BellRingIcon className="ml-36 -mt-7" />
               <NotificationButton/>
               
            </div>
            <div className="mt-8 w-1/2 h-1/5 dark:bg-blue-50 relative mr-auto ml-auto">
                <h3 className="text-center text-2xl mr-12">Conta</h3>
           <LogOutIcon className="ml-36 -mt-7" />
           <button type='submit' className=" ml-64 mt-7 mb-4 text-white  hover:bg-red-800 focus:outline-none font-medium rounded-lg text-lg w-full sm:w-auto px-11 py-1.5 text-center dark:bg-red-700  dark:focus:ring-red-800"><a href="/">Sair</a> </button>

            </div>
        </div>
        </>
        )
    }