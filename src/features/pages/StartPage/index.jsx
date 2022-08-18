import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Banner from '../../../assets/images/banner.jpg';
import Logo from '../../../assets/images/logo.png';
import Footer from '../../../components/Footer';
import dataIntro from '../../../data/dataIntro';
import dataQuestion from '../../../data/dataQuestion';
import { Intro, MailForm } from '../../elements';

const StartPage = () => {
    return (
        <div className='w-full h-full '>
            <div className='w-full h-screen relative'>
                <header className='h-[88px] flex items-center justify-between px-14 relative z-10'>
                    <img src={Logo} alt='logo' className='w-[134px]' />
                    <div className=' flex gap-8'>
                        <select className='relative border border-white py-1 bg-grayOver text-white '>
                            <option value='English'>English</option>
                            <option value='Tiếng Việt'>Tiếng Việt</option>
                        </select>
                        <Link
                            to='/login'
                            className='text-base text-white px-4 py-[6px] bg-red-600 rounded'
                        >
                            Sign In
                        </Link>
                    </div>
                </header>
                <div className='absolute top-0 right-0 left-0 h-full z-0'>
                    <img
                        src={Banner}
                        alt=''
                        className='object-cover w-full h-full brightness-75'
                    />
                    <div className='absolute top-0 right-0 left-0 bg-overlayBg z-10 w-full h-full'></div>
                </div>
                <div className='w-[640px] text-white flex flex-col items-center justify-center gap-5 mx-auto text-center mt-[116px] relative z-10'>
                    <h1 className='text-[50px] font-semibold leading-tight'>
                        Unlimited movies, TV shows, and more.
                    </h1>
                    <p className='text-[26px] font-medium'>
                        Watch anywhere. Cancel anytime.
                    </p>
                    <p className='text-[17px] font-medium'>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </p>

                    <MailForm />
                </div>
            </div>

            {dataIntro.map((item) => (
                <Intro
                    key={item.id}
                    heading={item.heading}
                    desp={item.desp}
                    imgSrc={item.imgSrc}
                    imgAlt={item.imgAlt}
                    reverse={item.reverse}
                />
            ))}

            <div className='w-full h-full text-white seperate'>
                <div className='max-w-[1100px] mx-auto py-[70px]'>
                    <h1 className='text-[50px] font-semibold text-center'>
                        Frequently Asked Questions
                    </h1>
                    <ul className='flex flex-col gap-2 text-[24px] w-[815px] mx-auto mt-14'>
                        {dataQuestion.map((item) => (
                            <li
                                key={item.id}
                                className='bg-gray_color px-[32px] py-[20px] flex items-center justify-between'
                            >
                                {item.question}
                                <AiOutlinePlus className='text-4xl' />
                            </li>
                        ))}
                    </ul>
                    <div className='mt-14'>
                        <p className='text-[19px] text-center mb-4'>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </p>
                        <div className='w-[662px] mx-auto'>
                            <MailForm />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default StartPage;
