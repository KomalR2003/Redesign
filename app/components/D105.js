import React from 'react';
import styles from '@/app/styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import catLogo from '../assets/catlogo.png'
import ellipse from '../assets/Ellipse86.png'
import frame from '../assets/Frame.png'
import anim from '../assets/anim.png'
import anim2 from '../assets/anim2.png'
import imag1 from '../assets/imag1.png'
import imag2 from '../assets/imag2.png'
import imag3 from '../assets/imag3.png'
import elipse64 from '../assets/Ellipse64.png'
import elipse6 from '../assets/Ellipse6.png'
import menu from '../assets/menu.png'
import component8 from '../assets/Component8.png'
import component11 from '../assets/Component11.png'
import component12 from '../assets/Component12.png'

const D105 = () => {
    return (
        <>

           {/* top part logo and menu icon */}
           <div className='flex justify-between '>
                {/* logo  */}
                <div className='mt-7 ms-12 md:ms-24 '>
                    <Image src={frame} height={650} width={150}></Image>
                </div>
                {/* menu icon */}
                <div className='mt-8 '>
                    <Link href='/menu'>
                        <Image className='me-7 md:me-12' src={menu} width={40} height={40} ></Image>
                    </Link>
                </div>
            </div>


            {/* bottm left and right for desktop  */}

            <div className='flex flex-col md:flex md:flex-row '>

                {/* left part for desktop view  */}
                <div className='w-12/12 md:w-5/12  '>

                    <div className='flex md:flex  '>
                        <div className='flex mt-24 md:flex md:mt-12'>
                            <Image className='relative h-[40vh] w-[60vw] md:h-[65vh] md:w-[50vw] 2xl:w-[25vw] xl:w-[30vw] lg:w-[35vw] ' src={anim} height={430} width={430}></Image>
                            <Image
                                className=' absolute mt-10 h-[30vh] w-[54vw] md:mt-[7vh] md:h-[53vh] md:w-[33vw] 2xl:w-[20vw] xl:w-[26vw] lg:w-[30vw]'
                                src={ellipse} height={570} width={390}></Image>

                        </div>

                        <div className='absolute ms-20 mt-20 md:ms-[12%] md:mt-32 '>
                            <h1 className='text-2xl capitalize font-semibold md:uppercase md:text-4xl'>ENABLE YOUR</h1>
                            <h1 className='text-[#ED1C24] text-3xl mt-2 font-semibold md:text-4xl md:mt-4'>COMPANY S DIGITAL</h1>
                            <h1 className='text-[#ED1C24] text-3xl mt-2 font-semibold md:text-4xl md:mt-4'>TRANSFORMATION</h1>
                            <p className='text-lg font-[500] mt-3 md:text-2xl md:mt-5'>...through our high calibre  and holistic <br /> technology solutions</p>
                            <button className='text-[#ED1C24] font-[500] text-xl border border-red-500 mt-28 px-10 py-3 rounded-xl sm:block hidden '>Read more</button>
                        </div>
                    </div>


                </div>

                 {/* dot icon for mobile responsive */}

                 <div className='flex flex-row justify-center 2xl:hidden xl:hidden lg:hidden md:hidden '>
                        <Link href='/main'><h1 className='h-3 w-3  bg-black rounded-full'></h1>  </Link>
                        <Link href='/d103'><h1 className='h-3 w-3 ms-3 bg-gray-400 rounded-full'></h1>  </Link>
                        <Link href='/d105'><h1 className='h-3 w-3 ms-3 bg-gray-400 rounded-full'></h1>  </Link>
                    </div>

                {/* right part laptop view */}
                <div className='flex flex-row w-12/12 md:flex md:flex-row md:w-7/12 md:ms-24'>
                    <div className='flex flex-col '>
                        {/* top image for laptop */}

                        <div className='flex ms-8 md:ms-24 2xl:ms-10 xl:ms-10 lg:ms-10'>
                            <Image className='relative  h-[30vh] w-[40vw]  md:h-[40vh] md:w-[18vw] 2xl:w-[16vw] xl:w[16vw] lg:w-[19vw] '
                                src={component8} height={300} width={280}></Image>

                            <Image
                                className='absolute h-[18vh] w-[25vw] ms-6 mt-10 md:h-[23vh] md:w-[11vw] md:ms-9 2xl:ms-12 xl:ms-12 md:mt-14 2xl:w-[10vw] xl:w-[11vw] lg:w-[12vw]'
                                src={imag1} height={300} width={170}></Image>

                        </div>
                        {/* bottom image for laptop */}

                        <div className=' flex ms-8 md:ms-24 2xl:ms-10 xl:ms-10 lg:ms-10'>
                            <Image className=' relative h-[30vh] w-[40vw] md:h-[40vh] md:w-[18vw] 2xl:w-[16vw] xl:w[16vw] lg:w-[19vw]  '
                                src={component8} height={300} width={280}></Image>
                            <Image
                                className='absolute h-[18vh] w-[25vw] ms-6 mt-10 md:h-[23vh] md:w-[11vw] md:ms-9 2xl:ms-12 xl:ms-12 md:mt-14 2xl:w-[10vw] xl:w-[11vw] lg:w-[12vw] '
                                src={imag3} height={120} width={170}></Image>
                        </div>
                    </div>

                    {/* right image for laptop  */}

                    <div className='flex ms-8 mt-28 md:ms-18 md:mt-32 2xl:ms-8 xl:ms-8 lg:ms-8'>
                        <Image className=' relative h-[30vh] w-[40vw]  md:h-[40vh] md:w-[18vw] 2xl:w-[16vw] xl:w[16vw] lg:w-[19vw]  '
                            src={component8} height={300} width={280}></Image>
                        <Image
                            className='absolute h-[18vh] w-[25vw] ms-6 mt-10 md:h-[23vh] md:w-[11vw] md:ms-9 2xl:ms-12 xl:ms-12 md:mt-14 2xl:w-[10vw] xl:w-[11vw] lg:w-[12vw]'
                            src={imag2} height={120} width={170}></Image>
                    </div>

                    {/* dot icon for desktop */}

                    <div className='hidden 2xl:flex ms-20 mt-48 flex-col lg:flex xl:flex '>
                        <Link href='/main'><h1 className='h-3 w-3 bg-gray-400 rounded-full'></h1>  </Link>
                        <Link href='/d103'><h1 className='h-3 w-3 mt-3 lg:mt-3 xl:mt-3 bg-gray-400  rounded-full'></h1>  </Link>
                        <Link href='/d105'><h1 className='h-3 w-3 mt-3 lg:mt-3 xl:mt-3 bg-black  rounded-full'></h1>  </Link>
                    </div>

                </div>
            </div>


           


            <div className='flex w-12/12 justify-center mb-10 animate-bounce'>
                <Image src={catLogo} height={40} width={50}></Image>
            </div>
 



        </>
    )
}

export default D105