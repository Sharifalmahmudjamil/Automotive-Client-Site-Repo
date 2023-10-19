import { Link, useLoaderData } from "react-router-dom";


import { useState } from "react";
import CardCars from "../CarCads/CardCars";


const PopularCategories = () => {
    const cars=useLoaderData();
    console.log(cars);
    // eslint-disable-next-line no-unused-vars
    const[brands,setBrands]=useState(cars);

    return (
        <div className="mb-6">
            <h1 className="text-5xl text-center">Popular <span className="text-rose-500">Categories</span></h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  mx-auto container" >
      {
            brands.map(car=>
            <Link to={`/brand/${car.brandName}`}
            
                key={car._id} 
                car={car}>
                    <CardCars car={car}></CardCars>

                </Link>)
          }
      </div>
        </div>
    );
};

export default PopularCategories;
