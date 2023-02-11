import React from 'react';
import { Link } from 'react-router-dom';

const CommonLink = ({to, children}) => {
    return (
        <Link to={to} class="text-sm text-[#2554D7]  hover:font-bold">
        {children}
      </Link>
    );
};

export default CommonLink;