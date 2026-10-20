import React from 'react'
import Leftcontext from './Leftcontext';
import Rightcontext from './Rightcontext';

const Page1content = (props) => {
  console.log(props)
  
  return (
    <div className='flex  flex-nowrap gap-10 place-items-center   px-17 h-[70vh]'>
      <Leftcontext/>
      <Rightcontext users={props.users}/>
    </div>
  )
}

export default Page1content