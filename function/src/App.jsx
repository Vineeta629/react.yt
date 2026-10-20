import React from 'react'

const App = () => {
  const btn=()=>{
    console.log("button was clicked");

  }
  const mouse=()=>{
    console.log("mouse enter");

  }
  const wheel=()=>{
    console.log("text is scrolling ")
  }
  const 
  return (
    
    <div onWheel={wheel} className='box'>
   
    </div>
  )
}

export default App;