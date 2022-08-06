import React from 'react';

const Intro = ({ heading, desp, imgSrc, imgAlt, reverse }) => {
    return (
        <div className='w-full h-full bg-black text-white seperate '>
            <div
                className={`flex items-center justify-between ${
                    reverse ? 'flex-row-reverse' : ''
                }  max-w-[1100px] mx-auto py-[70px]`}
            >
                <div className='basis-7/12 pr-12 max-w-[595px]'>
                    <h1 className='text-[45px] font-semibold leading-snug mb-4'>
                        {heading}
                    </h1>
                    <p className='text-[24px] '>{desp}</p>
                </div>

                {imgSrc && imgAlt && (
                    <div className='basis-5/12'>
                        <img src={imgSrc} alt={imgAlt} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Intro;
