import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const MailForm = () => {
    return (
        <div className='flex items-center w-full h-[60px]'>
            <input
                type='text'
                placeholder='Email address'
                className='px-5 text-black outline-none flex-1 h-full'
            />
            <button className='px-5 text-[26px] bg-red-600 flex items-center justify-center gap-2 h-full'>
                Get Started
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default MailForm;
