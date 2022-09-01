import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Avt from '../../../assets/images/avt.png';
import Logo from '../../../assets/images/logo.png';
import Naruto from '../../../assets/images/naruto.webp';
import dataNavbar from '../../../data/dataNavbar';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../../components/Footer';
import Overlay from '../../../components/Overlay';
import { listFilm } from '../../../redux/actions/film';
import ListFilm from '../../elements/ListFilm';

const Home = () => {
    const [showBg, setShowBg] = useState(false);
    const [showInfor, setShowInfor] = useState(false);
    const [filmInfor, setFilmInfor] = useState([]);

    const dispatch = useDispatch();

    const dataFilm = useSelector((state) => state.film.listFilm);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            scrollY > 0 ? setShowBg(true) : setShowBg(false);
        });
    }, []);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(
                `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1`
            );
            await res.data.items.forEach(async (item) => {
                const resFilm = await axios.get(
                    `https://ophim1.com/phim/${item.slug}`
                );

                dispatch(listFilm(resFilm.data));
            });
        };

        getData();
    }, []);

    const handleClickInfor = (item) => {
        setShowInfor(true);
        setFilmInfor(item);
    };

    const handleCloseInfor = () => {
        setShowInfor(false);
    };

    return (
        <div className='relative'>
            <header
                className={`h-[68px] flex items-center justify-between px-14 font-medium fixed top-0 left-0 right-0 z-30 text-white transition-all duration-100 ease-in-out ${
                    showBg ? 'bg-header_black' : 'bg-grayTran'
                }`}
            >
                <div className='flex gap-10'>
                    <img src={Logo} alt='logo' className='w-[92px]' />
                    <ul className='flex items-center gap-4 text-sm'>
                        {dataNavbar.map((item) => (
                            <li key={item.id}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex items-center text-2xl gap-5'>
                    <BiSearch />
                    <IoIosNotifications />
                    <div className='flex items-center gap-2'>
                        <img src={Avt} alt='avt' className='w-8 h-8 rounded' />
                        <AiFillCaretDown className='text-sm' />
                    </div>
                </div>
            </header>

            <div className='w-full h-full relative z-0'>
                <img
                    src={Naruto}
                    alt='naruto'
                    className='object-cover w-full h-full'
                />
                <div className='absolute top-2/4 -translate-y-[68%] left-14 w-[485px] flex flex-col gap-5'>
                    <img
                        src='https://occ-0-325-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZEPymuXsMGE4IasZSKgXr1XNEhcyb9X3Gk6d0lwSIss4u8R9mSWkMzhuJos4_HlGRPV9HlQIHwx2cHOBxS8dbYaY-pdoORHdNs6us6zyYs.webp?r=f07'
                        alt=''
                        className='max-h-[206px]'
                    />
                    <p className='text-base text-white'>
                        After training abroad for more than two years, Naruto
                        Uzumaki returns to his hometown and teams up with Haruno
                        Sakura to fight an evil organization.
                    </p>
                    <div className='flex items-center gap-2 h-10'>
                        <button className='flex items-center gap-1 bg-white px-5 h-full rounded font-medium hover:opacity-90'>
                            <BsFillPlayFill className='text-4xl' />
                            Play
                        </button>
                        <button className='flex items-center gap-1 bg-btn_color px-5 h-full rounded font-medium text-white hover:bg-btn_color_hv'>
                            <RiErrorWarningLine className='text-2xl' />
                            Other information
                        </button>
                    </div>
                </div>
            </div>
            <div className='-mt-[168px] mb-8 flex flex-col gap-8'>
                <ListFilm
                    data={dataFilm}
                    title='Phim Mới Cập Nhật'
                    onClickInfor={handleClickInfor}
                />
                <ListFilm
                    data={dataFilm}
                    title='Phim Hài Hước'
                    onClickInfor={handleClickInfor}
                />
                <ListFilm
                    data={dataFilm}
                    title='Phim Kinh Dị'
                    onClickInfor={handleClickInfor}
                />
                <ListFilm
                    data={dataFilm}
                    title='Phim Hàn Quốc'
                    onClickInfor={handleClickInfor}
                />
                <ListFilm
                    data={dataFilm}
                    title='Phim Hoạt Hình'
                    onClickInfor={handleClickInfor}
                />
                <ListFilm
                    data={dataFilm}
                    title='Phim Siêu Nhân'
                    onClickInfor={handleClickInfor}
                />
                <ListFilm
                    data={dataFilm}
                    title='Phim Holyhood'
                    onClickInfor={handleClickInfor}
                />
            </div>
            <Footer />
            {showInfor && (
                <Overlay film={filmInfor} onClickClose={handleCloseInfor} />
            )}
        </div>
    );
};

export default Home;
