"use client"
import React, { createContext } from 'react'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'

import frame from '../assets/Frame.png'
import anim3 from '../assets/anim3.png'
import anim4 from '../assets/anim4.png'
import styles from '../styles.module.css'
import dsk from '../assets/Group236.png'
import ellipse89 from '../assets/Ellipse89.png'
import ellipse90 from '../assets/Ellipse90.png'
import ellipse133 from '../assets/Ellipse133.png'
import mikhail from '../assets/mikhail.png'
import vector from '../assets/Vector.png'
import vector3 from '../assets/Vector3.png'
import adobe from '../assets/adobexd.png'
import Figma from '../assets/Figma.png'
import sketch from '../assets/Sketch.png'
import web from '../assets/Webb.png'
import html from '../assets/Html.png'
import css from '../assets/Vector1.png'
import js from '../assets/javascript.png'
import angular from '../assets/angular.png'
import react from '../assets/Reacticon.png'
import jk from '../assets/Vector2.png'
import aws from '../assets/amazon.png'
import laptop1 from '../assets/laptop.png'
import animation1 from '../assets/animation1.png'
import image14 from '../assets/image14.png'
import girl from '../assets/girl.png'
import girl1 from '../assets/girl1.png'
import catlogo from '../assets/catlogo.png'
import component31 from '../assets/Component31.png'
import component14 from '../assets/Component14.png'
import calender from '../assets/calender.png'
import menu1 from '../assets/Menu1.png'
import Footer from './Footer';
import grp1 from '../assets/Grp12.png'
import grp2 from '../assets/Grp2.png'
import node from '../assets/Node.png'
import python from '../assets/Python.png'
import diamond from '../assets/Diamond.png'
import php from '../assets/Php.png'
import mongo from '../assets/Mongodb.png'
import java from '../assets/Java.png'
import sq from '../assets/sq.png'
import zoho from '../assets/zoho.png'
import wrike from '../assets/wrike.png'
import checkmark from '../assets/Checkmark.png'
import marketing from '../assets/Marketing.png'
import bird from '../assets/bird.png'
import taj from '../assets/taj.png'
import buffer from '../assets/Buffer.png'


import ServiceRes from './ServiceRes';
import Link from 'next/link';

