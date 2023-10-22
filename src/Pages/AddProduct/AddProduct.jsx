import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const AddProduct = () => {
    const handleAddCar=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const rating=form.rating.value;
        const brandName=form.brand.value;
        const TypesOfProduct=form.product.value;
        const price=form.price.value;
        const description= form.description.value;
        const photo=form.photo.value;

        const newCar={name,rating,brandName,TypesOfProduct,price,description,photo}
        console.log(newCar);

        // send data to server
        fetch(" https://automotive-store-server-n2gzcvngt-sharif-al-mahmuds-projects.vercel.app/cars",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCar)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added SuccessFully',
                    icon: 'success',
                    confirmButtonText: 'Closed'
                  })
            }
        })

    }
    return (
        <div>
            <Helmet>
            <title>Automotive||Add Product</title>
          </Helmet>
            <div className=" p-24 bg-rose-500">
           <Link to="/">
           <button className="btn lg:btn-outline mb-5">Back To Home</button>
           </Link>
            <h2 className="text-3xl font-extrabold text-center mb-6">Add Product</h2>
            <form onSubmit={handleAddCar} >
                {/* name and quantity */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="name" placeholder="Enter the Name" className="input input-bordered w-full" />
                    </label>
                    </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="rating" placeholder="Enter the rating" className="input input-bordered w-full" />
                    </label>
                    </div>
                </div>
                {/* Supplier and test row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="brand" placeholder="Enter the brand name" className="input input-bordered w-full" />
                    </label>
                    </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Types Of product</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="product" placeholder="Enter the Types of product" className="input input-bordered w-full" />
                    </label>
                    </div>
                </div>
                {/* Category and details row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="price" placeholder="Enter the price" className="input input-bordered w-full" />
                    </label>
                    </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text"> Short description</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="description" placeholder="Enter the Short description" className="input input-bordered w-full" />
                    </label>
                    </div>
                </div>
                {/* photo Url row */}
                <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </label>
                    </div>
                
                </div>
                
                <input type="submit" value="Add Product" className="btn btn-block btn-neutral" />
            </form>
        </div>

        </div>
    );
};

export default AddProduct;