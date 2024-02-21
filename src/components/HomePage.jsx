import React from 'react'

const HomePage = () => {
  return (
    <div className='w-[80%] h-[850px] mx-auto flex flex-col items-center justify-center'>
      <img src='logo.png' className='h-[80%] w-auto object-contain' />
      <p className='font-semibold my-4 text-[42px] text-slate-800'>Welcome to Firebase Basics Tutorial</p>
    </div>
  )
}

export default HomePage;
