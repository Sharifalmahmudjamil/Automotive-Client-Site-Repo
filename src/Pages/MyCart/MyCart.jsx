import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Navber/Navbar";


const MyCart = () => {
    const loadedCart=useLoaderData();
    const [carts,SetCart]=useState(loadedCart);

    const handleDelete= id =>{
        // make user confirmed to delete
        console.log(id);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
         
            fetch(`http://localhost:5000/cart/${id}`,{
              method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              if(data.deletedCount >0){
                   Swal.fire(
              'Deleted!',
              'Your cart has been deleted.',
              'success'
            )
            // remove the cart from UI
            const remainingCarts=carts.filter(cart=>cart._id!==id);
            SetCart(remainingCarts);
               }
            })
          }
        })


      
    }

    return (
        <div className="gird grid-cols-1 lg:grid-cols-2 mx-auto container">
          <Navbar></Navbar>
           
            {
                carts.map(cart=>
                    <div key={cart._id} className="">
                    
                    <div className="card w-full bg-base-100 shadow-xl mt-6 ">
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
        <p className="text-center text-base">{cart.description}</p>
            <div className="card-actions justify-between">
             
          <button onClick={()=>handleDelete(cart._id)} className="btn btn-sm bg-rose-600 text-white">Delete</button>
              
              
             
             
              
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