import Link from 'next/link'
import React from 'react'
// import { FaPhone } from "react-icons/fa6";
// import { IoLogoWhatsapp } from "react-icons/io";

const SubHeaderComponent = () => {
  return (
    <div className=' hidden sm:block'>
        <ul className='text-black flex justify-center gap-14 font-semibold py-4 border-b-2 border-red-600 border-t-gray-300 border-t-[1px]'>
            <Link href="/" className='cursor-pointer text-red-600 hover:text-red-600' > Inicio</Link>
            <a className='cursor-pointer hover:text-red-600'>Contatos</a>
            <a className='cursor-pointer hover:text-red-600'>Novas</a>
            <a className='cursor-pointer hover:text-red-600'>Seminovas</a>
        </ul>
    </div>
  )
}

export default SubHeaderComponent