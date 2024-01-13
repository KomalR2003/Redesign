import React from 'react';
import Image from 'next/image';
import catLogo from '../assets/catlogo.png'
import Link from 'next/link';

const Menu = () => {
    return (
        <>
        <div className='ms-[85vw]'>
                        <Link href='/main'><i className="fa-solid fa-xmark text-5xl mt-10 ms-5 "></i></Link>
                    </div>
            <div className='2xl:flex xl:flex lg:flex'>
                
                    <div className='sm:block hidden'>
                        <div className='border border-l-2 border-gray-400 border-t-0 border-b-0 border-r-0 ms-60 h-64 mt-12'></div>
                        <h1 className='text-red-600  text-[25px] font-[500] transform rotate-[-90deg] w-40 ms-40 '>Menu</h1>
                        <div className='border border-l-2 border-gray-400 border-t-0 border-b-0 border-r-0 ms-60 h-64 mt-24'></div>
                    </div>
                    
              
                <div className='mt-28 ms-28'>
                    <ul>
                        <Link href='/services'> <li className='text-[47px]  hover:text-red-600 hover:translate-x-14 hover:duration-700 font-[500]'>Services</li></Link>
                        <Link href='/work1'><li className='text-[47px] mt-5  hover:text-red-600 hover:translate-x-14 hover:duration-700  font-[500]'>Work</li></Link>
                        <Link href='/approach'><li className='text-[47px] mt-5  hover:text-red-600 hover:translate-x-14 hover:duration-700  font-[500]'>Approach</li></Link>
                        <Link href='/blogs'><li className='text-[47px] mt-5 hover:text-red-600 hover:translate-x-14 hover:duration-700  font-[500]'>Blogs</li></Link>
                       <Link href='/career'><li className='text-[47px] mt-5  hover:text-red-600 hover:translate-x-14 hover:duration-700  font-[500]'>Career</li></Link> 
                        <Link href='/contact'><li className='text-[47px] mt-5  hover:text-red-600 hover:translate-x-14 hover:duration-700  font-[500]'>Contact us</li></Link>
                    </ul>
                </div>

                <div className=' mt-[20%] ms-[30%]'>
                    <Image
                        className='ms-28 animate-bounce'
                        src={catLogo}
                        alt='cat Logo'
                        height={50}
                        width={50}
                    ></Image>
                    <h1 className='mt-10'><i className="fa-solid fa-phone"></i> <span className='ms-4 text-lg'>+ 91 20 652 66070</span></h1>
                    <h1 className='mt-2'><i className="fa-solid fa-envelope"></i> <span className='ms-4 text-lg'>info@felixtechlabs.com</span></h1>
                    <i className="fa-brands fa-twitter ms-10 mt-7 text-4xl"></i>
                    <i className="fa-brands fa-linkedin-in ms-12 mt-7 text-4xl"></i>
                </div>

            </div>
        </>
    )
}

export default Menu