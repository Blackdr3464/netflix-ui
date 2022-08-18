import React, { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const Overlay = ({ film, onClickClose }) => {
    const [link, setLink] = useState('');

    const handleClose = () => {
        onClickClose();
    };

    const handleGetLink = (film) => {
        setLink(film.link_embed);
    };
    return (
        // <div className='absolute top-0 left-0 right-0'>
        <div className='fixed top-0 right-0 bottom-0 left-0 bg-overlayColor z-40 overflow-y-auto scrollbar-none'>
            <div className='bg-black w-[830px] h-auto flex mx-auto mt-[30px] rounded-lg pb-9 absolute top-0 right-0 left-0 overflow-hidden z-50'>
                <FaTimesCircle
                    className='absolute top-4 right-4 text-3xl text-white z-50'
                    onClick={handleClose}
                />
                <div className='absolute top-0 right-0 left-0 w-full h-[480px]'>
                    <img
                        src={film.movie.poster_url}
                        alt=''
                        className='object-cover w-full h-[480px]'
                    />
                </div>
                <div className='mt-[500px] text-white  px-14'>
                    <div className='flex justify-between'>
                        <div className='shrink-0 grow basis-3/5 '>
                            <div className='flex items-center gap-3'>
                                <p className='text-green font-medium'>
                                    Độ trùng: 98%
                                </p>
                                <p>{film.movie.year}</p>
                                <p className='text-xs border px-1 rounded '>
                                    {film.movie.quality}
                                </p>
                            </div>
                            <p className='text-sm text_clamp'>
                                {film.movie.content}
                            </p>
                        </div>
                        <div className='shrink-0 grow basis-2/5 flex flex-col gap-4 text-sm'>
                            <div>
                                <div className=' flex items-center flex-wrap'>
                                    <p className='text-text_color'>
                                        Diễn viên:{' '}
                                    </p>
                                    {film.movie.actor.map((item, idx) => (
                                        <p key={idx}>{item}, </p>
                                    ))}
                                </div>
                            </div>
                            <p className='text-text_color'>Thể Loại</p>
                            <p className='text-text_color'>Chương trình</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex items-center justify-between mt-12'>
                            <p className='text-2xl font-medium'>Tập</p>
                            <p className='text-base'>{film.movie.name}</p>
                        </div>
                        <ul className='grid grid-cols-10'>
                            {film.episodes[0].server_data.map((item, idx) => (
                                <li
                                    className='text-white border text-center text-sm py-2'
                                    key={idx}
                                    onClick={() => handleGetLink(item)}
                                >
                                    <a href={link} target='_blank'>
                                        <p>{item.name}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Overlay;
