import React, { useState } from 'react'

const UpdateTodo = () => {
   const [data, setData] = useState([]);
   const [id,setId] = useState(0);

  const handleChange = (event) => {
    const changedInput = {[event.target.name]: event.target.value};
    setData({...data,...changedInput});
  }
  
  const handleUpdateTodo = () => {
  }

  return (
      <div className='flex flex-col items-center  gap-6 justify-center p-5'>
        <input name="id" type="text" placeholder='Enter id of Todo' className='p-2 border-2' onChange={(e)=>setId(e.target.value)} />
        <input name="title" type='text' placeholder='Enter title ' className=' p-2 border-2' onChange={(e)=>handleChange(e)}/>
        <input name='description' type='text' placeholder='Enter description ' className=' p-2 border-2' onChange={(e)=>handleChange(e)}/>
      <button onClick={handleUpdateTodo} className=' p-2 border-2' >Update Todo</button>
      </div>
  )
}


export default UpdateTodo
