/* eslint-disable react/prop-types */




const CardCars = ({car}) => {

  const {brand,image}=car;
    return (
        <div  className="mt-6">
            <div className="card  bg-base-100 shadow-xl ">
  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
     <h2 className=" text-2xl text-rose-500 font-semibold text-center"> {brand}</h2>
    
  </div>
</div>
        </div>
    );
};

export default CardCars;