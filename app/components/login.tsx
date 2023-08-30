import Image from "next/image";
import logopng from "../../public/logo.png"
export default function Login(){

    
  return(
  <>
<main>
    <section className=" w-1/2 float-left">
        <Image src={logopng} alt="" className=" relative w-5/6 ml-24 mt-28" />

    </section>
  <section className=" w-1/2 h-full float-right">
  <div className="flex flex-col items-center mt-36 py-8 md:h-72 w-full ">
      <a href="/login" className="flex items-center mb-4 text-7xl font-serif text-gray-900 ">
         Login    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 h-96     dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl -mt-4 dark:text-white" >
                { "Entre em sua conta"}  
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label  htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Digite seu RM:</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@mail.com" required />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Insira sua senha:</label>
                      <input type="password" name="password" id="password" placeholder="*******" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className="flex items-center justify-between">
                      <a href="#" className="text-sm -mt-4 font-medium text-primary-600 hover:underline text-red-700 ">Esqueceu a senha?</a>
                  </div>
                  <div className="border-4 rounded-md border-green-500 border-solid bg-green-500 w-full h-12">
                      <button type="submit" className="w-full text-white bg-primary-600 hover:bg-green-700 focus:ring-4 focus:outline focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ingressar</button>
                      

                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      </p>
                  </div>
              </form>
          </div>
      </div>
  </div>
  </section>
  </main>
  </>
  )}