/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Navbar from "../Navber/Navbar";


const Slider = ({slide}) => {
    // eslint-disable-next-line react/prop-types
    const {photo1,photo2,photo3}=slide
    return (
        <div className="mx-auto container" >
            <Navbar></Navbar>
            <h1 className="text-5xl font-semibold text-rose-500 text-center">Advertisement</h1>
          <div className="carousel w-full mt-6">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slide.photo1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slide.photo2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slide.photo3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>

        </div>
        
    );
};

export default Slider;