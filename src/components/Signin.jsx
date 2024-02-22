import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebaseConfig';

const Signin = () => {
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const changedInput = {[event.target.name]: event.target.value};
    setData({...data,...changedInput});
  }
  
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth,data.email,data.password)
    .then((res)=>console.log(res.user))
    .catch((err)=> console.log(err))
  }

  return (
      <div className='flex flex-col items-center  gap-6 justify-center p-5'>
        <input name="email" type='email' placeholder='Enter your email ' className=' p-2 border-2' onChange={(e)=>handleChange(e)}/>
        <input name='password' type='password' placeholder='Enter your password ' className=' p-2 border-2' onChange={(e)=>handleChange(e)}/>
      <button onClick={handleSignIn} className=' p-2 border-2' >Sign In</button>
      </div>
  )
}
export default Signin;
