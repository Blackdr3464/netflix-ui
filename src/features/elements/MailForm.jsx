import axios from 'axios';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const MailForm = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            setLoading(true);
            const register = await axios.post(
                'http://localhost:8000/v1/auth/register',
                {
                    email: email,
                    password: password,
                }
            );
            if (register) {
                setTimeout(() => {
                    setLoading(false);
                    navigate('/login');
                }, 2000);
            }
        } catch (error) {
            setLoading(false);
            alert(error.message);
        }
    };

    return (
        <div className='flex items-center w-full h-[60px] relative'>
            <input
                type='email'
                placeholder='Email address'
                className='px-5 text-black outline-none flex-1 h-full'
                onChange={(e) => {
                    setShow(true);
                    setEmail(e.target.value);
                }}
            />
            {show && (
                <div className='absolute top-20 left-0'>
                    <input
                        type='text'
                        placeholder='password'
                        className='px-3 py-3 border-none outline-none text-black'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            )}
            <button
                className='px-5 text-[26px] bg-red-600 flex items-center justify-center gap-2 h-full'
                onClick={handleRegister}
            >
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        Get Started
                        <IoIosArrowForward />
                    </>
                )}
            </button>
        </div>
    );
};

export default MailForm;
