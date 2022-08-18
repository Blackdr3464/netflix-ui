import React from 'react';
import Logo from '../../../assets/images/logo.png';
import Footer from '../../../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-banner bg-no-repeat w-full h-auto bg-cover'>
            <Link to='/' className='h-[90px] px-10 flex items-center'>
                <img src={Logo} alt='logo' className='w-[167px] ' />
            </Link>
            <div className='w-[450px] h-[660px] px-[68px] py-[60px] bg-overlayColor rounded mx-auto mb-10 shadow-30xl'>
                <h1 className='text-[32px] font-semibold text-white mb-7'>
                    Sign In
                </h1>
                <div className='flex flex-col gap-4 mb-4'>
                    <input
                        className='w-full h-[50px] px-5 rounded'
                        type='text'
                        placeholder='Email or phone number'
                    />
                    <input
                        className='w-full h-[50px] px-5 rounded'
                        type='password'
                        placeholder='Password'
                    />
                </div>
                <div className=''>
                    <Link
                        to='/member'
                        className='flex items-center justify-center w-full py-3 bg-red-600 rounded text-white text-base font-medium mt-6 mb-4'
                    >
                        Sign In
                    </Link>
                    <div className='text-[13px] text-text_gray flex items-center justify-between '>
                        <label className='flex items-center gap-1'>
                            <input type='checkbox' />
                            Remember me
                        </label>
                        <a href=''>Need help?</a>
                    </div>
                </div>
                <div className='text-text_gray mt-[80px]'>
                    <p className='text-base'>
                        New to Netflix?
                        <a href='#' className='text-white ml-1'>
                            Sign up now.
                        </a>
                    </p>
                    <p className='text-[13px] mt-2'>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. Learn more.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
