import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avt from '../../../assets/images/avt.png';
import Logo from '../../../assets/images/logo.png';

const Member = () => {
    const dispatch = useDispatch();

    const listMember = useSelector((state) => state.member.listMember);
    const statusMember = useSelector((state) => state.member.status);

    const handleAddMember = () => {
        console.log(123);
    };

    return (
        <div className='bg-bg_color w-full h-screen'>
            <header className='h-[68px] flex items-center justify-between px-14 '>
                <img src={Logo} alt='logo' className='w-[92px]' />
            </header>
            <div className='mt-[50vh] -translate-y-2/3'>
                <h1 className='text-white text-[45px] text-center mb-9'>
                    Who is watching?
                </h1>
                <div className='flex items-center justify-center gap-7'>
                    {listMember.map((member) => (
                        <Link
                            to='/home'
                            key={member.id}
                            className='flex flex-col items-center justify-center gap-2 text-text_color hover:text-white cursor-pointer'
                        >
                            <div className='w-[136px] h-[136px] rounded overflow-hidden'>
                                <img
                                    src={Avt}
                                    alt='avt'
                                    className='object-cover hover:border-[3px] hover:border-white'
                                />
                            </div>
                            <p className=' text-lg'>{member.name}</p>
                        </Link>
                    ))}

                    {statusMember && (
                        <div
                            onClick={handleAddMember}
                            className='flex flex-col items-center justify-center gap-2 text-text_color hover:text-white  cursor-pointer'
                        >
                            <div className='w-[136px] h-[136px] rounded overflow-hidden flex items-center justify-center hover:bg-white'>
                                <BsFillPlusCircleFill className='w-[60%] h-[60%] text-text_color' />
                            </div>
                            <p className=' text-lg'>Add profile</p>
                        </div>
                    )}
                </div>
                <button className='border border-text_color text-text_color text-base px-6 py-2 flex mx-auto mt-16 hover:text-white hover:border-white'>
                    Manage Profile
                </button>
            </div>
        </div>
    );
};

export default Member;
