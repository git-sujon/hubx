import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLightBlue from '../Button/ButtonLightBlue';

const NewCustomer = () => {
    return (
        <div className='w-full max-w-sm mx-auto overflow-hidden mt-12'>
            <h3 className='font-bold rajdhani-font text-2xl leading-8'>New Customer?</h3>
            <p className='my-6 text-gray-600 text-base'>Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>

            <Link to='/signUp'><ButtonLightBlue>Register</ButtonLightBlue></Link>
        </div>
    );
};

export default NewCustomer;