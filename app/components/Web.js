"use client"
import React, { createContext } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'

import open from '../assets/Open.png'
import frame from '../assets/Frame.png'
import menu1 from '../assets/Menu1.png'
import component8 from '../assets/Component8.png';
import component50 from '../assets/Component50.png'
import ellipse90 from '../assets/Ellipse90.png'
import ellipse133 from '../assets/Ellipse133.png'
import resweb from '../assets/Resweb.png'
import php1 from '../assets/Php.png'
import mongo from '../assets/Mongodb.png'
import java from '../assets/Java.png'
import node1 from '../assets/Node1.png'
import python from '../assets/Python.png'
import diamond from '../assets/Diamond.png'
import html from '../assets/Html.png'
import css from '../assets/Vector1.png'
import js from '../assets/javascript.png'
import angular from '../assets/angular.png'
import react from '../assets/Reacticon.png'
import jk from '../assets/Vector2.png'
import aws from '../assets/amazon.png'
import flutter from '../assets/flutter.png'
import laptop1 from '../assets/laptop.png'
import animation1 from '../assets/animation1.png'
import image14 from '../assets/image14.png'
import component31 from '../assets/Component31.png'
import girl1 from '../assets/girl1.png'
import component14 from '../assets/Component14.png'
import calender from '../assets/calender.png'
import Footer from './Footer'
import Link from 'next/link'

