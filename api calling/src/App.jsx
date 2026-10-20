
import axios from 'axios'

// const App = () => {
//   const [first, setfirst] = useState('hello ')
  
//   const getdata=async()=>{
//   const res=await axios('https://jsonplaceholder.typicode.com/users');
//   console.log(res.data)
  
//   }


//   return (

//     <div>
// <button onClick={getdata}>click here</button>



//     </div>
//   )
// }
import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState([])
  

 const getdata=async()=>{
  const res=await axios('https://jsonplaceholder.typicode.com/users')
  setfirst(res.data);
 }
  return (
    <div>
      <button onClick={getdata}>click me</button>
      <div>
        {first.map(function(elem,idx){
          return <h1>{elem.name}</h1>
        })}
      </div>
      
    </div>
  )
}

export default App

