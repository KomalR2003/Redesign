"use client"
import React, { useEffect } from 'react';
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";
import Link from 'next/link';
import Image from 'next/image';
import anim2 from '../assets/anim2.png'
import Ellipse6 from '../assets/Ellipse6.png'
import component8 from '../assets/Component8.png'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import Footer from './Footer';
import frame from '../assets/Frame.png'
import BlogRes from './BlogRes';




const Blogs = () => {
  useEffect(() => {
      initTE({Dropdown, Ripple})
  }, [])
  return (
    <>
      {/* blogs  */}
      <div className='hidden 2xl:flex xl:flex lg:flex  '>
      <div className='mt-7 mx-20 mb-8'>
                <Image className='mt-4' src={frame} height={650} width={150}></Image>
            </div>
            <h1 className='text-[#ED1C24] text-[51px] mt-8 ms-[25%] font-semibold'>Blogs</h1>
      </div>

      {/* dropdown menu  */}
      <div className='hidden 2xl:flex lg:flex xl:flex  '>
        {/* Dropdown menu for choose category */}
      
<div class="relative" data-te-dropdown-ref>
  <button
    class="flex items-center ms-72 rounded-full w-[65%] hover:w-[64%] bg-gray-100 ps-6 pb-1 mb-1 pt-1 text-[13px] font-medium  leading-normal text-black- shadow-[0_4px_8px_-4px_#808080] transition duration-500 ease-in-out hover:bg-gray-100  focus:bg-gray-100 focus:text-gray-400  focus:outline-none focus:ring-0 active:bg-gray-100  "
    type="button"
    id="dropdownMenuButton1"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init
    data-te-ripple-color="light">
   Choose Category
    <span class="ms-60 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-6 w-6">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class="absolute z-[1000] float-left m-0 hidden w-[64%] list-none overflow-hidden rounded-lg border-none bg-gray-100 bg-clip-padding text-left text-base shadow-lg dark:bg-gray-100 [&[data-te-dropdown-show]]:block"
    aria-labelledby="dropdownMenuButton1"
    data-te-dropdown-menu-ref>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black  active:text-black active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-black dark:text-black "
        href="#"
        data-te-dropdown-item-ref
        >UI/UX design</a>
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black  active:text-black active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-black dark:text-black "
        href="#"
        data-te-dropdown-item-ref
        >Mobile</a>
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black  active:text-black active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-black dark:text-black "
        href="#"
        data-te-dropdown-item-ref
        >Marketing</a>
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black  active:text-black active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-black dark:text-black "
        href="#"
        data-te-dropdown-item-ref
        >Web development</a>
    </li>

    
   
  </ul>
</div>

        {/* Dropdown menu for sort by */}
    <div class="relative" data-te-dropdown-ref>
  <button
    class="flex items-center ms-28 rounded-full w-[75%] hover:w-[74%] bg-gray-100 ps-6 pb-1 mb-1 pt-1 text-[13px] font-medium  leading-normal text-black- shadow-[0_4px_8px_-4px_#808080] transition duration-500 ease-in-out hover:bg-gray-100  focus:bg-gray-100 focus:text-gray-400  focus:outline-none focus:ring-0 active:bg-gray-100  "
    type="button"
    id="dropdownMenuButton1"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init
    data-te-ripple-color="light">
   Short by
    <span class="ms-28">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-6 w-6">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class="absolute z-[1000] float-left m-0 hidden w-[74%] list-none overflow-hidden rounded-lg border-none bg-gray-100 bg-clip-padding text-left text-base shadow-lg dark:bg-gray-100 [&[data-te-dropdown-show]]:block"
    aria-labelledby="dropdownMenuButton1"
    data-te-dropdown-menu-ref>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black  active:text-black active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-black dark:text-black "
        href="#"
        data-te-dropdown-item-ref
        >Date</a>
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black  active:text-black active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-black dark:text-black "
        href="#"
        data-te-dropdown-item-ref
        >Recent</a>
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black  active:text-black active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-black dark:text-black "
        href="#"
        data-te-dropdown-item-ref
        >Popular reads</a>
    </li>
   
    
   
  </ul>
</div>

      </div>

      {/* first blog  */}
      <div className='hidden 2xl:flex lg:flex xl:flex '>
      <div className='flex w-8/12'>
      <div className='relative 2xl:ms-24'>
         

        <Image className='2xl:h-[46vh] 2xl:w-[18vw]' src={component8} height={220} width={230}></Image>
      </div>
     <Link href='/blog1'>
         <div className='absolute 2xl:ms-[-5%] xl:ms-[-5%] lg:ms-[-12%] mt-[4%] '>
        <h1 className='font-[550] text-2xl 2xl:text-3xl  text-red-600 '>Importance Of Enterprise App For Proficient </h1>
        <h1  className='font-[550] text-2xl 2xl:text-3xl  text-red-600 '>Growth Of Your Business</h1>
        <p className='mt-4 text-gray-400 text-lg'>June 15, 8 min read</p>
        <p className='text-lg font-[450] mt-2'>As the world is rapidly adopting digital, there is a marked hike in the <br/>number of enterprise apps catering to multiple business use cases<br/> aimed at one or more ...</p>
      </div>
      </Link> 
      </div>

      <div className='4/12'>
        <Image className='mt-16 2xl:h-[35vh] 2xl:w-[23vw] ' src={b1} height={200} width={330}></Image>
      </div>
      </div>

      {/* second blog  */}
      <div className='hidden 2xl:flex lg:flex xl:flex  mt-[-5%]'>
      <div className='flex w-8/12'>
      
      <div className='absolute mt-24 2xl:ms-72 xl:ms-36 lg:ms-24 2xl:mt-[5%]'>
        <h1 className='font-[550] text-2xl 2xl:text-3xl  text-[#ED1C24] '>Importance Of Enterprise App For Proficient </h1>
        <h1  className='font-[550] text-2xl 2xl:text-3xl  text-[#ED1C24] '>Growth Of Your Business</h1>
        <p className='mt-4 text-gray-400 text-lg'>June 15, 8 min read</p>
        <p className='text-lg font-[450] mt-2'>As the world is rapidly adopting digital, there is a marked hike in the <br/>number of enterprise apps catering to multiple business use cases<br/> aimed at one or more ...</p>
      </div>
      </div>

      <div className='4/12'>
        <Image className='2xl:mt-[25%] xl:mt-24 lg:mt-24 2xl:h-[35vh] 2xl:w-[23vw] ' src={b2} height={200} width={330}></Image>
      </div>
      </div>

      {/* third blog  */}
      <div className='hidden 2xl:flex xl:flex lg:flex  mt-[-2%]'>
      <div className='flex w-8/12'>
      <div className='relative 2xl:ms:40'>
      <Image className='mt-20 2xl:mt-4 2xl:h-[46vh] 2xl:w-[18vw] 2xl:ms-24' src={component8} height={220} width={230}></Image>
      </div>
      <div className='absolute ms-36 mt-20 2xl:ms-72 xl:ms-32 lg:ms-24 2xl:mt-[5%] '>
        <h1 className='font-[550] text-2xl 2xl:text-3xl  text-[#ED1C24] '>Importance Of Enterprise App For Proficient </h1>
        <h1  className='font-[550] text-2xl 2xl:text-3xl  text-[#ED1C24] '>Growth Of Your Business</h1>
        <p className='mt-4 text-gray-400 text-lg'>June 15, 8 min read</p>
        <p className='text-lg font-[450] mt-2'>As the world is rapidly adopting digital, there is a marked hike in the <br/>number of enterprise apps catering to multiple business use cases<br/> aimed at one or more ...</p>
      </div>
      </div>

      <div className='4/12'>
        <Image className='mt-[18%] 2xl:h-[35vh] 2xl:w-[23vw]' src={b1} height={200} width={330}></Image>
      </div>
      </div>


      {/* for mobile view  */}
      <BlogRes/>


      {/* desktop footer  */}
     
     <Footer/>
     
     
      
    </>
  )
}

export default Blogs