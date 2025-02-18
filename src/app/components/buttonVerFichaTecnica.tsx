import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const buttonVerFichaTecnica = () => {
  return (
    <a href='#ficha' className='bg-white items-center gap-2 border-red-600 border-[1px]
     text-red-700 font-bold text-sm flex justify-center text-center
      p-4 w-[60%] sm:w-[25%] mx-auto my-10 hover:bg-gray-100 cursor-pointer transition-all'>
       Ver ficha técnica 
       <MdKeyboardArrowRight className='text-red-800 text-xl'/>
    </a>
  )
}

export default buttonVerFichaTecnica