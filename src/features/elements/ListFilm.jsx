import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const ListFilm = ({ data, title, onClickInfor }) => {
    const handleClickInfor = (item) => {
        if (handleClickInfor) {
            onClickInfor(item);
        }
    };
    return (
        <div className='px-14'>
            <h1 className='text-white font-semibold'>{title}</h1>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                    },
                }}
                // slidesPerView={5}
                // spaceBetween={5}
                slidesPerGroup={5}
                speed={900}
                loop={true}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className='h-[136px] mt-2'
            >
                {data.map((item) => (
                    <SwiperSlide
                        key={item.movie._id}
                        className='rounded overflow-hidden'
                    >
                        <div
                            className='w-full h-full'
                            onClick={() => handleClickInfor(item)}
                        >
                            <img
                                src={item.movie.poster_url}
                                alt=''
                                className='object-cover w-full h-full'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ListFilm;
