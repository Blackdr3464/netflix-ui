import React from 'react';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-screen h-screen bg-notfound bg-fixed bg-no-repeat bg-center bg-cover'>
            <header className='w-full bg-black h-[68px] px-[40px] flex items-center'>
                <Link to='/home'>
                    <img
                        src={Logo}
                        alt='logo'
                        className='w-[90px] object-contain'
                    />
                </Link>
            </header>
            <div className='flex flex-col items-center justify-between md:h-[45vh] h-[40vh] gap-6 mt-[50vh] -translate-y-3/4 select-none'>
                <div className='flex flex-col items-center justify-center gap-6'>
                    <h1 className='md:text-[62px] text-[37px] text-white font-semibold'>
                        Lost your way?
                    </h1>
                    <p className='md:text-[22px] text-[13px] text-white text-center'>
                        Sorry, we can't find that page. You'll find lots to
                        explore on the home page.
                    </p>
                    <Link
                        to='/home'
                        className='relative md:text-base text-xs text-black font-medium bg-white px-5 py-2 rounded hover:bg-slate-200 after:content after:absolute after:shadow-30xl after:-z-40'
                    >
                        Netflix Home
                    </Link>
                </div>
                <p className='relative md:text-2xl text-sm text-white font-light after:content after:w-[2px] after:h-[54px] after:bg-red-600 after:absolute after:-left-4 after:top-1/2 after:-translate-y-2/4'>
                    Error code <span className='font-semibold'>NSES-404</span>
                </p>
            </div>
        </div>
    );
};

export default NotFound;
