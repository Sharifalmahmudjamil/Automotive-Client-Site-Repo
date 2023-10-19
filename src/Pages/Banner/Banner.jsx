import Aos from "aos";

import 'aos/dist/aos.css'
import { useEffect } from "react";

const Banner = () => {
  useEffect(()=>{
    Aos.init()
  },[])
    return (
        <div  data-aos="fade-left">
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/tDqQtTs/Background-home.png)'}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className=" text-start ">
    <div className="max-w-md">
      <h1 className="mb-8 text-5xl lg:-ml-96 font-bold ">All <span className="text-rose-500">Car</span> Are Here</h1>
      <p className="mb-10 lg:-ml-96 text-rose-500 font-semibold">Where Excellence Drives Every Mile.Unleash the Journey with Top Car
      Brands and Exceptional Services.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;