import React, { useState } from 'react'

const DeleteTodo = () => {
   const [id,setId] = useState(0);
  
  const handleDeleteTodo = () => {
  }

  return (
      <div className='flex flex-col items-center  gap-6 justify-center p-5'>
        <input name="id" type="text" placeholder='Enter id of Todo' className='p-2 border-2' onChange={(e)=>setId(e.target.value)} />
        <button onClick={handleDeleteTodo} className=' p-2 border-2' >Delete Todo</button>
      </div>
  )
}

export default DeleteTodo;
