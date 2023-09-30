import { NavbarAluno } from "@/app/components/navbaraluno";


export default function RegFrequencia(){

    return (
        <>
            <main className=" w-full h-full">
            <NavbarAluno/>
            <h1 className=" text-center text-gray-700 font-bold mt-20 text-4xl">Registrar Frequência</h1>
            
            <div className="flex justify-center items-center mt-32 flex-col">
                <input type="text"  name="token" id="token" className="relative py-2.5 px-0 w-2/6 text-lg mb-10 text-gray-900 bg-transparent border-2 border-gray-300 appearance-nblack dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-center" placeholder=" Insira o código do Token " required/>
                <button className=' bg-gray-700 w-44 h-10 hover:bg-gray-800 rounded-md transition ease-in duration-100 hover:-translate-y-1 text-base text-white' >Enviar</button>
            </div>

            </main>
        </>
    )
}