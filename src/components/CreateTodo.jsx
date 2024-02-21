import React, { useState } from 'react'

const CreateTodo = () => {
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const changedInput = {[event.target.name]: event.target.value};
    setData({...data,...changedInput});
  }
  
  const handleCreateTodo = () => {
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
