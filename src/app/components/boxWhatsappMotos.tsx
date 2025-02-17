import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
const boxWhatsappMotos = () => {
  return (
    <div className=''>
        <div className='lg:my-10 flex-col sm:flex-row px-8 gap-6 w-full h-52 sm:h-40 border-t-2 border-green-500 bg-white flex justify-center items-center '>
            <span>
            Fale agora mesmo com um especialista e tire todas as suas dúvidas
            </span>
            <a 
            className='bg-green-600 text-white py-4 px-2 text-sm font-semibold 
            rounded-full w-full max-w-sm flex justify-center items-center gap-5 ' target='blank' href="http://wa.me/5581999049803?text=Gostaria%20de%20entrar%20em%20contato%20!">
                <IoLogoWhatsapp className='text-2xl'/>
                NEGOCIE PELO WHATSAPP
            </a>
        </div>
    </div>
  )
}

export default boxWhatsappMotos