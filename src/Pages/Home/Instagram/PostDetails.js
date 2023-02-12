import React from 'react';

const PostDetails = ({post}) => {
    const {img, id} = post
    return (
        <div>
            <img src={img} alt={`Instagram Post ${id}`} className=" w-full " />
        </div>
    );
};

export default PostDetails;