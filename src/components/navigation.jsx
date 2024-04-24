// import React from "react";

// import { IoMdContact } from "react-icons/io";

// function Navbar() {
//   return (
//     <>
//     <nav id="navigation" className=" bg-slate-400">
//      <div id="contact" className="justify-center gap-60 h-20 text-center items-center flex">
//        <a href="#" className="bold text-2xl">Contact</a>
//        <a href="#">home</a>
    
//      <div id="background" className="flex gap-4 bg-slate-200 h-16 text-center justify-center p-4">
//      <div>
//      <IoMdContact/>
//      </div>
//      <div> <span>Iriboneye Nina@gmail.com</span>
//      </div>
//     <div><button className="border-r text-center bg-black text-white rounded-md">Sign out</button>
//     </div>
     
//      </div>
//      </div>
//     </nav>
//     </>
   
//   )
// }
import { Link, NavLink } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [userInfo, setUserInfo] = useState({});
  const signOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.replace('/login');
  };
  useEffect(() => {
    var user = JSON.parse(localStorage.getItem('user'));
    setUserInfo(user);
  }, [])
  return (
    <nav className="w-full bg-slate-400 flex flex-col justify-center items-center">
      <div className="md:max-w-4xl w-11/12 flex justify-between py-2 items-center">
        <h1><Link className='cursor-pointer text-3xl font-bold'>Contacts</Link></h1>
        <NavLink to={'/home'} className='cursor-pointer'>Home</NavLink>
        <div className="flex gap-3 items-center bg-slate-500 px-2 py-1 rounded-xl">
          <FaRegUserCircle className="text-4xl" />
          <Link to={'/account'}>
            <p className="text-white">{userInfo?.fullName} {userInfo?.lastName}</p>
            <p className="text-white">{userInfo?.email}</p>
          </Link>
          <button onClick={signOut} className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg">Sign out</button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar