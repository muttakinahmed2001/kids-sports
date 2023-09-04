import useTitle from "../../../hooks/useTitle";
import Collection from "../../Collection/Collection";
import Info from "../../Info/Info";
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
      <div className="p-10">
        <Gallery></Gallery>
        <Featured></Featured>
        <Info></Info>
        <Collection></Collection>
        <ShopByCategory></ShopByCategory>
        <Products></Products>
        <Offers></Offers>
      </div>
    </div>
  );
};

export default Home;
