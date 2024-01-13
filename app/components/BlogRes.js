
"use client"
import React, { useEffect } from 'react';
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";
import Link from 'next/link';
import Image from 'next/image';
import component11 from '../assets/Component11.png'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import frame from '../assets/Frame.png'
import menu1 from '../assets/Menu1.png'


const BlogRes = () => {
    useEffect(() => {
        initTE({Dropdown, Ripple})
    }, []);

  return (
    <>
      {/* mobile responsive blogs  */}
      <div className='flex justify-between w-12/12 2xl:hidden xl:hidden lg:hidden '>
                    <div className=' mt-7 ms-6 mb-8  '>
                        <Image src={frame} height={670} width={170}></Image>
                    </div>
                    <div className=' mt-7 ms-28 mb-8 me-5 '>
                    <Link href='/menu'><Image src={menu1} height={40} width={40}></Image></Link>
                    </div>
                    </div>
    
        <h1 className='text-[#ED1C24] text-4xl font-semibold flex justify-center 2xl:hidden xl:hidden lg:hidden '>Blogs</h1>

{/* dropdown menu  */}
      <div className='flex w-12/12  2xl:hidden xl:hidden lg:hidden  '>
        {/* Dropdown menu for choose category */}
      
<div class="relative" data-te-dropdown-ref>
  <button
    class="flex items-center ms-3 mt-3 rounded-full w-[50vw] hover:w-[50vw] bg-gray-100 ps-3 pb-1 mb-1 pt-1 text-[13px] font-medium  leading-normal text-black- shadow-[0_4px_8px_-4px_#808080] transition duration-500 ease-in-out hover:bg-gray-100  focus:bg-gray-100 focus:text-gray-400  focus:outline-none focus:ring-0 active:bg-gray-100  "
    type="button"
    id="dropdownMenuButton1"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init
    data-te-ripple-color="light">
   Choose Category
    <span class="ms-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class="absolute z-[1000] float-left m-0 hidden w-[50vw] list-none overflow-hidden rounded-lg border-none bg-gray-100 bg-clip-padding text-left text-base shadow-lg dark:bg-gray-100 [&[data-te-dropdown-show]]:block"
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
    class="flex items-center ms-6 mt-3 rounded-full w-[35vw] hover:w-[35vw] bg-gray-100 ps-3 pb-1 mb-1 pt-1 text-[13px] font-medium  leading-normal text-black- shadow-[0_4px_8px_-4px_#808080] transition duration-500 ease-in-out hover:bg-gray-100  focus:bg-gray-100 focus:text-gray-400  focus:outline-none focus:ring-0 active:bg-gray-100  "
    type="button"
    id="dropdownMenuButton1"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init
    data-te-ripple-color="light">
   Sort by
    <span class="ms-4">
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
    class="absolute z-[1000] float-left m-0 hidden w-[35vw] list-none overflow-hidden rounded-lg border-none bg-gray-100 bg-clip-padding text-left text-base shadow-lg dark:bg-gray-100 [&[data-te-dropdown-show]]:block"
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

{/* blogs  */}

    <div className='flex flex-col  w-12/12 ms-8  2xl:hidden xl:hidden lg:hidden '>
      <div className='flex'>
      <div className='relative ms-[-40vw] mt-[-10%] md:block hidden'>
        <Image src={component11} height={300} width={350}></Image>
      </div>


      <Link href='blog1'><div className='sm:absolute rounded-lg bg-[#f0f0f0] h-auto w-[85vw]  mt-12 md:h-[33vh] md:mb-5 md:w-[90vw] md:flex ' style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)"}}>
        <div>
          <Image className='ms-6 mt-6 h-[22vh] w-[75vw] md:w-[42vw] md:h-[27vh]' src={b1} height={180} width={280} ></Image>
          </div>
          <div className='md:ms-4'>
          <h1 className='text-[#ED1C24] font-semibold ms-8 me-3 mt-3 text-[16px] md:ms-8 md:mt-10 md:me-6' >Importance of enterprise app for growth of business</h1>
          <p className='text-[#959595] text-sm ms-8 mt-1 md:mt-3'>June 15, 8 min read</p>
          <p className=' text-[15px] ms-8 mt-1 font-[500] me-5 mb-3 md:mt-4'>As the world is rapidly adopting digital, there is a marked..</p>
          </div>
      </div>
      </Link>
      </div>

     
      
      <div className=' rounded-lg bg-[#f0f0f0] h-auto w-[85vw] mt-8 md:h-[33vh] md:mb-5 md:w-[90vw] md:flex md:mt-[23%]' style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)"}}>
        <div>
          <Image className='ms-6 mt-5 h-[22vh] w-[75vw] md:w-[42vw] md:h-[27vh]' src={b2} height={180} width={280} ></Image>
          </div>
          <div  className='md:ms-4'>
          <h1 className='text-[#ED1C24] font-semibold ms-8 me-3 mt-3 text-[16px] md:ms-8 md:mt-10 md:me-6' >Can you consider bots as the future  of your business?</h1>
          <p className='text-[#959595] text-sm ms-8 mt-1  md:mt-3'>May 7, 5 min read</p>
          <p className=' text-[15px] ms-8 mt-1 font-[500] me-5 mb-3 md:mt-4'>The increasing focus on elevating customer experiences ...</p>
          </div>
      </div>

      <div className=' rounded-lg bg-[#f0f0f0] h-auto w-[85vw] mt-8 md:h-[33vh] md:mb-5 md:w-[90vw] md:flex md:mt-4' style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)"}}>
        <div>
          <Image className='ms-6 mt-5 h-[22vh] w-[75vw] md:w-[42vw] md:h-[27vh]' src={b1} height={180} width={280} ></Image>
          </div>
          <div  className='md:ms-4'>
          <h1 className='text-[#ED1C24] font-semibold ms-8 me-3 mt-3 text-[16px] md:ms-8 md:mt-10 md:me-6' >Can you consider bots as the future  of your business?</h1>
          <p className='text-[#959595] text-sm ms-8 mt-1  md:mt-3'>May 7, 5 min read</p>
          <p className=' text-[15px] ms-8 mt-1 font-[500] me-5 mb-3 md:mt-4'>The increasing focus on elevating customer experiences ...</p>
          </div>
      </div> 


       <div className=' rounded-lg bg-[#f0f0f0] h-auto w-[85vw] mt-8 md:h-[33vh] md:mb-5 md:w-[90vw] md:flex md:mt-4' style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)"}}>
        <div>
          <Image className='ms-6 mt-5 h-[22vh] w-[75vw] md:w-[42vw] md:h-[27vh]' src={b2} height={180} width={280} ></Image>
          </div>
          <div  className='md:ms-4'>
          <h1 className='text-[#ED1C24] font-semibold ms-8 me-3 mt-3 text-[16px] md:ms-8 md:mt-10 md:me-6' >Can you consider bots as the future  of your business?</h1>
          <p className='text-[#959595] text-sm ms-8 mt-1  md:mt-3'>May 7, 5 min read</p>
          <p className=' text-[15px] ms-8 mt-1 font-[500] me-5 mb-3 md:mt-4'>The increasing focus on elevating customer experiences ...</p>
          </div>
      </div>
     
      
    </div>
      
        
    </>
  )
}

export default BlogRes