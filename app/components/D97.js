import React from 'react'
import Image from 'next/image'
import menu1 from '../assets/Menu1.png'
import frame from '../assets/Frame.png'
import component23 from '../assets/Component23.png'
import animation1 from '../assets/animation1.png'
import image14 from '../assets/image14.png'
import laptop1 from '../assets/laptop.png'
import Footer from './Footer'
import Link from 'next/link'

const D97 = () => {
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

            <div>
                <Image
                    className='hidden sm:hidden lg:block lg:ms-[80%] lg:mt-[-9%] 2xl:ms-[84%]'
                    src={component23} height={200} width={250}></Image>
            </div>

            <h1 className=' text-[#ED1C24] font-[600] text-center text-3xl me-5  md:text-3xl lg:text-5xl   lg:mt-[-20%] xl:mt-[-17%] 2xl:mt-[-14%] '>Our work</h1>

            <h1 className=' ms-6 mt-3 lg:ms-[34%]  lg:mt-5 lg:me-[28%] text-lg font-[450]'>We work alongside leading corporates to develop mobile apps that transform their business. See some highlights from our portfolio below.</h1>

            <ul className='flex justify-evenly mt-10 lg:w-[80vw] lg:ms-[10%]'>
                <li className='border border-b-2 border-[#ED1C24] border-r-0 border-t-0 border-l-0 lg:px-3'>All</li>
                <li>Android</li>
                <li>IOS</li>
                <li>Web</li>
            </ul>

            {/* sections  */}

           
            <div className='hidden sm:hidden lg:block'>
                 {/* first section  */}
                 <div className='flex rounded-[28px] bg-[#101942]  mt-10 w-[70vw]  ps-[3%] pe-[1%] lg:ms-24 xl:ms-52' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                    <div className='w-[50%] mb-14 ms-5'>
                        <h1 className='text-white text-[34px] font-[550] mt-8'>V-sales</h1>
                        <p className='text-white mt-3'>UI/UX development  . Web development</p>
                        <p className=' text-white text-[17px] font-[400] mt-5'>V-sales is the best for your business it saves your time & money without any technical knowledge. Simple way to Track Unlimited Sales, Profit, Stock, Generate Invoice, CRM, POS & much more. Smartly designed for small-business owners and entrepreneurs. This is the most effective way to track all of your daily sales information.</p>
                        <button className='text-white border border-white lg:px-8 lg:py-1 lg:mt-5 rounded-md'>Read more</button>
                    </div>
                    <div className='flex w-[45%]'>
                        <Image
                            className=' mt-12 ms-24  z-[1000] w-[22vw] xl:h-[24vh] lg:h-[20vh]'
                            src={laptop1} height={100} width={170}></Image>

                    </div>

                </div>


                {/* second section  */}
                <div className='flex rounded-[28px] bg-[#ED1C24]  mt-10 w-[70vw]  ps-[3%] pe-[1%] lg:ms-24 xl:ms-52' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                    <div className='w-[50%] mb-14 ms-5'>
                        <h1 className='text-white text-[34px] font-[550] mt-8'>Healthyme</h1>
                        <p className='text-white mt-3'>UI/UX development</p>
                        <p className=' text-white text-[17px] font-[400] mt-5'>Healthyme is a fitness app that offers full body workout plans with many 3D exercises for free to help you achieve your body goals.</p>
                        <p className='text-white text-[17px] font-[400]'> You can choose from a variety of exercise plans targeted at specific muscle groups, such as chest workout or arm workout, or tailored for a certain goal, such as fat burning workout.</p>
                        <button className='text-white border border-white lg:px-8 lg:py-1 lg:mt-5 rounded-md'>Read more</button>
                    </div>
                    <div className='flex w-[45%]'>
                        <Image
                            className=' mt-14 ms-20  absolute z-[1000] w-[9vw] xl:mt-10 xl:h-[35vh] lg:h-[20vh]'
                            src={animation1} height={200} width={170}></Image>
                        <Image
                            className=' mt-20 ms-40 h-48 xl:w-[15vw] xl:mt-14 lg:w-[15vw] relative'
                            src={image14} height={100} width={200}></Image>

                    </div>

                </div>
                

                {/* third section  */}

                <div className='flex rounded-[28px] bg-[#101942]  mt-10 w-[70vw]  ps-[3%] pe-[1%] lg:ms-24 xl:ms-52' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
                    <div className='w-[50%] mb-14 ms-5'>
                        <h1 className='text-white text-[34px] font-[550] mt-8'>V-sales</h1>
                        <p className='text-white mt-3'>UI/UX development  . Web development</p>
                        <p className=' text-white text-[17px] font-[400] mt-5'>V-sales is the best for your business it saves your time & money without any technical knowledge. Simple way to Track Unlimited Sales, Profit, Stock, Generate Invoice, CRM, POS & much more. Smartly designed for small-business owners and entrepreneurs. This is the most effective way to track all of your daily sales information.</p>
                        <button className='text-white border border-white lg:px-8 lg:py-1 lg:mt-5 rounded-md'>Read more</button>
                    </div>
                    <div className='flex w-[45%]'>
                        <Image
                            className=' mt-12 ms-24  z-[1000] w-[22vw] xl:h-[24vh] lg:h-[20vh]'
                            src={laptop1} height={100} width={170}></Image>

                    </div>

                </div>
                

            </div>


            {/* work for mobile sm md */}

            <div className='grid grid-cols-1 md:grid-cols-2 ms-5 me-5 mt-7 h-auto w-full  lg:hidden'>
                

                <div>
                    <div className='flex mt-7 md:mt-0 bg-[#101942] w-[90vw] md:w-[45vw] rounded-t-3xl h-auto justify-center'>
                        <Image
                            className=' mt-8  z-[1000] h-[18vh] w-[70vw] mb-5 md:mb-12 md:w-[30vw] md:h-[21vh] '
                            src={laptop1} height={100} width={170}></Image>
                    </div>
                    <div className='bg-[#f0f0f0] w-[90vw] md:w-[45vw] py-5  rounded-b-3xl'>
                        <h1 className=' text-center text-lg font-[500]'>V-sales | Business | Web development</h1>
                        <p className='text-[#ED1C24] text-lg ms-6 font-semibold'>Read more</p>
                    </div>
                </div>

                <div>

                    <div className='flex bg-[#ED1C24] w-[90vw] md:w-[45vw] rounded-t-3xl  h-auto justify-center h-auto'>
                        <Image
                            className=' mt-8 ms-[-30%] md:ms-[-20%] absolute z-[1000] w-[21vw] h-[18vh]  md:w-[13vw] md:h-[23vh] '
                            src={animation1} height={200} width={170}></Image>
                        <Image
                            className=' mt-12 ms-12 h-28 mb-14  w-[37vw] md:w-[20vw] relative'
                            src={image14} height={100} width={200}></Image>
                    </div>
                    <div className='bg-[#f0f0f0] w-[90vw] md:w-[45vw] py-5  rounded-b-3xl'>
                        <h1 className=' text-center text-lg font-[500]'>Healthyme | Health care | UI/UX</h1>
                        <p className='text-[#ED1C24] text-lg ms-6 font-semibold'>Read more</p>
                    </div>
                </div>

                <div className='md:hidden'>
                    <div className='flex mt-7 md:mt-0 bg-[#101942] w-[90vw] md:w-[45vw] rounded-t-3xl h-auto justify-center'>
                        <Image
                            className=' mt-8  z-[1000] h-[18vh] w-[70vw] mb-5 md:mb-12 md:w-[30vw] md:h-[21vh] '
                            src={laptop1} height={100} width={170}></Image>
                    </div>
                    <div className='bg-[#f0f0f0] w-[90vw] md:w-[45vw] py-5  rounded-b-3xl'>
                        <h1 className=' text-center text-lg font-[500]'>V-sales | Business | Web development</h1>
                        <p className='text-[#ED1C24] text-lg ms-6 font-semibold'>Read more</p>
                    </div>
                </div>

                <div>

                    <div className='flex bg-[#ED1C24] mt-8 w-[90vw] md:w-[45vw] rounded-t-3xl  h-auto justify-center md:hidden'>
                        <Image
                            className=' mt-8 ms-[-30%] md:ms-[-20%] absolute z-[1000] w-[21vw] h-[18vh] md:w-[13vw] md:h-[23vh] '
                            src={animation1} height={200} width={170}></Image>
                        <Image
                            className=' mt-12 ms-12 h-28 mb-14  w-[37vw] md:w-[20vw] relative'
                            src={image14} height={100} width={200}></Image>
                    </div>
                    <div className='bg-[#f0f0f0] w-[90vw] md:w-[45vw] py-5  rounded-b-3xl md:hidden'>
                        <h1 className=' text-center text-lg font-[500]'>Healthyme | Health care | UI/UX</h1>
                        <p className='text-[#ED1C24] text-lg ms-6 font-semibold'>Read more</p>
                    </div>
                </div>



            </div>

            {/* footer  */}

            <Footer />
    </>
  )
}

export default D97