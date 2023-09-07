
export default function ConfigGeral() {
    return (
      
      <>
        <main>
          <section className="flex justify-center items-center  h-full">
            <div className="flex flex-col items-center mt-36 py-8 md:h-72 w-full mb-96">
              <h1  className="flex items-center font-bold mb-4 text-4xl text-gray-700">
                Redefinir Senha
            </h1>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 h-96 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl -mt-4 dark:text-white">
                    {"Redefina sua senha"}
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nova Senha:
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nova senha"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Confirme a Nova Senha:
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirme a nova senha"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div className=" rounded-md w-full h-12">
                      <button
                        type="submit" className="w-full h-full text-white bg-green-500 hover:bg-green-700 focus:outline font-medium rounded-lg text-sm px-5 py-2.5 text-center" >
                        Redefinir Senha
                      </button>
                    
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
  