const Services = () => {
    return (
        <>
            <div className='overflow-x-hidden'>

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


                {/* services   */}


                <div className='w-[100%]'>
                    <h1 className='flex justify-center text-[#ED1C24] font-[600] text-2xl ms-6 me-2 md:text-4xl lg:text-4xl  '>An Array of Development<br /> Services Available With Us</h1>
                </div>

                {/* first part for lg, xl and 2xl screens (desktop view)  */}
                <div className='hidden sm:hidden lg:flex lg:mt-14'>
                    <Image
                        className='mt-[-10%] relative 2xl:w-[30vw] h-[90vh] xl:w-[26vw] xl:h-[90vh] lg:w-[26vw] lg:h-[40vh]'
                        src={anim4} height={400} width={350} ></Image>

                    <div>
                        <div className='hidden sm:hidden lg:flex '>
                            <div className='absolute 2xl:w-[20%] 2xl:ms-[-9%] xl:w-[20%] xl:ms-[-11%]xl:w-[20%] xl:ms-[-11%] lg:w-[20%] lg:ms-[-13%] '>
                               <Link href='/web'><h1 className='text-[#ED1C24] xl:text-xl font-[600]'>Web app development</h1></Link> 
                                <p className='font-[450] xl:text-lg mt-2'>Quality web applications  development to promote your business.</p>

                                <h1 className='text-[#ED1C24] xl:text-xl font-[600] mt-6'>Mobile app development</h1>
                                <p className='font-[450] xl:text-lg mt-2'>Reach out to massive targets with our interactive apps</p>

                                <h1 className='text-[#ED1C24] xl:text-xl font-[600] mt-6'>Backend development</h1>
                                <p className='font-[450] xl:text-lg mt-2'>Kick-start with our seamless backend solutions for your enterprise</p>
                            </div>

                            <div className='hidden sm:hidden md:hidden 2xl:block xl:block lg:block flex lg:ms-[15%] lg:w-[35%]  '>

                                <Image className='2xl:h-[50vh] 2xl:w-[50vw] xl:h-[45vh] xl:w-[45vw] lg:h-[27vh] lg:w-[42vw]' src={dsk} height={200} width={400}></Image>
                            </div>

                            <div className=' ms-[4%] me-[3%] 2xl:w-[30%] xl:w-[35%] lg:w-[35%]'>
                                <h1 className='text-[#ED1C24] xl:text-xl font-[600]'>UI/UX design</h1>
                                <p className='font-[450] xl:text-lg mt-2'>Patterns of wen and mobile user experience to deliver exactly what they desire.</p>

                                <h1 className='text-[#ED1C24] xl:text-xl font-[600] mt-6'>Project Managememt</h1>
                                <p className='font-[450] xl:text-lg mt-2'>Seamless integration to your software processes with special Quality Check experts available at Felix Tech Labs. </p>

                                <h1 className='text-[#ED1C24] xl:text-xl font-[600] mt-6'>Social media marketing</h1>
                                <p className='font-[450] xl:text-lg mt-2'>Kick-start with our seamless backend solutions for your enterprise</p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* first part for mobile responsive (sm and md )  */}
                <div className='flex w-full lg:hidden'>
                    <div className='w-6/12'>
                        <Image
                            className='mt-[-8%] ms-[-3%] h-auto md:ms-[-7%] md:h-auto  w-[95vw] '
                            src={grp1} height={100} width={400} ></Image>
                    </div>
                    <div className='w-6/12'>
                        <div className='lg:hidden '>
                            <div className='ms-[-7%] mt-12 md:mt-32 '>
                                <Link href='/web'><h1 className='text-[#ED1C24] text-[16px] font-[600] md:text-3xl'>Web app development</h1></Link>
                                <p className='font-[450] text-sm mt-2 md:text-2xl'>Quality web applications  development to promote your business.</p>

                                <h1 className='text-[#ED1C24] text-[16px] font-[600] mt-6 md:mt-20 md:text-3xl'>Mobile app development</h1>
                                <p className='font-[450] text-sm mt-2 md:text-2xl'>Reach out to massive targets with our interactive apps</p>

                                <h1 className='text-[#ED1C24] xl:text-xl font-[600] mt-6 md:mt-20 md:text-3xl'>Backend development</h1>
                                <p className='font-[450] text-sm  mt-2 md:text-2xl'>Kick-start with our seamless backend solutions for your enterprise</p>
                            </div>





                        </div>

                    </div>
                </div>

                <div className='flex w-full lg:hidden'>

                    <div className='w-6/12'>
                        <div className='lg:hidden '>
                            <div className='ms-3 mt-28  md:mt-48 '>
                                <h1 className='text-[#ED1C24] text-[16px]  font-[600] md:text-3xl'>UI/UX design</h1>
                                <p className='font-[450] text-sm mt-2  md:text-2xl'>Patterns of wen and mobile user experience to deliver exactly what they desire.</p>

                                <h1 className='text-[#ED1C24] text-[16px] font-[600] mt-6 md:mt-20 md:text-3xl'>Project Managememt</h1>
                                <p className='font-[450] text-sm mt-2  md:text-2xl '>Seamless integration to your software processes with special Quality Check experts available at Felix Tech Labs. </p>

                                <h1 className='text-[#ED1C24] xl:text-xl font-[600] mt-6 md:mt-20 md:text-3xl'>Social media marketing</h1>
                                <p className='font-[450] text-sm mt-2  md:text-2xl'>Kick-start with our seamless backend solutions for your enterprise</p>
                            </div>

                        </div>

                    </div>

                    <div className='w-6/12'>
                        <Image
                            className='h-auto w-[98vw] ms-3 md:h-auto'
                            src={grp2} height={100} width={400} ></Image>
                    </div>
                </div>


                {/* second part   */}

                <div className='flex overflow-x-hidden'>
                    <h1 className=' text-[#ED1C24] text-2xl ms-8 me-2 md:text-4xl md:ms-36 md:me-12 mt-10 2xl:text-5xl lg:text-4xl xl:text-5xl 2xl:ms-[26%] xl:ms-[20%] lg:ms-[28%] lg:me-[15%] xl:me-[20%] font-[600] '>Count on Us for world-class Mobile & Web App Development</h1>
                </div>


                <div className='flex flex-col md:flex-row  lg:ms-[24%] lg:me-[20%]'>

                    {/*  for mobile responsive  */}
                    <div className='w-full lg:hidden sm:block mt-16 md:mt-24  ms-10'>
                        <Image className='relative h:[20vh] w-[70vw] md:h-[20vh] md:w-[35vw]' src={ellipse89} height={300} width={2400}></Image>
                        <Image className='absolute mt-[-60%] ms-2 h-[28vh] w-[60vw] md:mt-[-38%] md:h-[25vh] md:w-[30vw]' src={mikhail} height={250} width={200}></Image>
                    </div>
                    <div className='w-full lg:hidden sm:block ms-5 me-5  mt-14'>
                        <p className='w-full text-lg font-[500]  md-me-4'>We are a full-time mobile and web application development company based in Pune, and have specialist competencies in offering deeply personalized technology solutions to contribute towards your brands growth and digital visibility. Holding rich industrial experience in technology solutions.</p>
                        <button className='text-[#ED1C24] ms-12 border-2 border-[#ED1C24] px-10 py-2 rounded-md text-xl mt-12 ' >More about us</button>
                    </div>

                    {/* for desktop view  */}
                    <div className='hidden sm:hidden lg:block lg:mt-12'>
                        <p className='w-full text-lg font-[500] '>We are a full-time mobile and web application development company based in Pune, and have specialist competencies in offering deeply personalized technology solutions to contribute towards your brand’s growth and digital visibility. Holding rich industrial experience in technology solutions.</p>
                        <button className='text-[#ED1C24] border-2 border-[#ED1C24] px-10 py-2 rounded-md text-xl mt-12' >More about us</button>
                    </div>
                    <div className='hidden sm:hidden md:hidden lg:block lg:mt-14 lg:ms-8 flex '>
                        <Image className='relative' src={ellipse89} height={300} width={2400}></Image>
                        <Image className='absolute mt-[-21%] ms-8 2xl:h-[40vh] w-[20vw]' src={mikhail} height={250} width={290}></Image>
                    </div>
                </div>


                {/* services   */}

                <div className={styles.overflow}>
                    <h1 className='text-[#ED1C24] text-[51px] font-[600] flex justify-center mt-16'>Services</h1>
                </div>


                {/* service slider for desktop view lg xl and 2xl  */}

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
                            <div className="flex ms-[30%]  text-black rounded-3xl px-8 pt-4  bg-[#e3e1e1] h-auto w-[40vw] overflow-hidden cursor-pointer">

                                <div className='w-[60%] '>
                                    <h1 className='text-4xl font-[550] mt-3'>Design</h1>
                                    <p className='text-lg font-[450] xl:mt-5 lg:mt-4'>We create a design to augment User Experience</p>
                                    <p className='text-lg font-[450]'> We analyze human behavioral patterns and blend them with information architecture to design a unique experience.</p>
                                    <h1 className='text-[22px] font-[600] xl:mt-11 lg:mt-8 '>Technologies we use</h1>
                                    <div className='flex ms-4 mt-3 xl:mb-6 lg:mb-4'>
                                        <Image src={adobe} height={40} width={40}></Image>
                                        <Image className='ms-4' src={Figma} height={40} width={40}></Image>
                                        <Image className='ms-4' src={sketch} height={40} width={40}></Image>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        className='mt-24 ms-5'
                                        src={vector} height={200} width={170}></Image>
                                </div>


                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="flex lg:ms-[60%]  text-black rounded-xl px-6 pt-4   bg-[#e3e1e1] h-auto w-[40vw] overflow-hidden cursor-pointer">

                                <div className='w-[60%] '>
                                    <h1 className='text-4xl font-[550] mt-4'>Frontend</h1>
                                    <p className='text-lg font-[450] mt-4'>We create a design to augment User Experience</p>
                                    <p className='text-lg font-[450]'> We analyze human behavioral patterns and blend them with information architecture to design a unique experience.</p>
                                    <h1 className='text-[22px] font-[600] mt-8'>Technologies we use</h1>
                                    <div className='flex ms-4 mt-4 mb-4'>
                                        <Image src={html} height={30} width={40}></Image>
                                        <Image className='ms-4' src={css} height={30} width={40}></Image>
                                        <Image className='ms-4' src={js} height={30} width={40}></Image>
                                        <Image className='ms-4' src={angular} height={30} width={40}></Image>
                                        <Image className='ms-4' src={react} height={30} width={40}></Image>
                                        <Image className='ms-4' src={jk} height={30} width={40}></Image>
                                        <Image className='ms-4' src={aws} height={30} width={80}></Image>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        className='mt-20 ms-5'
                                        src={web} height={200} width={170}></Image>
                                </div>


                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="flex lg:ms-[90%]  text-black rounded-xl px-6 pt-4   bg-[#e3e1e1] h-auto w-[40vw] overflow-hidden cursor-pointer">

                                <div className='w-[60%] '>
                                    <h1 className='text-4xl font-[550] mt-4'>Backend</h1>
                                    <p className='text-lg font-[450] mt-3'>We create a design to augment User Experience</p>
                                    <p className='text-lg font-[450]'> We analyze human behavioral patterns and blend them with information architecture to design a unique experience.</p>
                                    <h1 className='text-[22px] font-[600] mt-10'>Technologies we use</h1>
                                    <div className='flex ms-4 mt-3 mb-4'>
                                        <Image src={java} height={40} width={40}></Image>
                                        <Image className='ms-4' src={mongo} height={40} width={40}></Image>
                                        <Image className='ms-4' src={php} height={40} width={40}></Image>
                                        <Image className='ms-4' src={diamond} height={40} width={40}></Image>
                                        <Image className='ms-4' src={python} height={40} width={40}></Image>
                                        <Image className='ms-4' src={node} height={40} width={40}></Image>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        className='mt-14 ms-5'
                                        src={vector3} height={180} width={170}></Image>
                                </div>


                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="flex lg:ms-[120%] text-black rounded-xl px-6 pt-4   bg-[#e3e1e1] h-auto w-[40vw] overflow-hidden cursor-pointer">

                                <div className='w-[60%] '>
                                    <h1 className='text-4xl font-[550] mt-5'>Backend</h1>
                                    <p className='text-lg font-[450] mt-3'>We create a design to augment User Experience</p>
                                    <p className='text-lg font-[450]'> We analyze human behavioral patterns and blend them with information architecture to design a unique experience.</p>
                                    <h1 className='text-[22px] font-[600] mt-10'>Technologies we use</h1>
                                    <div className='flex ms-4 mt-4 mb-4'>

                                        <Image className='ms-4' src={mongo} height={40} width={40}></Image>
                                        <Image className='ms-4' src={php} height={40} width={40}></Image>
                                        <Image className='ms-4' src={diamond} height={40} width={40}></Image>
                                        <Image className='ms-4' src={python} height={40} width={40}></Image>
                                        <Image className='ms-4' src={node} height={40} width={40}></Image>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        className='mt-16 ms-5'
                                        src={vector3} height={200} width={170}></Image>
                                </div>


                            </div>
                        </SwiperSlide>

                        <SwiperSlide >

                            <div className=" lg:ms-[150%] text-black rounded-xl px-6 pt-4   bg-[#e3e1e1] h-auto w-[40vw] overflow-hidden cursor-pointer">
                                <h1 className='2xl:text-4xl xl:text-4xl lg:text-4xl font-[550] mt-5'>Project managememt</h1>
                                <div className='flex'>
                                    <div className='w-[60%] '>

                                        <p className='text-lg font-[450] mt-3'>We create a design to augment User Experience</p>
                                        <p className='text-lg font-[450]'> We analyze human behavioral patterns and blend them with information architecture to design a unique experience.</p>
                                        <h1 className='text-[22px] font-[600] xl:mt-10 lg:mt-6'>Technologies we use</h1>
                                        <div className='flex ms-4 xl:mt-4 lg:mt-3 xl:mb-6 lg:mb-4'>
                                            <Image src={zoho} height={40} width={40}></Image>
                                            <Image className='ms-4' src={wrike} height={40} width={40}></Image>
                                            <Image className='ms-4' src={sq} height={40} width={40}></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <Image
                                            className='xl:mt-20 lg:mt-24 ms-10'
                                            src={checkmark} height={200} width={170}></Image>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className=" lg:ms-[180%] text-black rounded-xl px-6 pt-4 bg-[#e3e1e1] h-auto w-[40vw] overflow-hidden cursor-pointer">
                                <h1 className='2xl:text-4xl lg:text-4xl font-[550] mt-5'>Socal media marketing</h1>
                                <div className='flex'>
                                    <div className='w-[60%] '>

                                        <p className='text-lg font-[450] mt-3'>We create a design to augment User Experience</p>
                                        <p className='text-lg font-[450]'> We analyze human behavioral patterns and blend them with information architecture to design a unique experience.</p>
                                        <h1 className='text-[22px] font-[600] mt-10'>Technologies we use</h1>
                                        <div className='flex ms-4 mt-4 mb-5'>
                                            <Image src={bird} height={40} width={40}></Image>
                                            <Image className='ms-4' src={buffer} height={40} width={40}></Image>
                                            <Image className='ms-4' src={taj} height={40} width={40}></Image>
                                        </div>
                                    </div>
                                    <div>
                                        <Image
                                            className='mt-24 ms-5'
                                            src={marketing} height={200} width={170}></Image>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="hidden sm:hidden lg:block lg:flex lg:ms-[210%]  text-black rounded-3xl px-8 pt-4  bg-[#e3e1e1] h-auto w-[40vw] overflow-hidden cursor-pointer">

                                <div className='w-[60%] '>
                                    <h1 className='text-4xl font-[550] mt-3'>Design</h1>
                                    <p className='text-lg font-[450] mt-5'>We create a design to augment User Experience</p>
                                    <p className='text-lg font-[450]'> We analyze human behavioral patterns and blend them with information architecture to design a unique experience.</p>
                                    <h1 className='text-[22px] font-[600] mt-11'>Technologies we use</h1>
                                    <div className='flex ms-4 mt-3 mb-6'>
                                        <Image src={adobe} height={40} width={40}></Image>
                                        <Image className='ms-4' src={Figma} height={40} width={40}></Image>
                                        <Image className='ms-4' src={sketch} height={40} width={40}></Image>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        className='mt-24 ms-5'
                                        src={checkmark} height={200} width={170}></Image>
                                </div>


                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="flex ms-[240%]  text-black rounded-xl px-6 pt-4   bg-[#e3e1e1] h-auto w-[40vw] overflow-hidden cursor-pointer">

                                <div className='w-[60%] '>
                                    <h1 className='text-4xl font-[550] mt-4'>Frontend</h1>
                                    <p className='text-lg font-[450] mt-4'>We create a design to augment User Experience</p>
                                    <p className='text-lg font-[450]'> We analyze human behavioral patterns and blend them with information architecture to design a unique experience.</p>
                                    <h1 className='text-[22px] font-[600] mt-8'>Technologies we use</h1>
                                    <div className='flex ms-4 mt-4 mb-4'>
                                        <Image src={html} height={40} width={40}></Image>
                                        <Image className='ms-4' src={css} height={40} width={40}></Image>
                                        <Image className='ms-4' src={js} height={40} width={40}></Image>
                                        <Image className='ms-4' src={angular} height={40} width={40}></Image>
                                        <Image className='ms-4' src={react} height={40} width={40}></Image>
                                        <Image className='ms-4' src={jk} height={40} width={40}></Image>
                                        <Image className='ms-4' src={aws} height={40} width={80}></Image>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        className='mt-20 ms-5'
                                        src={web} height={200} width={170}></Image>
                                </div>


                            </div>
                        </SwiperSlide>


                    </Swiper>

                </div>

                {/* service for mobile ciew md and sm  */}
                <ServiceRes />


                {/* work  */}
                <h1 className='text-[#ED1C24] text-[51px] mt-8 font-[600] flex justify-center'>Our work</h1>
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
                            <div className='flex rounded-[28px] bg-[#ED1C24] w-[37vw] ps-[3%] pe-[1%] ms-[15%] mt-10' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                                <div className='w-[36%] mb-20 '>
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
                                        className=' mt-24 ms-24 h-48 xl:w-[15vw] lg:w-[13vw] relative'
                                        src={image14} height={100} width={200}></Image>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex  rounded-[28px] bg-[#101942] w-[37vw] ps-[3%] pe-[1%] ms-[35%] mt-10' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                                <div className='w-[40%]  mb-12 '>
                                    <h1 className='text-white text-[34px] font-[550] mt-8'>V-sales</h1>
                                    <p className='text-white'>Business</p>
                                    <p className='text-white mt-3'>UI/UX . Web</p>
                                    <p className=' text-white text-[17px] font-[400] mt-5'>V-sales is the best for your business it saves your time & money without any technical knowledge. Simple way to Track Unlimited Sales, Profit, Stock, POS & much more.</p>


                                </div>
                                <div className='flex'>
                                    <Image
                                        className=' mt-24 ms-12  z-[1000] w-[18vw] xl:h-[24vh] lg:h-[20vh]'
                                        src={laptop1} height={100} width={170}></Image>


                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex  rounded-[28px] bg-[#ED1C24] w-[37vw] ps-[3%] pe-[1%] ms-[55%] mt-10' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                                <div className='w-[36%] mb-20 '>
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
                                        className=' mt-24 ms-24 h-48 xl:w-[15vw] lg:w-[13vw] relative'
                                        src={image14} height={100} width={200}></Image>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex  rounded-[28px] bg-[#101942] w-[37vw] ps-[3%] pe-[1%] mt-10 ms-[75%]' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
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

                        <SwiperSlide>
                            <div className='flex  rounded-[28px] bg-[#ED1C24] w-[37vw] ps-[3%] pe-[1%] ms-[95%] mt-10' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                                <div className='w-[36%] mb-20 '>
                                    <h1 className='text-white text-[34px] font-[550] mt-8'>Healthyme</h1>
                                    <p className='text-white'>Health care</p>
                                    <p className='text-white mt-3'>UI/UX</p>
                                    <p className=' text-white text-[17px] font-[400] mt-5'>Healthyme is a fitness app that offers full body workout plans with many 3D exercises for free to help you achieve your body goals.</p>


                                </div>
                                <div className='flex'>
                                    <Image
                                        className=' mt-24 ms-5 absolute z-[1000] w-[8.3vw] xl:h-[35vh] lg:h-[20vh]'
                                        src={animation1} height={200} width={170}></Image>
                                    <Image
                                        className=' mt-24 ms-24 h-48 xl:w-[15vw] lg:w-[13vw] relative'
                                        src={image14} height={100} width={200}></Image>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex  rounded-[28px] bg-[#101942] w-[37vw] ps-[3%] pe-[1%] mt-10 ms-[115%]' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
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


                {/* business  */}
                <Image className='hidden sm:hidden lg:block relative ms-10' src={anim3} height={300} width={370}></Image>
                <h1 className=' lg:absolute text-[#ED1C24] text-3xl text-center mt-8 md:text-4xl md:mt-12 md:text-center  font-[600] lg:text-5xl lg:ms-[20%] lg:me-[15%] lg:mt-[-32%] xl:mt-[-24%] 2xl:mt-[-20%]'>It s not our business, but your digital success that matters to us.</h1>
                    {/* mobile responsive image  */}
                <div className=' full mt-4 lg:hidden'>

                    <Image className='relative w-[70vw] ms-14' src={ellipse90} height={300} width={460}></Image>
                    <Image className='absolute mt-[-50%] ms-[19%] h-[20vh] w-[56vw] md:h-[33vh] md:ms-[14%] md:mt-[-52%]' src={girl} height={300} width={375}></Image>
                </div>
                <div className='flex flex-col lg:flex-row mt-6 lg:mt-[-8%]'>
                    <div className='ms-8 me-6 mt-6 lg:w-[40%] lg:ms-[20%]'>
                        <h1 className='text-xl  font-[450]'>Get in touch with our customer support team to fix an appointment with us. Meet us to brief about your requirements, expectations, desired results, and development patterns to ensure that we deliver exactly what you have dreamt about.</h1>
                        <p className='text-[20px] text-center font-[550] mt-10 '>We love Replying to Mails and Messages !</p>
                        <Image className='mt-9 flex ms-32 lg:ms-2 animate-bounce' src={catlogo} height={35} width={35}></Image>

                        <button className='text-[#ED1C24] border-2 rounded-3xl px-28 py-3   border-[#ED1C24] lg:px-10 lg:py-2 lg:rounded-xl text-xl mt-5' >Get in touch</button>
                    </div>
                    <div className='hidden sm:hidden lg:block lg:w-[35%]'>

                        <Image className='relative' src={ellipse90} height={300} width={460}></Image>
                        <Image className='absolute lg:mt-[-25%] lg:ms-[3%] lg:h-[16vh] lg:w-[28vw] xl:h-[38vh] 2xl:h-[46vh] 2xl:w-[25vw]' src={girl} height={300} width={375}></Image>
                    </div>

                </div>

                {/* last section project */}
                <div className='flex '>
                    <Image className='hidden sm:hiddem lg:block mt-[-4%]' src={component31} height={300} width={280}></Image>
                    <div>
                        <h1 className=' text-[#ED1C24] text-3xl text-center mt-10 lg:text-5xl font-[600] xl:ms-40 2xl:ms-60 lg:mt-[15%]  lg:text-center '>Have a project in mind?</h1>
                        <h1 className=' lg:text-center text-2xl text-center mt-3 lg:text-3xl lg:mt-4 font-[500]  xl:ms-40 2xl:ms-44  '>Book a call with our team</h1>
                        <h1 className=' hidden sm:hidden lg:block text-[22px] font-[450] lg:text-center xl:ms-40 2xl:ms-48  mt-2'>Schedule a 30 min consultation to discuss <br/>how we can help you grow your business .</h1>
                        <h1 className='   font-[450] text-xl ms-5 text-center me-4 lg:text-2xl lg:text-center xl:ms-40 2xl:ms-48  mt-2 lg:hidden'>Schedule a 30 min consultation to discuss how we can help you grow your business .</h1>
                    </div>
                </div>

                <div className=' flex'>
                    <div className='hidden sm:hidden lg:block lg:ms-[6%] xl:ms-[17%] 2xl:ms-[22%]'>
                        <Image className='relative' src={ellipse133} height={270} width={400}></Image>
                        <Image className='absolute mt-[-23%] ms-[3%]' src={girl1} height={200} width={310}></Image>
                    </div>
                    <div >
                        <Image className='md:absolute w-[90vw] ms-[5%] mt-10 md:mt-0 z-[1000] lg:w-[45vw] xl:w-[35vw]' src={calender} height={400} width={510}></Image>
                        <Image className='hidden sm:hidden md:block relative lg:ms-[80%] lg:mt-[-44%]' src={component14} height={300} width={440}></Image>
                    </div>
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Services
