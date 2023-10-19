import { useLoaderData, useParams } from "react-router-dom";
// import CardToyota from "./CardToyota/CardToyota";


const Toyota = () => {

    const {brandName}=useParams();
    console.log(brandName);
    const loadedData=useLoaderData();
    console.log(loadedData);
    
    const products = loadedData.filter(product=>product.brandName===brandName);
    console.log(products);
    
    return (
       
        <div className="mx-auto container mt-6 grid grid-cols-1 lg:grid-cols-3">
            {/* <h2>name: {brandName}</h2> */}
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
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
</div>
    <div className="card-actions justify-between">
      <button className="btn btn-sm bg-rose-600 text-white">Details</button>
      <button className="btn btn-sm bg-rose-600 text-white">Update</button>
    </div>
  </div>
</div>
                
                </div>)
            }
            
        </div>
        
    );
};

export default Toyota;