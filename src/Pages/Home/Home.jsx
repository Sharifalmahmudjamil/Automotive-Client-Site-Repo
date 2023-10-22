
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularCategories from "../Category/PopularCategories";
import ClientReview from "../ClientReview/ClientReview";

import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Navbar from "../Navber/Navbar";


const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Automotive||Home</title>
          </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <PopularCategories></PopularCategories>
            <Gallery></Gallery>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;