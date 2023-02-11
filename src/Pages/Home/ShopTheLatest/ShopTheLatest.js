import React from 'react';

import productImage1 from '../../../Assets/Images/Products/Rogue HG 2.0 Bumper Plates.png'
import productImage2 from '../../../Assets/Images/Products/The Ohio Bar - Cerakote.png'
import productImage3 from '../../../Assets/Images/Products/Rogue Adjustable Bench 3.0.png'
import productImage4 from '../../../Assets/Images/Products/Rogue USA Nylon Lifting Belt.png'
import ProductDetails from './ProductDetails';

const ShopTheLatest = () => {

    const products= [
        {
            id:'01',
            title:'Rogue HG 2.0 Bumper Plates',
            img:productImage1,
            prePrice:'409',
            price:'300'

        },
        {
            id:'02',
            title:'The Ohio Bar - Cerakote',
            img:productImage2,
            prePrice:null,
            price:'300'

        },
        {
            id:'03',
            title:'Rogue Adjustable Bench 3.0.',
            img:productImage3,
            prePrice:null,
            price:'300'

        },
        {
            id:'04',
            title:'Rogue USA Nylon Lifting Belt',
            img:productImage4,
            prePrice:'60',
            price:'30'

        },
    ]

    return (
        <section>
        <div class=" py-8 ">
          <header class="text-center">
            <h3 className='text-xl text-[#2554D7] homemade-apple-font'>whats new</h3>
            <h2 class="text-xl font-bold text-[#040F16] sm:text-3xl rajdhani-font">
            SHOP THE LATEST
            </h2>
      
            <p class="max-w-[860px] mx-auto mt-4 text-gray-500">
            These are some of the trending products to sell in 2022, but there are so many more to choose from when deciding what to sell on Shopify as a new dropshipper or established store owner. 
            </p>
          </header>
      
          <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {
            products.map(product => <ProductDetails product={product} key={product?.id} ></ProductDetails>)
          }
      
          </ul>
        </div>
      </section>
      
    );
};

export default ShopTheLatest;