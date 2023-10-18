import { Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const navLinks=
    <>
    <li className="lg:text-white "><NavLink to="/">Home</NavLink></li>
    <li className="lg:text-white"><NavLink to="/addProduct">Add Product</NavLink></li>
    <li className="lg:text-white"><NavLink to="/myCart">My Cart</NavLink></li>
    <li className="lg:text-white"><NavLink to="/gallery">Gallery</NavLink></li>
     
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
      </ul>
    </div>
    <Link className="btn btn-ghost lg:text-xl text-xs font-bold">
    Auto<span className="text-rose-600 font-bold">motive</span></Link>

    <img className=" lg:w-[70px] lg:h-[70px] w-10 h-10 " src="https://i.ibb.co/2FYFXmr/automotive-logo-2-vector-25496559-removebg-preview.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-sm bg-rose-600 text-white">Login</a>
  </div>
</div>

        </div>
    );
};

export default Navbar;