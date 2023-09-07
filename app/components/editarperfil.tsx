"use client"
export default function ConfigGeral() {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96   mb-48">
          <h1 className="text-2xl text-gray-700 font-semibold mb-4">Editar Perfil</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                placeholder="Seu Nome"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rm" className="block text-sm font-medium text-gray-700">
                RM:
              </label>
              <input
                type="text"
                id="rm"
                name="rm"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                placeholder="Seu RM"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="curso" className="block text-sm font-medium text-gray-700">
                Curso:
              </label>
              <input
                type="text"
                id="curso"
                name="curso"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                placeholder="Seu Curso"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                placeholder="Seu Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contato" className="block text-sm font-medium text-gray-700">
                Contato:
              </label>
              <input
                type="text"
                id="contato"
                name="contato"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                placeholder="Seu Contato"
                required
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                Atualizar Perfil
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  