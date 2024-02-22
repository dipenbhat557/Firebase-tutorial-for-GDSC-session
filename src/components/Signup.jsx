import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const changedInput = {[event.target.name]: event.target.value};
    setData({...data,...changedInput});
  }
  
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth,data.email, data.password)
    .then((res)=>console.log(res.user))
    .catch((err)=> console.log(err));
  }

  return (
      <div className='flex flex-col items-center  gap-6 justify-center p-5'>
        <input name="email" type='email' placeholder='Enter your email ' className=' p-2 border-2' onChange={(e)=>handleChange(e)}/>
        <input name='password' type='password' placeholder='Enter your password ' className=' p-2 border-2' onChange={(e)=>handleChange(e)}/>
      <button onClick={handleSignUp} className=' p-2 border-2' >Sign Up</button>
      </div>
  )
}

export default Signup;
