import React from 'react'
import { Outlet } from 'react-router-dom';

const AuthPages = () => {
  return (
    <div className='flex flex-col bg-slate-200 w-full h-screen justify-center items-center p-5 md:p-0'>
        <Outlet />
    </div>
  )
}

export default AuthPages