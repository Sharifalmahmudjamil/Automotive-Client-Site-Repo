
import { useLoaderData, } from "react-router-dom";


const Details = () => {
    
    
    const loadedData=useLoaderData();
    console.log(loadedData);
    return (
        <div className="mx-auto container">
            <h1 className="text-5xl text-rose-500 font-semibold text-center ">Car Information</h1>
            <div className="card w-auto bg-base-100 shadow-xl ">
  <figure><img src={loadedData.photo} alt="Shoes" /></figure>
  <div className="card-body items-center">
    <h2 className="card-title  text-2xl font-bold text-rose-500">{loadedData.brandName}</h2>
    <h2> <span className="text-lg font-medium">Name:</span> {loadedData.name}</h2>
    <p> <span className="text-lg font-medium">Price:</span> {loadedData.price}</p>
    <p> <span className="text-lg font-medium">Types Of Categories:</span> {loadedData.TypesOfProduct}</p>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
</div>
<p className="text-center text-2xl">{loadedData.description}</p>
    <div className="card-actions justify-between">
     
      <button className="btn btn-sm bg-rose-600 text-white">Add to Cart</button>
      
      
     
     
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;