import Aos from "aos";

import 'aos/dist/aos.css'

import { AiFillHeart } from "react-icons/ai";
import { FaEye } from 'react-icons/fa';
import { BsEmojiHeartEyes} from "react-icons/bs";
import { useEffect } from "react";





const Gallery = () => {
        useEffect(()=>{
                Aos.init()
              },[])
    return (

        <div data-aos="zoom-in-down">
            
        <div className="overflow-hidden" >
       
            
            <h1 className="text-5xl font-bold text-center mt-4 ">Our Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto container mt-6 ">
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/6DpTzs2/about.png" alt="" /></figure>

        <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div>
  
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img className="object-cover" src="https://i.ibb.co/Pg3pSB5/car3.jpg" alt="" /></figure>

  <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div>

 
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/dJgM4YJ/car2.jpg" alt="Shoes" /></figure>

  <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div>
 
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/wQgdb5R/car1.jpg" alt="Shoes" /></figure>

  <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div> 
 
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/cyXQ2Z9/car6.jpg" alt="Shoes" /></figure>

  <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div> 
 
</div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/2KVCNcJ/car5.jpg" alt="Shoes" /></figure>
  <div className="flex gap-4 justify-center lg:p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div> 
 
</div>

</div>

        </div>
       
        </div>
        
    );
};

export default Gallery;