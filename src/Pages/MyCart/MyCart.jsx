import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const loadedCart=useLoaderData();

    return (
        <div className="gird grid-cols-1 lg:grid-cols-2 mx-auto container">
            <h2>My CART:{loadedCart.length}</h2>
            {
                loadedCart.map(cart=>
                    <div key={cart._id} className="">
                    
                    <div className="card w-96 bg-base-100 shadow-xl ">
          <figure><img src={cart.photo} alt="Shoes" /></figure>
          <div className="card-body ">
            <h2 className="card-title  text-2xl font-bold text-rose-500">{cart.brandName}</h2>
            <h2> <span className="text-lg font-medium">Name:</span> {cart.name}</h2>
            <p> <span className="text-lg font-medium">Price:</span> {cart.price}</p>
            <p> <span className="text-lg font-medium">Types Of Categories:</span> {cart.TypesOfProduct}</p>
            <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-rose-400" />
        </div>
        <p className="text-center text-2xl">{cart.description}</p>
            <div className="card-actions justify-between">
             
          <button  className="btn btn-sm bg-rose-600 text-white">Delete</button>
              
              
             
             
              
            </div>
          </div>
        </div>
                </div>
                    
                    )
            }
        </div>
    );
};

export default MyCart;