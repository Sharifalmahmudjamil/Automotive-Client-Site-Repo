import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";



const Navbar = () => {
  const { user , logout}= useContext(AuthContext);
  const [theme,SetTheme]=useState("light")

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const handleTheme=()=>{
    SetTheme(theme === "dark"? "light": "dark")
  }

  const handleSignOut=()=>{
    logout()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.error(error)
      // An error happened.
    });
  }

    const navLinks=
    <>
    <li className="lg:text-white "><NavLink to="/">Home</NavLink></li>
    <li className="lg:text-white"><NavLink to="/addProduct">Add Product</NavLink></li>
    <li className="lg:text-white"><NavLink to="/cart">My Cart</NavLink></li>
    <li className="lg:text-white"><NavLink to="/gallery">Gallery</NavLink></li>
    <li className="lg:text-white"><NavLink to="/blog">Blog</NavLink></li>
     
    </>
    return (
        <div>

           
            <div className="navbar bg-gray-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
       <button onClick={handleTheme} className="btn btn-outline btn-circle ">dark mode</button>
       
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost lg:text-xl text-xs font-bold">
    Auto<span className="text-rose-600 font-bold">motive</span></Link>

    <img className=" lg:w-[70px] lg:h-[70px] w-10 h-10 " src="https://i.ibb.co/2FYFXmr/automotive-logo-2-vector-25496559-removebg-preview.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
     <button onClick={handleTheme} className="btn btn-outline btn-circle ">dark mode</button>
    
    </ul>
  </div>

  <div className="navbar-end">

  {
              user?
              <>
              {/* <img src={user.photoURL} alt="" />
              <span>{user.email}</span> */}
            

        <div className="dropdown dropdown-bottom dropdown-end">
  <label tabIndex={0} className="btn btn-xs bg-rose-500 m-1">profile</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><span>{user.email}</span></li>
    <li><img className="w-20 h-20 rounded-full"  src={user.photoURL} alt="" /></li>
    <li><span className="text-rose-500">{user.displayName}</span></li>

  </ul>
</div>
              <button onClick={handleSignOut} className=" lg:btn lg:btn-neutral btn-sm bg-rose-600 text-white">SignOut</button>
              </>
              :
              <Link to="/login">
              <button className="btn btn-sm bg-rose-600 text-white">Login</button>
              </Link>
            }

   
  </div>
</div>

        </div>
    );
};

export default Navbar;