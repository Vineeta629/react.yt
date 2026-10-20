import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
  const [user, setuser] = useState([]);
  const getdata=async()=>{
    const res=await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
    setuser(res.data)
    console.log(res.data);

  }
  useEffect(function(){
    getdata();
  })
  let userdata="data is not available";
      if (user.length > 0){
        userdata=user.map(function(elem,idx){
            return <div key={idx}>
               <a href={elem.url}>
             <div className='w-44 h-40 bg-amber-50 rounded-xl'>
              <img className ='h-full w-full'src={elem.download_url}/>
            </div>
            <h2 className='font-bold text-xl'>{elem.author}</h2>
            </a>
            </div>
          

          })
        }
  
  return (
    <div className='bg-black text-white overflow-auto h-screen width-full'>
      
     {/* <button className='bg-amber-600 px-8 py-5 m-4 active:scale-95 text-white rounded'onClick={getdata}>get data</button>  */}
    <div className='flex flex-wrap gap-4'>
      {userdata}
      </div>
      <div className='flex justify-center items-center p-4 gap-6'>
        <button className='bg-amber-500 text-black py-2 px-3 active:scale-90'>prev</button>
        <button className='bg-amber-500 text-black py-2 px-3 active:scale-90'>next</button>
      </div>
    </div>
  )
}

export default App;