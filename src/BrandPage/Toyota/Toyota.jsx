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
       
        <div>
            <h2>name: {brandName}</h2>
            {
                products.map(data=> <div  key={data._id}> 
                <h2>{data.name}</h2>
                <img src={data.photo} alt="" /> </div>)
            }
            
        </div>
        
    );
};

export default Toyota;