import React from 'react'
import { useState } from 'react';

const Welcome = () => {
const [name, setName] = useState('');
const[fullName, setfullName] = useState('');


   const inputEvent =(event) =>{
    console.log(event.target.value);
    setName(event.target.value)
   };
const onSubmit=()=>{
    setfullName(name);
}


    return(
<>
<div className='one'><h1>Greeting New Students at LPU College</h1></div>

<div className='two'>
    
    <h1>Welcome! to College {fullName}</h1>
   
    <input type="text" placeholder='Enter Your Name' 
    onChange={inputEvent}
    value={name}
    />
   
<button onClick={onSubmit}>Login</button>
</div>


</>
    );
}

export default Welcome;