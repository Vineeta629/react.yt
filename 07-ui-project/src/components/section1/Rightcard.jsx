import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard2 from './Rightcard2'

const Rightcard = (props) => {
  return (
    <div className='h-full rounded-3xl overflow-hidden bg-amber-300  w-60 relative shrink-0 '>
      <img className='h-full w-full object-cover' src={props.img}></img>
      < Rightcard2  tag ={props.tag} post ={props.post}/>
      </div>

    
  )
}

export default Rightcard;