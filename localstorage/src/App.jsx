import React from 'react'

const App = () => {
  const user={
    name:'vineeta',
    age:'22',
    branch:'cse'
  }
 const val=JSON.parse(localStorage.getItem('user'))
 console.log(val);
  return (
    <div>

      
    </div>
  )
}

export default App