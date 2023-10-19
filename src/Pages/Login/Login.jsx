import { useState } from "react";
// import swal from 'sweetalert';
import { FaGoogle,FaEye ,FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Login = () => {

    const [showPassword,setShowPassword]=useState(false);

    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const email= form.get("email");
        const password= form.get("password");
        console.log(email,password);
    }
    return (
        <div>
            <h1>login</h1>
            <div className=" hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col lg:w-1/2 ">
    <div className="text-center lg:text-center">
      <h1 className="text-5xl font-bold text-rose-500">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="Email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <div>
        <label className="label">
            
            <span className="label-text">Password</span>
            <div onClick={()=>setShowPassword (!showPassword)}>
      {
       showPassword? <FaEyeSlash className="absolute mt-8 -ml-5 "></FaEyeSlash>: <FaEye className="absolute mt-8 -ml-5"></FaEye>
        
        
        }

      </div>
          </label>
        </div>
          <input 
         type={ showPassword ?"password": "text"}
          name="password"
           placeholder="Password" 
           className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-rose-600 text-white">Login</button>
        </div>
                <div className="  gap-2 mt-4 ">
                    
                   
                
                    <button  className="btn btn-neutral w-full">
                    <FaGoogle ></FaGoogle>
                      Log in with Google</button>
                    
                    
                    
                  </div>
      </form>
      {/* {
        error&& <p>{swal}</p>
      } */}
      <p className="text-center mb-8 p-5">Do not Have An Account ? <Link className="text-rose-600 font-bold" to="/register">Create an Account</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;