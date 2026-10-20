import React, { useState } from 'react'


const App = () => {
  const [notes, setnotes] = useState('')
  const [data, setdata] = useState('')
  
  const submithandler=(e)=>{
    e.preventDefault();
    console.log("form submitted")
    console.log(notes,data);
    setnotes('');
    setdata('');
  }
  return (
    <div className='bg-black h-screen flex lg:flex  color-white text-amber-50' >
      <form onSubmit={(e)=>{
        submithandler(e)}} className='flex flex-col lg:w-1/2 justify-between p-10 '>
       <div className='flex   items-start flex-col gap-4'>
        <input className='px-5 py-2  w-full  border-3 rounded'type="text"placeholder='enter your heading'
        value={notes}
        onChange={(e)=>{
          setnotes(e.target.value);
        }}/>
        <textarea className='px-5 h-32 w-full py-2  border-3 rounded'type="text"placeholder='enter your notes'
        value={data}
        onChange={(e)=>{
          setdata(e.target.value);

        }}/>
        <button className='bg-white text-black px-5 py-2  '>Add notes</button>
      </div> 
      </form>
     
    <div className='p-10 flex gap-5'>
      <h2 className=''>your notes</h2>
      <div className='flex flex-wrap gap-5'>
      <div className='h-53 w-40 p-10  bg-fuchsia-50 radious'></div>
      <div className='h-53 w-40 p-10  bg-fuchsia-50 radious'></div>
      </div>
    </div>
      </div>
  
       
      
  )
}

export default App;