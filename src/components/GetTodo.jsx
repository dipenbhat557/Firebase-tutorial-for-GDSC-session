import { collection, getDocs } from 'firebase/firestore'
import React, { useState } from 'react'
import { database } from '../firebaseConfig'

const GetTodo = () => {

  const [data,setData] = useState([]);

  const collectionRef = collection(database,"todo");

  const handleGetTodo = () => {
    getDocs(collectionRef)
    .then((res)=>setData(res.docs))
    .catch((err)=>{console.log("Error occurred ", err)});
  }

  return (
    <>
    <div className='w-full flex items-center my-4 justify-center h-[100px]'>
    <button className='p-2 border-2 ' onClick={handleGetTodo}> Get Todos</button>
    </div>
 <div className='flex flex-col w-[20%] mx-auto items-center h-auto justify-center'>
          {data.map((d,i)=>{
            return (
              <div key={i}>
              <hr/>
              <p>{d.id}</p>
                <h1 className='text-center'>{d.data().title}</h1>
                <h3 className='text-center'>{d.data().description}</h3>
                <hr/>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default GetTodo
