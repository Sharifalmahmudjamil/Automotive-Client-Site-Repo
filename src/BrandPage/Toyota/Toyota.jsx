import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Slider from "../../Pages/Slider/Slider";
// import CardToyota from "./CardToyota/CardToyota";


const Toyota = () => {

    const {brandName}=useParams();
    console.log(brandName);
    const[banner,setBanner]=useState([]);
    useEffect(()=>{
      fetch('/brand.json')
      .then(res=>res.json())
      .then(data=>{
        setBanner(data);
      })
    },[])
    const loadedData=useLoaderData();
    console.log(loadedData);
    
    const products = loadedData.filter(product=>product.brandName===brandName);
    console.log(products);
    const slider = banner.filter(slide=>slide.brandName===brandName);
    console.log(slider);
   
    
    return (
       
       <div>

        <div>
        {
              slider.map(slide=><Slider key={slide.brand} slide={slide}></Slider>)
            }
        </div>

<div className="mx-auto container mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            
          
            {
                products.map(data=> <div  key={data._id}> 
                {/* <h2>{data.name}</h2>
                <img src={data.photo} alt="" />  */}

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={data.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold text-rose-500">{brandName}</h2>
    <h2> <span className="text-lg font-medium">Name:</span> {data.name}</h2>
    <p> <span className="text-lg font-medium">Price:</span> {data.price}</p>
    <p> <span className="text-lg font-medium">Types Of Categories:</span> {data.TypesOfProduct}</p>
    {/* <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
</div> */}
 <p className="text-lg font-medium"> Rating: {data.rating}/5</p>
    <div className="card-actions justify-between">
      <Link to={`/details/${data._id}`}>
      <button className="btn btn-sm bg-rose-600 text-white">Details</button>
      </Link>

      <Link to={`/updateCar/${data._id}`}>
      <button className="btn btn-sm bg-rose-600 text-white">Update</button>
      </Link>
     
      
    </div>
  </div>
</div>
                
                </div>)
            }
            
        </div>
       </div>
        
    );
};

export default Toyota;