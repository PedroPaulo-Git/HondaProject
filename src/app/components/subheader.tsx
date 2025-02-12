import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const SubHeaderComponent = () => {
  return (
    <div className=' hidden sm:block'>
        <ul className='text-black flex justify-center gap-14 font-semibold py-4 border-b-2 border-red-600 border-t-gray-300 border-t-[1px]'>
            <li className='cursor-pointer hover:text-red-600'>Inicio</li>
            <li className='cursor-pointer hover:text-red-600'>Contatos</li>
            <li className='cursor-pointer hover:text-red-600'>Novas</li>
            <li className='cursor-pointer hover:text-red-600'>Seminovas</li>
        </ul>
    </div>
  )
}

export default SubHeaderComponent