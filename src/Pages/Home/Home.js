import React from 'react';
import Banner from './Banner/Banner';
import ShopTheLatest from './ShopTheLatest/ShopTheLatest';

const Home = () => {
  return (
   <>
   <Banner></Banner>
   <div className='container px-[70px] mx-auto'>
    <ShopTheLatest></ShopTheLatest>
   </div>
   </>
  );
};

export default Home;