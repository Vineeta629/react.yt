import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState('')
 const submit=(e)=>{
  e.preventDefault();
  
  console.log("form  submitted by ",first)
  setfirst('');

 }

  
  return (
    <div>
      <form onClick={submit}>
        <input type="text" placeholder='enter your name' 
        
       
        value={first}
      
      onChange={(e)=>{
          setfirst(e.target.value)
        }}
        />
        <button >submit</button>
        

      </form>
    </div>
  )
}

export default App;