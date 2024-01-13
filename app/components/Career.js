import React from 'react'
import Image from 'next/image';
import menu1 from '../assets/Menu1.png'
import frame from '../assets/Frame.png'
import component8 from '../assets/Component8.png'
import grp159 from '../assets/Group159.png'
import grp157 from '../assets/Group157.png'
import grp227 from '../assets/Group227.png'
import webb from '../assets/Webb.png'
import vector from '../assets/Vector.png'
import catlogo from '../assets/catlogo.png'
import Footer from './Footer';
import Link from 'next/link';

const Career = () => {
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


            {/* join  */}
            <h1 className='text-[#ED1C24] text-3xl ms-14 lg:text-5xl font-semibold  lg:ms-[30%] xl:me-[20%] 2xl:me-[25%] lg:mt-[-3%]'>Join our team and create clever things with us !</h1>
            <div className='flex flex-col-reverse lg:flex-row w-full'>
                <div className='flex lg:w-[50%]'>
                    <Image
                        className='hidden sm:hidden lg:block lg:rotate-[-30deg] lg:ms-[5%] lg:h-[30vh] xl:h-[50vh] '
                        src={component8} height={200} width={430}></Image>
                    <h1 className='ms-7 lg:ms-[-25%] xl:ms-[-10%] lg:mt-20 font-semibold text-lg xl:mt-20 2xl:mt-20 2xl:me-[12%]'>Work with a team of smart and self-driven people. We are on a lookout for great talents. Game changers, action takers, open-minded people simply who care for what they do and embrace the bond of this squad.</h1>
                </div>
                <div className='lg:w-[40%] ms-10 md:ms-20 lg:ms-[15%]'>
                    <Image
                        className='h-[30vh] w-[80vw] md:h-[50vh] lg:h-[30vh] xl:h-[55vh] xl:w-[80%] 2xl:h-[65vh] 2xl:w-[80%] xl:mt-[-10%]'
                        src={grp159} height={200} width={400}></Image>
                </div>
            </div>

            {/* openings  */}

            <h1 className='text-[#ED1C24] text-2xl text-center mt-4 lg:text-5xl font-[500]'>Current Openings</h1>
            <Image
                className='hidden sm:hidden lg:block  z-0 lg:mt-[10%] rotate-[-30deg]'
                src={component8} height={200} width={360}></Image>

            <div className='lg:mt-[-50%]  xl:mt-[-40%] 2xl:mt-[-35%] z-50'>
                <Link href='/frontend'>
                <div className='mt-10 '>
                    <div className='flex flex-col md:flex-row bg-[#F2F2F2] w-[90vw] ms-4 ps-7 py-3 md:ps-8 md:ms-10 md:py-5 md: rounded-[30px] h-auto lg:w-[80%] lg:ms-[10%] lg:ps-16 lg:py-6'>
                        <div className='flex'>
                            <div>
                                <Image
                                    className='h-[4vh] w-[6vw] lg:h-auto lg:w-auto md:mt-4 lg:mt-0'
                                    src={webb} height={40} width={50}></Image>
                            </div>
                            <div>
                                <h1 className='text-[#ED1C24] md:text-2xl font-[500] ms-5 md:ms-5 md:w-[50vw] 2xl:w-[40vw] lg:w-auto lg:ms-3 2xl:ms-6' >Frontend Developer - NodeJS, ReactJS</h1>
                                <h1 className='text-[#909090] ms-5 text-sm md:ms-5 lg:ms-3 2xl:ms-6'>(0 years - 2 years)</h1>
                            </div>
                        </div>

                        <div>
                            <button className='text-[#ED1C24] ms-10 lg:border lg:rounded-lg border-[#ED1C24] md:px-4 md:py-2 md:ms-8 md:mt-4 lg:px-4 lg:mt-2 lg:py-2 2xl:px-10 lg:ms-20 xl:ms-72 2xl:ms-60'>Know more</button>
                        </div>
                    </div>
                </div>
                </Link>

                <div className='mt-4'>
                    <div className='flex flex-col md:flex-row z-50 bg-[#F2F2F2] w-[90vw] ms-4 ps-7 py-3 md:ps-8 md:ms-10 md:py-5 md: rounded-[30px] h-auto lg:w-[80%] lg:ms-[10%] lg:ps-16 lg:py-6'>
                        <div className='flex'>
                            <div>
                                <Image
                                    className='h-[4vh] w-[6vw] lg:h-auto lg:w-auto md:mt-4 lg:mt-0'
                                    src={vector} height={40} width={50}></Image>
                            </div>
                            <div>
                                <h1 className='text-[#ED1C24] md:text-2xl font-[500] ms-5 md:ms-5 md:w-[50vw] 2xl:w-[40vw] lg:w-auto lg:ms-3 2xl:ms-6' >UI/UX designer - Figma, Adobe Xd</h1>
                                <h1 className='text-[#909090] ms-5 text-sm md:ms-5 lg:ms-3 2xl:ms-6'>(0 years to 3 years)</h1>
                            </div>
                        </div>

                        <div>
                            <button className='text-[#ED1C24] ms-10 lg:border lg:rounded-lg border-[#ED1C24] md:px-4 md:py-2 md:ms-8 md:mt-4 lg:px-4 lg:mt-2 lg:py-2 2xl:px-10 lg:ms-20 xl:ms-72 2xl:ms-60'>Know more</button>
                        </div>
                    </div>
                </div>

                <div className='mt-4 '>
                    <div className='flex flex-col md:flex-row bg-[#F2F2F2] w-[90vw] ms-4 ps-7 py-3 md:ps-8 md:ms-10 md:py-5 md: rounded-[30px] h-auto lg:w-[80%] lg:ms-[10%] lg:ps-16 lg:py-6'>
                        <div className='flex'>
                            <div>
                                <Image
                                    className='h-[4vh] w-[6vw] lg:h-auto lg:w-auto md:mt-4 lg:mt-0'
                                    src={webb} height={40} width={50}></Image>
                            </div>
                            <div>
                                <h1 className='text-[#ED1C24] md:text-2xl font-[500] ms-5 md:ms-5 md:w-[50vw] 2xl:w-[40vw] lg:w-auto lg:ms-3 2xl:ms-6' >Frontend Developer - NodeJS, ReactJS</h1>
                                <h1 className='text-[#909090] ms-5 text-sm md:ms-5 lg:ms-3 2xl:ms-6'>(0 years - 2 years)</h1>
                            </div>
                        </div>

                        <div>
                            <button className='text-[#ED1C24] ms-10 lg:border lg:rounded-lg border-[#ED1C24] md:px-4 md:py-2 md:ms-8 md:mt-4 lg:px-4 lg:mt-2 lg:py-2 2xl:px-10 lg:ms-20 xl:ms-72 2xl:ms-60'>Know more</button>
                        </div>
                    </div>
                </div>

                <div className='mt-4 '>
                    <div className='flex flex-col md:flex-row bg-[#F2F2F2] w-[90vw] ms-4 ps-7 py-3 md:ps-8 md:ms-10 md:py-5 md: rounded-[30px] h-auto lg:w-[80%] lg:ms-[10%] lg:ps-16 lg:py-6'>
                        <div className='flex'>
                            <div>
                                <Image
                                    className='h-[4vh] w-[6vw] lg:h-auto lg:w-auto md:mt-4 lg:mt-0'
                                    src={vector} height={40} width={50}></Image>
                            </div>
                            <div>
                                <h1 className='text-[#ED1C24] md:text-2xl font-[500] ms-5 md:ms-5 md:w-[50vw] 2xl:w-[40vw] lg:w-auto lg:ms-3 2xl:ms-6' >UI/UX designer - Figma, Adobe Xd</h1>
                                <h1 className='text-[#909090] ms-5 text-sm md:ms-5 lg:ms-3 2xl:ms-6'>(0 years to 3 years)</h1>
                            </div>
                        </div>

                        <div>
                            <button className='text-[#ED1C24] ms-10 lg:border lg:rounded-lg border-[#ED1C24] md:px-4 md:py-2 md:ms-8 md:mt-4 lg:px-4 lg:mt-2 lg:py-2 2xl:px-10 lg:ms-20 xl:ms-72 2xl:ms-60'>Know more</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* process  */}
            <div className='overflow-x-hidden overflow-y-hidden'>

                <Image
                    className='hidden sm:hidden lg:block rotate-[-80deg] lg:ms-[-8%]'
                    src={component8} height={200} width={350}></Image>

                <h1 className='text-[#ED1C24] text-2xl lg:text-4xl font-semibold  text-center mt-12 lg:mt-[-25%] xl:mt-[-16%]'>Our recruitment process</h1>

                <Image
                    className='hidden sm:hidden lg:block lg:ms-20 xl:ms-72 lg:mt-12 2xl:ms-[25%]'
                    src={grp157} height={300} width={800}></Image>

                <Image
                    className='ms-12 mt-5 md:ms-52 lg:hidden'
                    src={grp227} height={300} width={300}></Image>

                <Image
                    className=' hidden sm:hidden lg:block rotate-[-210deg] lg:ms-[75vw] lg:mt-[-15%]'
                    src={component8} height={200} width={330}></Image>

            </div>

            {/* role  */}
            <div className='flex justify-between w-[90vw] mx-auto'>
                <div>
                    <Image
                        className='hidden sm:hidden lg:block rotate-[-40deg] mt-20'
                        src={component8} height={200} width={300}></Image>
                </div>
                <div>
                    <div className=' lg:mt-[-6%]'>
                        <h1 className='text-[#ED1C24] font-semibold lg:text-3xl '>Cant find your role?</h1>
                        <p className=' font-semibold lg:text-xl mt-4'>We are always looking for great people <br />who can contribute to our overall growth.</p>
                        <p className=' font-semibold lg:text-xl'>Simply send us your CV!</p>

                        <form className='mt-10'>
                            <div>
                            <input
                                className='border border-black hover:border-[#ED1C24] border-b-2 border-t-0 border-l-0 border-r-0 w-[90%] pb-2 text-xl ps-6'
                                type='text' placeholder='Name' />
                            </div>

                            <div className='mt-5'>
                            <input
                                className='border border-black hover:border-[#ED1C24] border-b-2 border-t-0 border-l-0 border-r-0 w-[90%]  pb-2 text-xl ps-6'
                                type='text' placeholder='Email' />
                            </div>

                            <div className='mt-5'>
                            <input
                                className='border border-black hover:border-[#ED1C24] border-b-2 border-t-0 border-l-0 border-r-0 w-[90%] pb-2 text-xl ps-6'
                                type='text' placeholder='Contact number' />
                            </div>

                            <div className='mt-5'>
                            <input
                                className='border border-black hover:border-[#ED1C24] border-b-2 border-t-0 border-l-0 border-r-0 w-[90%] pb-2 text-xl ps-6'
                                type='text' placeholder='Choose filed' />
                            </div>

                            <div className='mt-5'>
                            <input
                                className='border border-black hover:border-[#ED1C24] border-b-2 border-t-0 border-l-0 border-r-0 w-[90%] pb-2 text-xl ps-6'
                                type='text' placeholder='Upload CV' />
                            </div>

                            <Image
                             className='mt-10 animate-bounce'
                             src={catlogo} height={50} width={50}></Image>

<button className='text-[#ED1C24]  border rounded-lg border-[#ED1C24] px-14 py-2 mt-5'>Send</button>
                           
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

export default Career