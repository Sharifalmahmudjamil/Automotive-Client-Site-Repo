import { Helmet } from "react-helmet-async";
import Navbar from "../Navber/Navbar";


const Blogs = () => {
    return (
        <div >
            <Helmet>
            <title>Automotive|| Blog</title>
          </Helmet>
            <Navbar></Navbar>
            <h1 className="text-5xl text-center text-rose-500 mt-6">Our Blogs</h1>
            <div className="hero min-h-screen bg-base-200 mx-auto container overflow-x-hidden mt-6">
                
  <div className="hero-content flex-col lg:flex-row">
        
  
   <img src="https://i.ibb.co/xfybXXM/4ea55578eca62056de7065284ea53bfef70f6f0f-16x9-x0y0w3924h2207.jpg" className="max-w-sm rounded-lg shadow-2xl" />
  

   
    
    <div>
      <h1 className="text-5xl font-bold">Automotive Car</h1>
      <p className="py-6">A car blog is a digital platform dedicated to providing enthusiasts, consumers, and industry professionals with up-to-date information, reviews, and insights about various aspects of the automotive world. These blogs typically cover a wide range of topics, including new car releases, reviews of different vehicle models, maintenance tips, technological advancements in the industry, and coverage of major automotive events. Additionally, some car blogs may delve into topics such as car modifications, vintage car restorations, and the latest trends in the automotive market. They often aim to cater to both casual readers and passionate car aficionados, offering valuable information and engaging content to individuals with a keen interest in automobiles.</p>
      <p className="text-2xl font-semibold text-rose-500">May 28,2022</p>
      
    </div>
  </div>
  
</div>
            <div className="hero min-h-screen bg-base-200 mx-auto container overflow-x-hidden mt-6">
                
  <div className="hero-content flex-col lg:flex-row">
        
  
   <img src="https://i.ibb.co/bQ1pnWZ/2021-Mercedes-Benz-S-Class-S-450-sedan-red-press-image-1001x565p.jpg" className="max-w-sm rounded-lg shadow-2xl" />
  

   
    
    <div>
      <h1 className="text-5xl font-bold">Automotive Car</h1>
      <p className="py-6">A car blog is a digital platform dedicated to providing enthusiasts, consumers, and industry professionals with up-to-date information, reviews, and insights about various aspects of the automotive world. These blogs typically cover a wide range of topics, including new car releases, reviews of different vehicle models, maintenance tips, technological advancements in the industry, and coverage of major automotive events. Additionally, some car blogs may delve into topics such as car modifications, vintage car restorations, and the latest trends in the automotive market. They often aim to cater to both casual readers and passionate car aficionados, offering valuable information and engaging content to individuals with a keen interest in automobiles.</p>
      <p className="text-2xl font-semibold text-rose-500">May 28,2024</p>
      
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Blogs;