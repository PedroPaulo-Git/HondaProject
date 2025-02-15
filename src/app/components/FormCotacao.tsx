import React from 'react'

const FormCotacao = () => {
  return (
    <div className="mx-10 mt-5 bg-white lg:absolute lg:top-44 lg:w-[300px] lg:right-0 lg:flex lg:flex-col lg:justify-center ">
    <div className="h-10 bg-red-500 flex items-center justify-center">
      <p className="font-semibold">Solicitar cotação</p>
    </div>

    <form className="max-w-md mx-auto p-4">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_name"
          id="floating_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nome completo
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_phone"
          id="floating_phone"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_phone"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Telefone
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="floating_message"
          id="floating_message"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
          placeholder=" "
          rows={4}
          required
        />
        <label
          htmlFor="floating_message"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Mensagem (detalhes sobre a cotação)
        </label>
      </div>

      <button
        type="submit"
        className="text-white lg:ml-2 bg-red-500 font-medium rounded-lg text-sm w-full  sm:w-auto px-5 py-2.5 text-center"
      >
        Solicitar Cotação
      </button>
    </form>
  </div>
  )
}

export default FormCotacao