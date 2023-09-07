import { NavbarSec } from "@/app/components/navbarsec";



export default function Suporte(){
    return(  
    <>
    <NavbarSec/>
    <h1 className="text-center font-bold mt-12 text-4xl">Suporte</h1>
    <div className="w-full h-full">
        <div className="mt-8 w-1/2 h-1/5 dark:bg-blue-50 relative mr-auto ml-auto">
            <h3 className="text-center text-2xl">Como acessar</h3>
                
        </div>
        <div className="mt-8 w-1/2 h-1/5 dark:bg-blue-50 relative mr-auto ml-auto">
            <h3 className="text-center text-2xl">Como logar</h3>
           
        </div>
        <div className="mt-8 w-1/2 h-1/5 dark:bg-blue-50 relative mr-auto ml-auto">
            <h3 className="text-center text-2xl ">Esqueci minha senha</h3>

        </div>
    </div>

    <p className="mt-56 text-center">Entre em contado conosco:</p>
    <p className="text-center">(19) 99289-9098 (19) 38756070</p>
    </>
    )
}