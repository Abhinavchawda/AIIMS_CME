import React from 'react'
import { useRef } from 'react';
import bar_logo from '../assets/bar.svg';
import cross_logo from '../assets/cross.svg';
import home_logo from '../assets/home.svg';
import aiims_logo from '../assets/aiims_logo.png';

const Navbar = () => {
    const btn_ref = useRef(0);
    const icon_ref = useRef(0);
    
    const showMenu = () => {
        if(btn_ref.current.style.visibility == "visible") {
            btn_ref.current.style.visibility = "hidden"
            icon_ref.current.src = bar_logo;
        }
        else {
            btn_ref.current.style.visibility = "visible";
            icon_ref.current.src = cross_logo;
        }
    }
    return (
        <div className='bg-black'>
            <div className='flex items-center justify-between h-20 bg-[rgb(20,20,20)]'>
                <div className='text-[rgb(17,42,42)] font-bold text-3xl mx-5'>
                    <img src={aiims_logo} height={40} width={65}></img>
                </div>

                <div className=''>
                    <img ref={icon_ref} className='px-8 invert md:hidden text-black' src={bar_logo} onClick={showMenu} alt='menu'></img>
                    <div>
                        <ul ref={btn_ref} className='invisible md:hidden bg-black text-white rounded-2xl p-5 px-8 absolute right-5 top-24 text-md'>
                            <li className='rounded-xl font-semibold bg-[rgb(36,36,36)] m-2 flex justify-center py-1 px-2'><a href='#main'><img className='invert' src={home_logo} alt='Home'></img></a></li>
                            <li className='rounded-xl font-semibold bg-[rgb(36,36,36)] m-2 text-center py-1 px-2'><a href='#about'>About</a></li>
                            <li className='rounded-xl font-semibold bg-[rgb(36,36,36)] m-2 text-center py-1 px-2'><a href='#speakers'>Speakers</a></li>
                            <li className='rounded-xl font-semibold bg-[rgb(36,36,36)] m-2 text-center py-1 px-2'><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>

                <ul className='hidden md:flex items-center gap-10 m-0 p-5'>
                    <li className='rounded-xl text-white font-semibold px-3 py-1 bg-[rgb(30,30,32)] shadow-md shadow-slate-800  hover:text-blue-500'><a href='#main'><img className='invert' src={home_logo} alt='Home'></img></a></li>
                    <li className='rounded-xl text-white font-semibold px-3 py-1 bg-[rgb(30,30,32)] shadow-md shadow-slate-800  hover:text-blue-500'><a href='#about'>About</a></li>
                    <li className='rounded-xl text-white font-semibold px-3 py-1 bg-[rgb(30,30,32)] shadow-md shadow-slate-800  hover:text-blue-500'><a href='#speakers'>Speakers</a></li>
                    <li className='rounded-xl text-white font-semibold px-3 py-1 bg-[rgb(30,30,32)] shadow-md shadow-slate-800  hover:text-blue-500'><a href='#contact'>Contact</a></li>
                    <li className='rounded-xl text-xl text-black font-semibold px-3 py-2 bg-white shadow-md shadow-slate-800'><a href='https://docs.google.com/forms/d/e/1FAIpQLSfLKfCzl8XbF2mJSCyAljm_7FxUV8pSZ-9YEpQlMXlmBqhRiQ/viewform?usp=sharing'>Register</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
