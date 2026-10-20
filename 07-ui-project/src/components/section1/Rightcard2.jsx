import React from 'react'
import 'remixicon/fonts/remixicon.css'


const Rightcard2 = (props) => {
  return (
   
      <div className=' absolute top-0 left-0 h-full w-full text-amber-50 p-6 flex flex-col justify-between mb-10'>
      <h2 className='bg-white  rounded-full h-8 w-8 flex items-center justify-center text-2xl font-bold text-black'>1</h2>
      <div>
      <p className='leading-relax text-lg text-amber-50 mb-10'>{props.post}</p>
      <div className='flex'>
      <button className='bg-blue-800 rounded-full w-30 px-5
       text-amber-50'>{props.tag}</button>
      <button className='bg-blue-800 rounded-full w-30 px-7  text-amber-50' >
        <i className="ri-arrow-right-line"></i>
        </button>
        </div>
        </div>
        
      </div>
      

  )
}

export default Rightcard2