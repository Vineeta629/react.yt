import React from 'react'

const Card=(props)=> {
    console.log(props.company);

  return (
    <div className='second'>
        
        <div className='top'>
          
          
          <img src={props.logo}></img>
          <button>
            SAVE 
            </button>
        </div>
        <div className='center'>
          <pre><h4>{props.company}<span>  {props.date}</span></h4></pre>
          <pre><h3>{props.role}</h3></pre>
          <div className='job'>
          <h6 >{props.tag1}</h6>

          <h6>{props.tag2}</h6>

        </div>
        </div>
        <div className='bottom'>
          <div>
            
            <h4>{props.pay}</h4>
            
            <p>{props.location}</p>
            
</div>
            <button>ApplyNow</button>
            </div>
          
          
        
        
        </div>
        
  )
}
export default Card;
