import React from 'react'
import Rightcard from'./Rightcard'

const Rightcontext = (props) => {
  console.log(props)
  return (
    <div className='h-full p-5 px-12 w-5xl   flex gap-4 overflow-x-auto'>
      {props.users.map(function(elem){
         return <Rightcard img={elem.img} tag ={elem.tag} post={elem.intro} />
      })}
      

      
    
   
    
    </div>
  )
}

export default Rightcontext;