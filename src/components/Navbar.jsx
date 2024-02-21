import React from 'react'
import { navItems } from '../constants'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='w-full h-[30px] flex  justify-around items-center my-2'>
      {navItems.map((item,key)=>{
        return (
          <div className="bg-slate-500 hover:bg-slate-600 w-[14.1%] p-1 text-[14px] text-white  text-center h-full cursor-pointer" key={key} onClick={()=>navigate(item.link)}>{item.title}</div>
        )}
      )}
    </div>
  )
}

export default Navbar