const Web = () => {
  return (
    <>

      {/* logo  */}
      <div className='hidden sm:hidden md:hidden lg:block xl:block 2xl:block mt-7 mx-20'>
        <Image className='mt-4' src={frame} height={650} width={150}></Image>
      </div>

      {/* logo and menu for mobile screen  */}
      <div className='  flex justify-between w-12/12  lg:hidden '>
        <div className=' mt-7 ms-7 mb-8  '>
          <Image src={frame} height={670} width={170}></Image>
        </div>
        <div className=' mt-7 ms-28 mb-8 me-5 '>
        <Link href='/menu'><Image src={menu1} height={40} width={40}></Image></Link>
        </div>
      </div>
      {/* firsi section  */}
      <h1 className='text-2xl ms-20 md:ms-48 md:text-4xl lg:ms-[21%] 2xl:ms-[23%]  lg:text-4xl text-[#ED1C24] font-semibold '>Web app development</h1>

      <div className='flex flex-col-reverse w-full mt-5 lg:flex-row '>
        <div className='flex w-full lg:w-[40%]'>
          <div className=' hidden sm:hidden lg:block relative lg:w-[90%]  '>

            {/* for desktop image  */}
            <Image
              className=' lg:h-[28vh] lg:w-[160%] lg:ms-[-24%]   xl:w-[90%] xl:h-[50vh] 2xl:w-[85%] 2xl:h-[55vh] 2xl:ms-24'
              src={component8} height={200} width={200}></Image>
          </div>
          <div className='absolute ms-12 me-6 md:text-xl mt-14 font-[500] lg:w-[46%] 2xl:w-[31%] lg:text-xl  lg:ms-20 2xl:ms-[23%]'>
            <h1>With thousands of millions of web URLs existing on the Internet don t just make your company s website add another value to the clutter.</h1>
            <h1 className='mt-3'>Get in touch with to avail customized web app development services that can help your reach your target customers by applying correct strategies, effective content, and excellent blend of promotional campaigns. Establish a niche for your business because there is no one better than you at it!</h1>
          </div>
          <div className='lg:hidden ms-auto mt-14 md:mt-2'>
            {/* for mobile image  */}
            <Image
              className=''
              src={resweb} height={200} width={200}></Image>
          </div>

        </div>
        <div className='flex w-full'>
          <Image
            className='relative w-[60vw] ms-20 md:ms-32 lg:h-[22vh] lg:w-[50%] lg:ms-[42%] xl:ms-[40%] xl:h-[43vh] xl:w-[50%] 2xl:w-[45%] 2xl:h-[45vh] 2xl:ms-[42%]'
            src={ellipse133} height={300} width={300}></Image>
          <Image
            className='absolute w-[55vw] ms-20 md:ms-32 lg:h-[20vh] lg:w-[40vw] lg:ms-72 xl:h-[39vh] xl:w-[34vw] xl:ms-[29%] 2xl:w-[30vw] 2xl:ms-[31%] 2xl:h-[43vh]'
            src={open} height={200} width={200}></Image>
        </div>
      </div>

      {/* second section  */}

      <h1 className='text-xl ms-7 md:text-2xl md:ms-12 lg:text-2xl font-semibold lg:ms-24 xl:ms-32 2xl:ms-[23%]'>Our competence on the backend side includes:</h1>
      <div className='flex flex-col lg:flex-row w-full mt-8'>

        {/* left part  */}
        <div className='relative flex  '>
          <div>
            <Image
              className='mt-56 h-[20vh] w-[28vw] md:h-[20vh] md:w-[24vw] md:mt-24 lg:mt-40 xl:mt-0 lg:h-[28vh] lg:w-[30vw] lg:ms-[-25%] xl:h-[48vh] 2xl:ms-28 2xl:mt-40 2xl:w-[22vw] 2xl:h-[50vh] ' src={component8} height={300} width={300}></Image>
          </div>

          <div className='absolute  ms-6 flex flex-col md:ms-10 lg:ms-24 2xl:ms-[78%]'>
            <div className=' flex'>
              <Image
                className='w-12 h-12 md:w-[9vw] md:h-[7vh]  lg:h-[7vh] lg:w-[7vw] lg:mt-5 xl:h-[9vh] 2xl:w-[5vw]'
                src={php1} height={20} width={30}></Image>
              <h1 className='w-[70vw] md:w-[70vw] md:text-xl xl:text-lg lg:w-[33vw] font-[500] lg:mt-6 ms-5 2xl:w-[32vw]'>PHP (Hypertext Preprocessor) is known as a general-purpose scripting language that can be used to develop dynamic and interactive websites.</h1>
            </div>

            <div className=' flex mt-7 md:mt-7 lg:mt-5 '>
              <Image
                className='w-12 h-14 md:w-[9vw] md:h-[7vh] lg:h-[6vh] lg:w-[7vw] lg:mt-5 xl:h-[9vh] 2xl:w-[5vw]'
                src={node1} height={20} width={30}></Image>
              <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl md:mt-3 lg:w-[33vw] font-[500] lg:mt-6 ms-5 2xl:w-[24vw]'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser.</h1>
            </div>

            <div className=' flex mt-7 md:mt-7 lg:mt-5 '>
              <Image
                className='w-12 h-14 md:w-[9vw] md:h-[6vh] lg:h-[6vh] lg:w-[7vw] lg:mt-5 xl:h-[8vh] 2xl:w-[5vw] 2xl:h-[7vh]'
                src={java} height={20} width={30}></Image>
              <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl md:mt-3 font-[500] lg:w-[33vw]  lg:mt-6 ms-5 2xl:w-[24vw]'>Java is one of the most popular and widely used programming languages and platforms. It is highly scalable</h1>
            </div>
          </div>
        </div>

        {/* right part  */}

        <div className='relative flex '>

          <div className='absolute ms-6 mt-5 lg:mt-2 xl:mt-0 flex flex-col md:ms-10 md:mt-24 lg:ms-52 2xl:ms-[40%]'>
            <div className=' flex'>
              <Image
                className=' w-14 h-14 md:w-[10vw] md:h-[8vh]  lg:h-[6vh] lg:w-[7vw] lg:mt-5 xl:h-[9vh] 2xl:w-[5vw]'
                src={mongo} height={20} width={30}></Image>
              <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl lg:w-[35vw] font-[500] lg:mt-6 ms-5 2xl:w-[27vw]'>MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases.</h1>
            </div>

            <div className=' flex mt-8 lg:mt-7 md:mt-8 xl:mt-4 2xl:mt-6'>
              <Image
                className='w-14 h-14 md:w-[9vw] md:h-[7vh]  lg:h-[5vh] lg:w-[6vw] lg:mt-8 xl:h-[9vh] 2xl:w-[4vw]'
                src={python} height={20} width={25}></Image>
              <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl lg:w-[35vw] font-[500] lg:mt-4 ms-5 2xl:w-[27vw]'>Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry</h1>
            </div>

            <div className=' flex mt-8  md:mt-8 lg:mt-8  xl:mt-4 2xl:mt-6'>
              <Image
                className='w-14 h-14 md:w-[9vw] md:h-[7vh]  lg:h-[5vh] lg:w-[6vw] lg:mt-8 xl:h-[9vh] 2xl:w-[4vw]'
                src={diamond} height={20} width={25}></Image>
              <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl lg:w-[35vw] font-[500] lg:mt-4 ms-5 2xl:w-[27vw]'>Ruby is a general-purpose, interpreted programming language that supports various programming paradigms such as procedural, functional, and object-oriented programming.</h1>
            </div>
          </div>

          <div>
            <Image
              className='h-[22vh] w-[32vw] ms-[67vw] mt-52 md:mt-48 md:ms-[70vw] md:h-[28vh] md:w-[30vw] lg:mt-40 lg:h-[29vh] lg:w-[27vw] lg:ms-[43vw] xl:w-[21vw] xl:mt-32 xl:ms-[48vw] xl:h-[45vh] 2xl:ms-[49vw] 2xl:h-[55vh] 2xl:mt-32 2xl:w-[20.5vw]' src={component50} height={300} width={300}></Image>
          </div>

        </div>

      </div>

      {/* third section  */}

      <h1 className='text-xl ms-7 mt-14 md:text-2xl md:ms-12 lg:text-2xl font-semibold lg:ms-24 lg:mt-24 xl:mt-12 2xl:mt-0 xl:ms-32 2xl:ms-[23%]'>And on the front-end side:</h1>
      <div className='flex flex-col lg:flex-row w-full mt-8'>

        {/* left part  */}

        <div className='  ms-6 flex flex-col md:ms-10 lg:ms-24 2xl:ms-[24%]'>
          <div className=' flex'>
            <Image
              className='w-12 h-12 md:w-[9vw] md:h-[7vh]  lg:h-[8vh] lg:w-[7vw] lg:mt-5 xl:h-[11vh] 2xl:w-[4vw]'
              src={html} height={20} width={30}></Image>
            <h1 className='w-[70vw] md:w-[70vw] md:text-xl xl:text-lg lg:w-[33vw] font-[500] lg:mt-6 ms-5 2xl:w-[27vw]'>HTML is at the core of every web page, regardless the complexity of a site or number of technologies involved. It s an essential skill for any web professional.</h1>
          </div>

          <div className=' flex mt-7 md:mt-7 lg:mt-5 '>
            <Image
              className='w-12 h-14 md:w-[9vw] md:h-[7vh] lg:h-[6vh] lg:w-[7vw] lg:mt-5 xl:h-[9vh] 2xl:w-[4vw]'
              src={css} height={20} width={30}></Image>
            <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl md:mt-3 lg:w-[33vw] font-[500] lg:mt-6 ms-5 2xl:w-[24vw]'>Cascading Style Sheets fondly referred to as CSS is a simply designed language intended to simplify the process of making web pages presentable.</h1>
          </div>

          <div className=' flex mt-7 md:mt-7 lg:mt-5 '>
            <Image
              className='w-12 h-14 md:w-[9vw] md:h-[6vh] lg:h-[6vh] lg:w-[7vw] lg:mt-5 xl:h-[8vh] 2xl:w-[4vw] 2xl:h-[8vh]'
              src={js} height={20} width={30}></Image>
            <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl md:mt-3 font-[500] lg:w-[33vw]  lg:mt-6 ms-5 2xl:w-[24vw]'>JavaScript is a famous scripting language used to create magic on sites to make the site interactive for the user. It is used to enhance the functionality of a website.</h1>
          </div>

          <div className=' flex mt-7 md:mt-7 lg:mt-5 '>
            <Image
              className='w-12 h-14 md:w-[9vw] md:h-[6vh] lg:h-[6vh] lg:w-[7vw] lg:mt-5 xl:h-[8vh] 2xl:w-[4vw] 2xl:h-[7vh]'
              src={angular} height={20} width={30}></Image>
            <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl md:mt-3 font-[500] lg:w-[33vw]  lg:mt-6 ms-5 2xl:w-[24vw]'>AngularJs is used to create interactive components of a website. It is a highly preferred framework, due to its effectiveness, simplicity.</h1>
          </div>
        </div>


        {/* right part  */}

        <div className='relative flex '>

          <div className='absolute ms-6 mt-5 lg:mt-2 xl:mt-0 flex flex-col md:ms-10 md:mt-24 lg:ms-16 2xl:ms-16'>
            <div className=' flex'>
              <Image
                className=' w-14 h-14 md:w-[10vw] md:h-[8vh]  lg:h-[6vh] lg:w-[7vw] lg:mt-5 xl:h-[9vh] 2xl:w-[5vw]'
                src={aws} height={20} width={30}></Image>
              <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl lg:w-[35vw] font-[500] lg:mt-6 ms-5 2xl:w-[27vw]'>Amazon Web Services is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.</h1>
            </div>

            <div className=' flex mt-8 lg:mt-7 md:mt-8 xl:mt-8 2xl:mt-6'>
              <Image
                className='w-14 h-14 md:w-[9vw] md:h-[7vh]  lg:h-[5vh] lg:w-[6vw] lg:mt-8 xl:h-[9vh] 2xl:w-[4vw]'
                src={react} height={20} width={25}></Image>
              <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl lg:w-[35vw] font-[500] lg:mt-4 ms-5 2xl:w-[27vw]'>React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows</h1>
            </div>

            <div className=' flex mt-8  md:mt-8 lg:mt-8  xl:mt-8 2xl:mt-6'>
              <Image
                className='w-14 h-14 md:w-[9vw] md:h-[7vh]  lg:h-[5vh] lg:w-[6vw] lg:mt-8 xl:h-[9vh] 2xl:w-[4vw]'
                src={jk} height={20} width={25}></Image>
              <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl lg:w-[35vw] font-[500] lg:mt-4 ms-5 2xl:w-[27vw]'>It is used more and more to be the foundation and the primary driving force of web development and application development, from desktops to tablets and smartphones.</h1>
            </div>

            <div className=' flex mt-8  md:mt-8 lg:mt-8  xl:mt-8 2xl:mt-6'>
              <Image
                className='w-14 h-14 md:w-[9vw] md:h-[7vh]  lg:h-[5vh] lg:w-[6vw] lg:mt-8 xl:h-[9vh] 2xl:w-[4vw]'
                src={flutter} height={20} width={25}></Image>
              <h1 className='w-[70vw] md:w-[70vw] xl:text-lg md:text-xl lg:w-[35vw] font-[500] lg:mt-4 ms-5 2xl:w-[27vw]'>Flutter is Google s portable UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. .</h1>
            </div>
          </div>

          <div>
            <Image
              className='h-[22vh] w-[32vw] ms-[67vw] mt-52 md:mt-48 md:ms-[70vw] md:h-[28vh] md:w-[30vw] lg:mt-[80%] lg:h-[29vh] lg:w-[27vw] lg:ms-[33vw] xl:w-[21vw] xl:mt-72 xl:ms-[38vw] xl:h-[45vh] 2xl:ms-[26vw] 2xl:h-[55vh] 2xl:mt-52 2xl:w-[17vw]' src={component50} height={300} width={300}></Image>
          </div>

        </div>

      </div>


       {/* work  */}
       <h1 className='text-[#ED1C24] text-[51px] mt-60 lg:mt-10 font-[600] flex justify-center'>Our work</h1>
                {/* work slider for desktop xl lg 2xl */}

                <div className='hidden sm:hidden lg:block lg:flex lg:flex-row  justify-center mt-4 '>
                    <Swiper
                        breakpoints={{
                            340: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            }
                        }}

                        freeMode={true}
                        pagination={{
                            clickable: true
                        }}
                        modules={[FreeMode, Pagination]}
                        className='max-w-[180%] lg:max-w-[180%] '
                    >

                        <SwiperSlide>
                            <div className='flex rounded-[28px] bg-[#ED1C24] ms-[15%] mt-10 w-[70vw]  ps-[3%] pe-[1%] lg:ms-[30%] ' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                                <div className='w-[50%] mb-20 ms-5'>
                                    <h1 className='text-white text-[34px] font-[550] mt-8'>Healthyme</h1>
                                    <p className='text-white'>Health care</p>
                                    <p className='text-white mt-3'>UI/UX</p>
                                    <p className=' text-white text-[17px] font-[400] mt-5'>Healthyme is a fitness app that offers full body workout plans with many 3D exercises for free to help you achieve your body goals.</p>
                                </div>
                                <div className='flex w-[45%]'>
                                    <Image
                                        className=' mt-14 ms-24  absolute z-[1000] w-[9vw] xl:mt-10 xl:h-[35vh] lg:h-[20vh]'
                                        src={animation1} height={200} width={170}></Image>
                                    <Image
                                        className=' mt-20 ms-44 h-48 xl:w-[15vw] xl:mt-14 lg:w-[15vw] relative'
                                        src={image14} height={100} width={200}></Image>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex  rounded-[28px] bg-[#101942] w-[70vw] ps-[3%] pe-[1%] ms-[160%] mt-10' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                                <div className='w-[50%] lg:mb-12 2xl:mb-20 ms-5'>
                                    <h1 className='text-white text-[34px] font-[550] mt-8'>V-sales</h1>
                                    <p className='text-white'>Business</p>
                                    <p className='text-white mt-3'>UI/UX . Web</p>
                                    <p className=' text-white text-[17px] font-[400] mt-5'>V-sales is the best for your business it saves your time & money without any technical knowledge. Simple way to Track Unlimited Sales, Profit, Stock, POS & much more.</p>


                                </div>
                                <div className='flex'>
                                    <Image
                                        className=' mt-12 ms-24  z-[1000] w-[22vw] xl:h-[24vh] lg:h-[20vh]'
                                        src={laptop1} height={100} width={170}></Image>


                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex  rounded-[28px] bg-[#ED1C24] w-[70vw] ps-[3%] pe-[1%] ms-[280%] mt-10' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                                <div className='w-[50%] mb-20 ms-5 '>
                                    <h1 className='text-white text-[34px] font-[550] mt-8'>Healthyme</h1>
                                    <p className='text-white'>Health care</p>
                                    <p className='text-white mt-3'>UI/UX</p>
                                    <p className=' text-white text-[17px] font-[400] mt-5'>Healthyme is a fitness app that offers full body workout plans with many 3D exercises for free to help you achieve your body goals.</p>


                                </div>
                                <div className='flex'>
                                    <Image
                                        className=' mt-24 ms-5 absolute z-[1000] w-[8.3vw] xl:h-[35vh] lg:h-[22vh]'
                                        src={animation1} height={200} width={170}></Image>
                                    <Image
                                        className=' mt-12 ms-24 h-48 xl:w-[15vw] lg:w-[13vw] relative'
                                        src={image14} height={100} width={200}></Image>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex  rounded-[28px] bg-[#101942] w-[37vw] ps-[3%] pe-[1%] mt-10 ms-[455%]' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                                <div className='w-[40%] mb-12 '>
                                    <h1 className='text-white text-[34px] font-[550] mt-8'>V-sales</h1>
                                    <p className='text-white'>Business</p>
                                    <p className='text-white mt-3'>UI/UX . Web</p>
                                    <p className=' text-white text-[17px] font-[400] mt-5'>V-sales is the best for your business it saves your time & money without any technical knowledge. Simple way to Track Unlimited Sales, Profit, Stock, POS & much more.</p>


                                </div>
                                <div className='flex'>
                                    <Image
                                        className=' mt-24 ms-12  z-[1000] w-[18vw] h-[24vh]'
                                        src={laptop1} height={100} width={170}></Image>


                                </div>

                            </div>
                        </SwiperSlide>
 
                    </Swiper>

                </div>
                <button className='hidden sm:hidden lg:block flex justify-center ms-32 2xl:ms-44 text-[#ED1C24] px-5 py-3 border border-[#ED1C24] w-[15vw] mt-6 rounded-2xl '>View more</button>

                {/* work for mobile sm md */}

                <div className='grid grid-cols-1 md:grid-cols-2 ms-5 me-5  h-auto w-full  lg:hidden'>
                    <div>

                        <div className='flex bg-[#ED1C24] w-[90vw] md:w-[45vw] rounded-t-3xl  h-auto justify-center'>
                            <Image
                                className=' mt-8 ms-[-30%] md:ms-[-20%] absolute z-[1000] w-[21vw] h-[25vh] md:w-[13vw] md:h-[23vh] '
                                src={animation1} height={200} width={170}></Image>
                            <Image
                                className=' mt-12 ms-12 h-48 mb-14  w-[37vw] md:w-[20vw] relative'
                                src={image14} height={100} width={200}></Image>
                        </div>
                        <div className='bg-[#f0f0f0] w-[90vw] md:w-[45vw] py-5  rounded-b-3xl'>
                            <h1 className=' text-center text-lg font-[500]'>Healthyme | Health care | UI/UX</h1>
                        </div>
                    </div>

                    <div>
                        <div className='flex mt-7 md:mt-0 bg-[#101942] w-[90vw] md:w-[45vw] rounded-t-3xl h-auto justify-center'>
                            <Image
                                className=' mt-8  z-[1000] h-[23vh] w-[70vw] mb-5 md:mb-12 md:w-[30vw] md:h-[21vh] '
                                src={laptop1} height={100} width={170}></Image>
                        </div>
                        <div className='bg-[#f0f0f0] w-[90vw] md:w-[45vw] py-5  rounded-b-3xl'>
                            <h1 className=' text-center text-lg font-[500]'>V-sales | Business | Web development</h1>
                        </div>
                    </div>

                    <button className='flex justify-center ms-12 text-[#ED1C24] px-5 py-3 border border-[#ED1C24] w-[60vw] mt-6 rounded-2xl md:hidden'>View more</button>

                </div>




      {/* last section project */}
      <div className='flex '>
        <Image className='hidden sm:hiddem lg:block mt-[-4%]' src={component31} height={300} width={280}></Image>
        <div>
          <h1 className=' text-[#ED1C24] text-3xl text-center mt-20 lg:text-5xl font-[600] xl:ms-40 2xl:ms-60 lg:mt-[12%]  lg:text-center '>Have a project in mind?</h1>
          <h1 className=' lg:text-center text-2xl text-center mt-3 lg:text-3xl lg:mt-4 font-[500]  xl:ms-40 2xl:ms-44  '>Book a call with our team</h1>
          <h1 className=' hidden sm:hidden lg:block text-[22px] font-[450] lg:text-center xl:ms-40 2xl:ms-48  mt-2'>Schedule a 30 min consultation to discuss <br />how we can help you grow your business .</h1>
          <h1 className='   font-[450] text-xl ms-5 text-center me-4 lg:text-2xl lg:text-center xl:ms-40 2xl:ms-48  mt-2 lg:hidden'>Schedule a 30 min consultation to discuss how we can help you grow your business .</h1>
        </div>
      </div>

      <div className=' flex'>
        <div className='hidden sm:hidden lg:block lg:mt-0 lg:ms-[6%] xl:ms-[17%] 2xl:ms-[22%]'>
          <Image className='relative' src={ellipse133} height={270} width={400}></Image>
          <Image className='absolute mt-[-23%] ms-[3%]' src={girl1} height={200} width={310}></Image>
        </div>
        <div >
          <Image className='md:absolute w-[90vw] ms-[5%] mt-10 md:mt-0 z-[1000] lg:w-[45vw] xl:w-[35vw]' src={calender} height={400} width={510}></Image>
          <Image className='hidden sm:hidden md:block relative lg:ms-[80%] lg:mt-[-44%]' src={component14} height={300} width={440}></Image>
        </div>
      </div>


      {/* footer  */}

      <Footer/>




    </>
  )
}

export default Web