import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MiniBowling from "./MiniBowling/MiniBowling";
import MiniBasketBall from "./MiniBasketBall/MiniBasketBall";
import MiniHockey from "./MiniHockey/MiniHockey";

const ShopByCategory = () => {
  return (
    <div className="text-center  mt-5  ">
      <h1 className="text-5xl mb-5">Shop by category</h1>
      <Tabs>
        <TabList className="bg-[#f4aa2b]">
          <Tab> Miniature Bowling</Tab>
          <Tab> Miniature Basketball</Tab>
          <Tab>Miniature Hockey</Tab>
        </TabList>

        <TabPanel className="p-3">
          <MiniBowling></MiniBowling>
        </TabPanel>
        <TabPanel className="p-3">
          <MiniBasketBall></MiniBasketBall>
        </TabPanel>
        <TabPanel className="p-3">
          <h2>
            <MiniHockey></MiniHockey>
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
