import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {
    const car = useLoaderData();
    console.log(car);
  const  {_id,name,rating,brandName,TypesOfProduct,price,description,photo} = car;

  const handleUpdateCar=e=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const rating=form.rating.value;
    const brandName=form.brand.value;
    const TypesOfProduct=form.product.value;
    const price=form.price.value;
    const description= form.description.value;
    const photo=form.photo.value;

    const UpdateCar={name,rating,brandName,TypesOfProduct,price,description,photo}
    console.log(UpdateCar);

    // send data to server
    fetch(` https://automotive-store-server-n2gzcvngt-sharif-al-mahmuds-projects.vercel.app/cars/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(UpdateCar)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
            Swal.fire({
                title: 'Success!',
                text: 'Car Update SuccessFully',
                icon: 'success',
                confirmButtonText: 'Closed'
              })
        }
    })

}
   
    return (
        <div>
        <div className=" p-24 bg-rose-500">
       <Link to="/">
       <button className="btn lg:btn-outline mb-5">Back To Home</button>
       </Link>
        <h2 className="text-3xl font-extrabold text-center mb-6">Update Car</h2>
        <form onSubmit={handleUpdateCar} >
            
            <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="name" defaultValue={name} placeholder="Enter the Name" className="input input-bordered w-full" />
                </label>
                </div>
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="rating" defaultValue={rating}placeholder="Enter the rating" className="input input-bordered w-full" />
                </label>
                </div>
            </div>
           
            <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Brand Name</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="brand" defaultValue={brandName} placeholder="Enter the brand name" className="input input-bordered w-full" />
                </label>
                </div>
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Types Of product</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="product" defaultValue={TypesOfProduct} placeholder="Enter the Types of product" className="input input-bordered w-full" />
                </label>
                </div>
            </div>
            
            <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">price</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="price" defaultValue={price} placeholder="Enter the price" className="input input-bordered w-full" />
                </label>
                </div>
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text"> Short description</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="description" defaultValue={description} placeholder="Enter the Short description" className="input input-bordered w-full" />
                </label>
                </div>
            </div>
            
            <div className="mb-8">
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Photo Url</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                </label>
                </div>
            
            </div>
            
            <input type="submit" value="Update Product" className="btn btn-block btn-neutral" />
        </form>
    </div>

    </div>
    );
};

export default Update;