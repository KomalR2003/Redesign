import React from 'react'
import Image from 'next/image'
import menu1 from '../assets/Menu1.png'
import frame from '../assets/Frame.png'
import calls from '../assets/Calls.png'
import mails from '../assets/mails.png'
import component8 from '../assets/Component8.png'
import component77 from '../assets/Component77.png'
import component79 from '../assets/Component79.png'
import india from '../assets/India.png'
import uk from '../assets/Uk.png'
import ellipse133 from '../assets/Ellipse133.png'
import connect from '../assets/Connect.png'
import catlogo from '../assets/catlogo.png'
import map from '../assets/Map.png'
import map1 from '../assets/Map1.png'
import Footer from './Footer'
import Link from 'next/link'

const Contact = () => {
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

            {/* main heading  */}

            <h1 className='text-[#ED1C24] font-[600] ms-14 text-3xl me-5 md:ms-36 md:text-3xl lg:text-5xl lg:ms-48 lg:mt-3 xl:mt-[-3%] xl:ms-[27%]'>We like connecting with people</h1>

            <h1 className=' font-[500] ms-9 mt-4 me-6 md:ms-12 md:mt-4 md:text-xl lg:text-2xl xl:z-[1500] xl:text-xl lg:me-16 lg:ms-48 lg:mt-8  xl:ms-[27%] xl:me-36 2xl:me-72'>Meet us to brief about your requirements, expectations, desired results, and development patterns to ensure that we deliver exactly what you have dreamt about.</h1>

            {/* first section  */}

            <div className='flex flex-col-reverse lg:flex-row'>
                <div className='flex'>
                    <Image className=' ms-[-12%] md:ms-1 xl:ms-20 2xl:ms-36 xl:mt-[-13%]' src={component8} height={300} width={340}></Image>

                    <div>
                        <div className='flex ms-[-45%] mt-8 md:ms-[-30%] md:mt-24 lg:ms-[-60%] xl:ms-[-30%] 2xl:ms-[-30%] lg:mt-16 xl:mt-12 '>
                            <Image
                             className='h-fit'
                             src={mails} height={50} width={65}></Image>
                            <div className='ms-6'>
                                <h1 className='md:text-2xl text-[#ED1C24] font-semibold'>Email us</h1>
                                <h1 className='md:text-xl lg:text-sm font-[500]'>info@felixtechlabs.com</h1>
                                <h1 className='md:text-xl lg:text-sm font-[500]'>careers@felixtechlabs.com</h1>
                            </div>
                        </div>
                        <div className='flex ms-[-45%] mt-5 md:ms-[-30%] md:mt-10 lg:ms-[-60%] xl:ms-[-30%] 2xl:ms-[-30%] lg:mt-14 xl:mt-10 2xl:mt-9'>
                            <Image 
                            className='h-fit'
                            src={calls} height={50} width={65}></Image>
                            <div className='ms-6'>
                                <h1 className='md:text-2xl text-[#ED1C24] font-semibold'>Call us</h1>
                                <div className='flex'>
                                    <Image src={india} height={15} width={18}></Image>
                                    <h1 className='md:text-xl lg:text-sm font-[500] ms-2'> +91 20 652 66070 </h1>
                                </div>
                                <div className='flex mt-1'>
                                    <Image src={uk} height={15} width={18}></Image>
                                    <h1 className='md:text-xl lg:text-sm font-[500] ms-2'> +44 7700 900549</h1>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex ms-10 mt-6 md:ms-44 lg:ms-2 xl:ms-24 md:mt-8 lg:mt-12 2xl:mt-9 2xl:ms-44 '>
                    <Image
                        className='relative w-[75vw] h-[23vh] md:w-[60vw] md:h-[28vh]  lg:h-[20vh] lg:w-[35vw] xl:h-[28vh] xl:w-[24vw] 2xl:h-[38vh] 2xl:w-[27vw]'
                        src={ellipse133} height={200} width={370}></Image>
                    <Image
                        className='absolute w-[60vw] ms-8  mt-[-2%] md:w-[50vw] md:ms-10 md:mt-[-3%] lg:ms-8 lg:h-[15vh] lg:w-[30vw] lg:mt-[-3%] xl:h-[23vh] xl:ms-5 xl:w-[22vw] xl:mt-[-2%] 2xl:mt-[-1%] 2xl:h-[30vh] 2xl:w-[22vw]'
                        src={connect} height={170} width={270}></Image>
                </div>
            </div>


            {/* join our team  */}

            <div className=' hidden sm:hidden md:block md:flex'>
                <Image
                    className='md:ms-[25%] lg:ms-[30%]'
                    src={component77} height={240} width={420}></Image>
                <div className='md:mt-20 lg:mt-32'>
                    <h1 className='text-3xl font-[500] md:ms-[-90%]  uppercase  lg:ms-[-90%]'>Want to join our team ?</h1>
                    <h1 className='text-3xl font-[450]  md:mt-10 lg:mt-6 md:ms-[-80%]  lg:ms-[-80%] xl:mt-12'>Send us your CV!  <i className="fa-solid fa-arrow-right ms-6"></i></h1>
                </div>
            </div>

            {/* for mobile device  */}
            <div className='text-center  mt-6 md:hidden '>
                <h1 className=' text-[#101942] text-2xl font-[500] uppercase  '>Want to join our team ?</h1>
                <h1 className='text-xl font-[450] mt-7 '>Send us your CV!  <i className="fa-solid fa-arrow-right ms-6"></i></h1>
            </div>


            {/* form  */}

            <div className='flex'>
                <div className='relative lg:ms-[-4%] lg:mt-48'>
                    <Image src={component77} height={200} width={300}></Image>
                </div>

                <div className=' absolute bg-[#FAFAFA] h-auto w-[88vw] ms-6 mt-10 lg:mt-0 lg:w-[80vw] lg:ms-24 mb-10 rounded-[25px]' style={{ boxShadow: '0px 8px 8px 0px rgba(237, 28, 36, 0.10)' }}>
                    <h1 className='text-[#ED1C24] font-[450] ms-5 text-2xl lg:text-3xl lg:ms-20 lg:mt-0'>We d love to hear from you!</h1>

                    <div className='flex flex-col lg:flex-row  w-full'>
                        <div className='ms-5 lg:ms-20 lg:w-[45%]'>
                            <input
                                className='border border-[#5F5F5F] rounded-[8px] mt-5 px-5 py-2 w-[80vw] lg:mt-6 lg:py-1  lg:w-[90%]'
                                type='text' placeholder='Name' />
                            <br />

                            <input
                                className='border border-[#5F5F5F] rounded-[8px] mt-5 px-5 py-2 w-[80vw] lg:mt-6 lg:py-1 lg:w-[90%]  '
                                type='text' placeholder='Email' />
                            <br />

                            <input
                                className='border border-[#5F5F5F] rounded-[8px] mt-5 px-5  py-2 w-[80vw] lg:mt-6 lg:py-1 lg:w-[90%]'
                                type='text' placeholder='Contact number' />
                        </div>

                        <div className='mt-5 ms-5 lg:ms-3 lg:mt-0 lg:w-[45%]'>
                            <textarea
                                className='border border-[#5F5F5F] rounded-[8px] w-[80vw] h-[15vh] px-5 pt-3 lg:mt-6 lg:py-1 lg:w-[90%] lg:h-[85%]'
                                placeholder='Message'
                            />
                        </div>
                    </div>


                    <div className='flex w-full'>
                        <div className=' lg:w-[45%]'>
                            <Image
                                className='ms-40 mt-5 lg:ms-24 lg:mt-10'
                                src={catlogo} height={40} width={40}></Image>
                            <button className=' py-1 px-20 mt-5 ms-20 mb-10 lg:ms-24 lg:px-16 rounded-lg lg:mt-5 lg:mb-16 border border-[#ED1C24] '>send</button>
                        </div>

                        <div className='hidden sm:hidden lg:block lg:ms-24 lg:mt-10 lg:w-[45%]'>
                            <h1 className='text-lg font-[450] text-[#ED1C24] lg:me-12'>Lorem ipsum dolor sit amet. Rem provident enim sed assumenda eligendi non galisum cupiditate.</h1>
                        </div>
                    </div>
                </div>
            </div>


            {/* location  */}

            <h1 className='text-[#ED1C24] text-3xl font-[500] mt-72 ms-12 lg:mt-0 lg:ms-32'>Locations</h1>

            {/* pune  */}

            <div className='flex mt-20 lg:mt-10'>
                <div className='hidden sm:hidden lg:block relative lg:ms-[80%] lg:mt-[-15%]'>
                    <Image src={component79} height={200} width={400}></Image>
                </div>

                <div className='flex flex-col w-[85vw] ms-7 lg:flex-row  rounded-[10px] lg:absolute border border-[#5F5F5F] h-auto  lg:rounded-[30px] lg:w-[80vw] lg:ms-32 '>
                    <div className='mt-6 ms-10 lg:mt-24 lg:ms-16 lg:w-[45%] lg:mb-24'>
                        <div className='flex '>
                            <i className="fa-solid fa-location-dot text-3xl lg:text-5xl text-[#ED1C24]"></i>
                            <h1 className='text-3xl font-[500] text-[#ED1C24] ms-4'>Pune Office</h1>
                        </div>

                        <h1 className=' text-xl mt-4 lg:text-2xl font-[500] lg:mt-6 2xl:me-24'>New Airport Road, Mhada Colony, Viman Nagar, Pune</h1>

                        <div className='flex lg:mt-7'>
                            <i className="fa-solid fa-phone text-2xl mt-4 lg:mt-0 lg:text-4xl text-[#ED1C24]"></i>
                            <h1 className='text-xl mt-4 lg:text-2xl font-[500]  ms-4'>+91 20 652 66070</h1>
                        </div>
                    </div>

                    <div className='flex  lg:w-[45%] '>
                        <Image
                            className='w-[76vw] ms-4 mt-5 mb-6 lg:mb-0 lg:w-[85%] lg:h-[83%] lg:ms-12 lg:mt-10'
                            src={map} height={200} width={200}></Image>
                    </div>
                </div>
            </div>

            {/* london  */}
            <div className='flex flex-col w-[85vw] ms-7 mt-8 lg:flex-row  rounded-[10px] border border-[#5F5F5F] h-auto lg:rounded-[30px] lg:w-[80vw] lg:ms-32 lg:mt-[30%] xl:mt-[20%] 2xl:mt-[15%]'>
                <div className='mt-6 ms-10 lg:mt-24 lg:ms-16 lg:w-[45%] lg:mb-24'>
                    <div className='flex '>
                        <i className="fa-solid fa-location-dot text-3xl lg:text-5xl text-[#ED1C24]"></i>
                        <h1 className='text-3xl font-[500] text-[#ED1C24] ms-4'>London Office</h1>
                    </div>

                    <h1 className='text-xl mt-4 lg:text-2xl font-[500] lg:mt-6 2xl:me-24'>571 Queens Road<br /> London</h1>

                    <div className='flex lg:mt-7'>
                        <i className="fa-solid fa-phone text-2xl mt-4 lg:mt-0 lg:text-4xl text-[#ED1C24]"></i>
                        <h1 className='text-xl mt-4 lg:text-2xl font-[500]  ms-4'>020 3551 8456</h1>
                    </div>
                </div>

                <div className='flex lg:w-[45%] '>
                    <Image
                        className='w-[76vw] ms-4 mt-5 mb-6 lg:mb-0 lg:w-[85%] lg:h-[83%] lg:ms-12 lg:mt-10'
                        src={map1} height={200} width={200}></Image>
                </div>
            </div>

            {/* footer  */}

            <Footer/>


        </>
    )
}

export default Contact