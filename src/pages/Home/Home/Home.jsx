import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Offers from "./Offers";
import Products from "./Products/Products";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Products></Products>
            <Offers></Offers>
        </div>
    );
};

export default Home;