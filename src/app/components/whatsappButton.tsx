import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5";
const WhatsappButton = () => {
  return (
    <div>
        <a className=' hover:w-14 hover:h-14 hover:bg-green-400 
        transition-all flex justify-center text-3xl
         m-6 rounded-full items-center w-12 h-12 
         bg-green-500 fixed bottom-0 z-10 right-0 ' 
         href="http://wa.me/5581999049803?text=Gostaria%20de%20entrar%20em%20contato%20!">
        <IoLogoWhatsapp />
        
        </a>
      
    </div>
  )
}

export default WhatsappButton