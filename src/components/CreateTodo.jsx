import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { database } from '../firebaseConfig';

const CreateTodo = () => {
  const [data, setData] = useState([]);
  const collectionRef = collection(database,"todo");

  const handleChange = (event) => {
    const changedInput = {[event.target.name]: event.target.value};
    setData({...data,...changedInput});
  }
  
  const handleCreateTodo = () => {
    addDoc(collectionRef,{title:data.title,description:data.description})
    .then(()=>alert("Data added"))
    .catch((err)=>alert("Error occurred ",err))
  }

  return (
      <div className='flex flex-col items-center  gap-6 justify-center p-5'>
        <input name="title" type='text' placeholder='Enter title ' className=' p-2 border-2' onChange={(e)=>handleChange(e)}/>
        <input name='description' type='text' placeholder='Enter description ' className=' p-2 border-2' onChange={(e)=>handleChange(e)}/>
      <button onClick={handleCreateTodo} className=' p-2 border-2' >Add Todo</button>
      </div>
  )
}

export default CreateTodo;
