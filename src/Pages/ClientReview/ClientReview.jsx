/* eslint-disable react/no-unescaped-entities */


// import Marquee from "react-fast-marquee";

const ClientReview = () => {
    return (
     
       <div>
        <h1 className="text-4xl font-medium text-center mt-6"> Client Review</h1>
        
          <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto container gap-4 mt-4">
            
       <div className="card  bg-slate-200 shadow-xl">
<figure><img className="rounded-full w-52 h-52" src="https://i.ibb.co/hDtQpys/portrait-smiling-blonde-woman.jpg" alt="" /></figure>
<div className="card-body">
<h2 className="card-title">
      Arthy
  <div className="badge badge-secondary">Happy Client</div>
</h2>
<p> <span className="text-xl text-pink-400">BMW</span> I recently purchased a BMW 5 series from Automotive, and I couldn't be happier with my decision. The entire experience, from the initial test drive to the final purchase, was smooth and hassle-free.
</p>
<div className="card-actions justify-start">
  <div className="badge badge-outline">Automotive</div> 
  
</div>
</div>
</div>
       <div className="card  bg-slate-200 shadow-xl">
<figure><img className="rounded-full w-52 h-52" src="https://i.ibb.co/q0mMMrZ/portrait-optimistic-businessman-formalwear.jpg" alt="" /></figure>
<div className="card-body">
<h2 className="card-title">
      Jhon Alex
  <div className="badge badge-secondary">Happy Client</div>
</h2>
<p> <span className="text-xl text-pink-400">Tesla</span> I recently had the pleasure of purchasing a Tesla X9 from the , and I am thrilled with my decision. The entire process, from the initial inquiry to the delivery of the car, was seamless and efficient.
</p>
<div className="card-actions justify-start">
  <div className="badge badge-outline">Automotive</div> 
 
</div>
</div>
</div>
       <div className="card  bg-slate-200 shadow-xl">
<figure><img className="rounded-full w-52 h-52" src="https://i.ibb.co/kJdDG0r/portrait-confident-businesswoman.jpg" alt="" /></figure>
<div className="card-body">
<h2 className="card-title">
      Sofia
  <div className="badge badge-secondary">Happy Client</div>
</h2>
<p> <span className="text-xl text-pink-400">Ford</span> I recently purchased a Ford  and I couldn't be more satisfied with my decision. The entire experience, from the initial browsing to the final purchase, was efficient and enjoyable.
</p>
<div className="card-actions justify-start">
  <div className="badge badge-outline">Automotive</div> 
  
</div>
</div>
</div>


</div>
    
    </div>
    );
};

export default ClientReview;