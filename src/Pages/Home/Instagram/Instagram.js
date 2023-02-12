import React from 'react';
import PostDetails from './PostDetails';

import post1 from '../../../Assets/Images/Instagram/instagram (1).png'
import post2 from '../../../Assets/Images/Instagram/instagram (2).png'
import post3 from '../../../Assets/Images/Instagram/instagram (3).png'
import post4 from '../../../Assets/Images/Instagram/instagram (4).png'
import post5 from '../../../Assets/Images/Instagram/instagram (5).png'

const Instagram = () => {

    const posts= [
        {id:'01', img:post1},
        {id:'02', img:post2},
        {id:'03', img:post3},
        {id:'04', img:post4},
        {id:'05', img:post5},
    ]

    return (
        <section class="bg-[#040F16] text-white ">
        <div className=" py-20 container px-[70px] mx-auto border-b border-white border-opacity-20">
          <div class="text-center">
            <h3 className="text-xl text-[#2554D7] homemade-apple-font">
              whats new
            </h3>
            <h2 class="text-xl font-bold  sm:text-3xl rajdhani-font">
              Instagram
            </h2>
          </div>
  
      
  
          <div class="grid gap-4 mt-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {posts.map((post) => (
              <PostDetails
                post={post}
                key={post?.id}
              ></PostDetails>
            ))}
          </div>
        </div>
        
      </section>
    );
};

export default Instagram;