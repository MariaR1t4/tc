import { BellRingIcon, LogOutIcon, User } from "lucide-react";


    export default function ConfigGeral(){
        return(
        <>
        <h1 className="text-center font-bold mt-12 text-8xl">Configurações </h1>
        <div className="w-full h-full">
            <div className="mt-8 w-1/2 h-1/5 dark:bg-blue-50 relative mr-auto ml-auto">
                <h3 className="text-center text-2xl">Configuração de Perfil</h3>
                    
           <User className="ml-72 -mt-7"/>
            </div>
            <div className="mt-8 w-1/2 h-1/5 dark:bg-blue-50 relative mr-auto ml-auto">
                <h3 className="text-center text-2xl">Notificações</h3>
               <BellRingIcon className="ml-72 -mt-7" />
            </div>
            <div className="mt-8 w-1/2 h-1/5 dark:bg-blue-50 relative mr-auto ml-auto">
                <h3 className="text-center text-2xl mr-12">Conta</h3>
           <LogOutIcon className="ml-72 -mt-7" />
            </div>
        </div>
        </>
        )
    }