import React from 'react'
import Image from 'next/image';
import menu1 from '../assets/Menu1.png'
import frame from '../assets/Frame.png'
import component8 from '../assets/Component8.png'
import catlogo from '../assets/catlogo.png'
import Footer from './Footer';
import Link from 'next/link';

const Frontend = () => {
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

            {/* frontend  */}
            <div className='flex justify-end mt-[-15%] '>
                <Image className='hidden sm:hidden lg:block ' src={component8} height={200} width={340}></Image>
            </div>

            <div className='lg:ms-[15%]'>
                <h1 className=' mt-14 md:mt-28 md:ms-24 text-2xl ms-5 text-[#ED1C24] lg:text-3xl font-semibold  lg:mt-[-22%] 2xl:mt-[-16%]'>Frontend Developer - NodeJS, ReactJS</h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 w-[70vw] lg:w-[60vw] mx-auto mt-5'>
                <h1 className='text-[#909090]'>Posted on 29 August ,2022</h1>
                <h1 className=' text-[#909090] lg:ms-[-30%]'>Share : <i class="fa-brands fa-linkedin-in"></i> <span className='ms-2'> <i class="fa-brands fa-facebook-f"></i></span></h1>
            </div>

            <div className='grid grid-cols-1 w-[80vw] lg:grid-cols-2 lg:w-[60vw] justify-between mx-auto mt-6'>
                <div className='lg:w-[23vw]'>
                    <h1 className='text-[#ED1C24] text-lg font-semibold'>Desired Candidate Profile</h1>

                    <li className='mt-5 text-lg'>UG/ MBA / MHRM with 0 to 2 years of experience</li>
                    <li className='mt-5 text-lg'>Preference will be given to candidates with previous experience in ITeS sector</li>
                    <li className='mt-5 text-lg'>Preference will be given to candidates with relevant experience from the same locality or the candidates must be willing to relocate</li>
                    <li className='mt-5 text-lg'>Preference will be given to candidates who can join immediately</li>


                </div>
                <div className='lg:w-[23vw] mt-6 lg:mt-0'>
                    <h1 className='text-[#ED1C24]  text-lg font-semibold'>Must have</h1>
                    <li className='mt-5 text-lg'>Complete understanding of ReactJS and its main fundamentals like JSX, Virtual DOM, component lifecycle, etc.</li>
                    <li className='mt-5 text-lg'>Preceding experience with ReactJS workflows like Flux, Redux, Create React App, data structure libraries</li>
                    <li className='mt-5 text-lg'>In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.</li>
                    <li className='mt-5 text-lg'>Enjoys coding and problem solving</li>
                </div>
            </div>


            {/* responsibilities section  */}
            <div className='flex flex-col lg:flex-row justify-between mx-auto overflow-hidden'>
                <div className='hidden sm:hidden lg:block '>
                    <Image src={component8} height={200} width={300}></Image>
                </div>

                <div className='ms-10 lg:ms-0 w-[80vw] lg:w-[60vw]  mt-20'>

                    <h1 className=' lg:ms-0 text-[#ED1C24] text-lg font-semibold'>Responsibilities</h1>

                    <li className='mt-9 text-lg'>Actively involve in application development, code reviews and architecture and design discussions.</li>
                    <li className='mt-5 text-lg'>Design and implement functional requirements in React tools.</li>
                    <li className='mt-5 text-lg'>Develop and implement highly responsive user interface components using react concepts.</li>
                    <li className='mt-5 text-lg'>Manage testing and bug fixes</li>
                    <li className='mt-5 text-lg'>Prepare technical documentation.</li>
                    <li className='mt-5 text-lg'>Implement software enhancements and suggest improvements.</li>
                    <li className='mt-5 text-lg'> Working closely with Backend Developers.</li>

                </div>

                <div className='hidden sm:hidden lg:block'>
                    <Image
                        className='rotate-[-90deg]'
                        src={component8} height={200} width={300}></Image>
                </div>

            </div>

            {/* apply  */}
            <div className='flex justify-between mt-10 w-[90vw] mx-auto lg:mt-32'>
                <div>
                    <Image
                        className='hidden sm:hidden lg:block rotate-[-40deg] mt-20'
                        src={component8} height={200} width={300}></Image>
                </div>
                <div>
                    <div className='lg:w-[40vw]'>
                        <h1 className='text-[#ED1C24] font-semibold lg:text-3xl tex-center lg:ms-32 2xl:ms-48'>Apply now</h1>
                       
                        <form className='mt-14'>
                            <div>
                                <input
                                    className='border border-black hover:border-[#ED1C24] border-b-2 border-t-0 border-l-0 border-r-0 w-[90%] pb-2 text-xl ps-6'
                                    type='text' placeholder='Name' />
                            </div>

                            <div className='mt-7'>
                                <input
                                    className='border border-black hover:border-[#ED1C24] border-b-2 border-t-0 border-l-0 border-r-0 w-[90%]  pb-2 text-xl ps-6'
                                    type='text' placeholder='Email' />
                            </div>

                            <div className='mt-7'>
                                <input
                                    className='border border-black hover:border-[#ED1C24] border-b-2 border-t-0 border-l-0 border-r-0 w-[90%] pb-2 text-xl ps-6'
                                    type='text' placeholder='Contact number' />
                            </div>

                            <div className='mt-7'>
                                <input
                                    className='border border-black hover:border-[#ED1C24] border-b-2 border-t-0 border-l-0 border-r-0 w-[90%] pb-2 text-xl ps-6'
                                    type='text' placeholder='Choose filed' />
                            </div>

                            <div className='mt-7'>
                                <input
                                    className='border border-black hover:border-[#ED1C24] border-b-2 border-t-0 border-l-0 border-r-0 w-[90%] pb-2 text-xl ps-6'
                                    type='text' placeholder='Upload CV' />
                            </div>

                            <Image
                                className='mt-10 animate-bounce'
                                src={catlogo} height={50} width={50}></Image>

                            <button className='text-[#ED1C24]  border rounded-lg border-[#ED1C24] px-14 py-2 mt-5 hover:bg-[#ED1C24] hover:text-white'>Submit</button>

                        </form>
                    </div>
                </div>

                <div>
                    <Image
                        className='hidden sm:hidden lg:block rotate-[-40deg] '
                        src={component8} height={200} width={300}></Image>


                </div>
            </div>

            {/* footer  */}

            <Footer/>
        </>
    )
}

export default Frontend