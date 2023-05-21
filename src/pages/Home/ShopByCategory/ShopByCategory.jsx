import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MiniBowling from './MiniBowling/MiniBowling';
import MiniBasketBall from './MiniBasketBall/MiniBasketBall';
import MiniHockey from './MiniHockey/MiniHockey';


const ShopByCategory = () => {
    return (
        <div className='text-center mx-auto mt-5 '>
          <h1 className='text-5xl mb-5'>Shop by category</h1>
              <Tabs>
    <TabList>
      <Tab> Mini Bowling</Tab>
      <Tab> Mini Basketball</Tab>
      <Tab>Mini Hockey</Tab>
    </TabList>

    <TabPanel>
       <MiniBowling></MiniBowling>
    </TabPanel>
    <TabPanel>
      <MiniBasketBall></MiniBasketBall>
    </TabPanel>
    <TabPanel>
      <h2><MiniHockey></MiniHockey></h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ShopByCategory;