import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Offers from "./Offers";
import Products from "./Products/Products";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Products></Products>
      <Offers></Offers>
    </div>
  );
};

export default Home;
