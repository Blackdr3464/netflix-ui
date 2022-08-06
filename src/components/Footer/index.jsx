import React from 'react';
import dataFooter from '../../data/dataFooter';

const Footer = () => {
    return (
        <div className='w-full h-full bg-black text-white seperate'>
            <div className='max-w-[1100px] mx-auto px-20 py-[70px] text-text_color'>
                <p className='text-base mb-8'>Questions? Contact us.</p>
                <ul className='grid grid-cols-4 gap-y-2 text-[13px] '>
                    {dataFooter.map((item) => (
                        <li key={item.id} className=''>
                            {item.desp}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Footer;
