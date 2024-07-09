import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

function Pagination({handlePrev,handleNext,pageNo}) {
  return (
    <div className='bg-gray-400 py-2 mt-7 font-semibold text-2xl justify-center flex items-center space-x-4'>
        <div className='hover:cursor-pointer' onClick={handlePrev}>
            <IoMdArrowRoundBack />      
        </div>
        <div>
            {pageNo}
        </div> 
        <div className='hover:cursor-pointer' onClick={handleNext}>
            <IoMdArrowRoundForward />
        </div>
        
    </div>
  )
}

export default Pagination