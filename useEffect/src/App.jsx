// import React, { useEffect, useState } from 'react'
// const [A, setA] = useState(3);
// const [B, setB] = useState(1);

// useEffect(function(){
//   console.log("iam running");
// }[first])

// const App = () => {

//   function1=()=>{
//     console.log("function a is running")

//   }
//   function2=()=>{
//     console.log("function 2 is running ");

//   }
//   return (
//     <div>
//       <button>click me hi</button>
    
//     </div>
//   )
// }

// export default App;

import React, { useEffect, useState } from 'react'


const App = () => {
  const [first, setfirst] = useState(0)
  const mn=()=>{
    function1();
    setfirst(first+1);
  }
  const [second, setsecond] = useState(2)
  const sp=()=>{
    function2();
    setsecond(second+2);
  }
   function function1(){
   console.log("state 1 is running");
  }
  function function2(){
    console.log("state2 is running");
  }
  useEffect(function(){
    console.log("iam running");
  },[first])
 
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={mn}>click me</button>

      <h1>{second}</h1>
      <button onClick={sp}>click me</button>
    </div>
  )
}

export default App