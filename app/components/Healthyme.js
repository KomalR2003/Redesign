import React from 'react'
import Image from 'next/image'
import menu1 from '../assets/Menu1.png'
import frame from '../assets/Frame.png'
import images1 from '../assets/images1.png'
import component50 from '../assets/Component50.png'
import component8 from '../assets/Component8.png'
import pb1 from '../assets/Problem1.png'
import key1 from '../assets/Key1.png'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import laptop1 from '../assets/laptop.png'
import Footer from './Footer'
import Link from 'next/link'

const Healthyme = () => {
  return (
    <>
      {/* logo  */}
      <div className='hidden sm:hidden md:hidden lg:block xl:block 2xl:block mt-7 mx-20 '>
        <Image className='mt-4 ' src={frame} height={650} width={150}></Image>
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

      <div className='flex'>
        <div>
          <Image
            className='hidden sm:hidden lg:block relative lg:ms-[-20%] lg:mt-[-18%] 2xl:mt-[-21%] '
            src={component50} height={200} width={400}></Image>
        </div>

        <div className='lg:absolute flex rounded-[28px] bg-[#ED1C24] w-[85vw] ms-7 mt-10 lg:w-[70vw]  ps-[3%] pe-[1%] lg:ms-[20%] 2xl:ms-[15%]' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
          <div className='lg:w-[40%]  ms-5'>
            <h1 className='text-white text-xl lg:text-[34px] font-[550] mt-8'>Healthyme</h1>
            <p className=' hidden sm:hidden lg:block text-white mt-3'>Health care</p>
            <p className=' hidden sm:hidden lg:block text-white mt-3'>UI/UX development</p>
            <p className=' text-white mt-3 lg:hidden'>Health care | UI/UX </p>
            <p className=' text-white text-[17px] font-[400] mt-2 mb-3 lg:mb-0 lg:mt-5'>Healthyme is a fitness app that offers full body workout plans with many 3D exercises for free to help you achieve your body goals.</p>
            <p className='hidden sm:hidden lg:block text-white text-[17px] font-[400] mb-2'> You can choose from a variety of exercise plans targeted at specific muscle groups, such as chest workout or arm workout, or tailored for a certain goal, such as fat burning workout.</p>
          </div>
          <div className=' hidden sm:hidden lg:block w-[45%] '>
            <Image
              className='lg:h-[90%] lg:w-[100%] lg:ms-[30%] xl:ms-[33%]'
              src={images1} height={150} width={200}></Image>

          </div>

        </div>
      </div>

      {/* project goal  */}
      <div className='flex flex-col lg:flex-row  lg:w-full'>
        <div className='mt-10 ms-10 w-[80vw] lg:mt-0 lg:w-[35%] lg:ms-[22%]'>
          <h1 className='text-[#ED1C24] text-xl font-semibold lg:text-3xl'>Project goal</h1>
          <h1 className='lg:mt-3 lg:text-xl font-[500]'>Lorem ipsum dolor sit amet. Rem provident enim sed assumenda eligendi non galisum cupiditate. Non earum et repudiandae mollitia eos dolorem perferendis et velit galisum et deserunt.</h1>
        </div>

        <div className=' mt-8 ms-10 w-[80vw] flex lg:w-[40%]  '>
          <div className='absolute  flex flex-row lg:flex-col lg:ms-[10%]'>
            <div className='z-[1000]'>
              <h1 className=' text-[#ED1C24] text-lg  md:text-xl font-semibold lg:text-lg'>Industry</h1>
              <h1 className='lg:mt-1'>Health care</h1>
            </div>
            <div className='ms-28 md:ms-40 lg:ms-0'>
              <h1 className='text-[#ED1C24] text-lg md:text-xl font-semibold lg:text-lg lg:mt-10'>Location </h1>
              <h1 className='lg:mt-1'>Mumbai, India</h1>
            </div>
          </div>
          <div>
            <Image
              className='relativel ms-[-28%] mt-[-45%]  rotate-[-30deg] lg:rotate-0 lg:ms-[45%] xl:ms-[70%] 2xl:ms-[80%] lg:mt-[-25%]'
              src={component8} height={200} width={300}></Image>
          </div>
        </div>
      </div>

      {/* problem  */}

      <div className='flex flex-row-reverse lg:flex-row lg:w-full'>
        <div className='flex lg:w-[40%]'>
          <Image
            className='hidden sm:hidden lg:block relative lg:mt-[-10%] xl:ms-4 2xl:ms-20'
            src={component8} height={200} width={300}></Image>
          <div className='lg:absolute  lg:ms-[21%] lg:w-[40%] 2xl:w-[35%]  lg:mt-8'>
            <h1 className='text-[#ED1C24] ms-6 lg:ms-0 text-xl font-semibold lg:text-3xl'>Problems</h1>
            <li className='ms-8 lg:ms-0 font-[500]'>Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque quibusdam est</li>
            <li className='ms-8 lg:ms-0 font-[500]' >Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque quibusdam est</li>
            <li className='ms-8 lg:ms-0 font-[500]'>Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque quibusdam est</li>

          </div>

        </div>
        <div className=' w-[60vw] lg:w-[40%] lg:ms-[20%] xl:ms-[22%]'>
          <Image
            className='h-[20vh] w-[100%] lg:h-[80%] 2xl:h-[90%]  lg:w-[60%] xl:w-[50%]'
            src={pb1} height={200} width={300}></Image>
        </div>
      </div>

      {/* solutions  */}

      <div className='flex flex-row-reverse w-full mt-12 lg:mt-0 lg:flex-row lg:w-full'>

        <div className=' w-[50vw] lg:w-[30%]  lg:ms-[15%]'>
          <Image
            className='h-[24vh] w-[80%] ms-10 md:h-[20vh] md:w-[70%] lg:h-[20vh] xl:h-[30vh] 2xl:h-[40vh] lg:w-[70%] xl:w-[60%]'
            src={key1} height={240} width={300}></Image>
        </div>

        <div className='w-[50%] md:mt-5 md:ms-10 lg:ms-0 lg:w-[40%] 2xl:w-[35%] lg:mt-8'>
          <h1 className='text-[#ED1C24] ms-6 lg:ms-0 text-xl font-semibold lg:text-3xl'>Solution</h1>
          <li className='ms-8 lg:ms-0 font-[500]'>Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque quibusdam est</li>
          <li className='ms-8 lg:ms-0 font-[500]'>Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque quibusdam est</li>
          <li className='hidden sm:hidden lg:block ms-8 lg:ms-0 font-[500]'>Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque quibusdam est</li>

        </div>



      </div>

      {/* benefits  */}
      <div className='mt-10 lg:mt-5 xl:mt-14 2xl:mt-5'>
        <h1 className='text-[#ED1C24] text-2xl font-semibold lg:text-3xl text-center '>Benefits</h1>
        <div className='flex'>

          <Image
            className='hidden sm:hidden lg:block lg:rotate-[30deg] lg:ms-[-10%] lg:mt-[-5%] xl:mt-0 xl:ms-[10%]'
            src={component8} height={200} width={300}></Image>

          <div className='ms-5 md:ms-3 lg:ms-0  mt-2 lg:mt-6 '>
            <li className='text-lg font-[500]'>Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque quibusdam est</li>
            <li className='text-lg font-[500]'>Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque quibusdam est</li>
            <li className='hidden sm:hidden md:block text-lg font-[500]'>Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque quibusdam est</li>
            <li className='hidden sm:hidden md:block text-lg font-[500]'>Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque quibusdam est</li>
          </div>


        </div>
        <Image
          className='h-[32vh] ms-[60%] w-[60vw] md:w-[40vw] md:mt-[-20%] md:ms-[70%] rotate-[-30deg] mt-[-50%] lg:hidden '
          src={component8} height={100} width={200}></Image>
      </div>

      {/* screens  */}

      <div>
        <div className='flex ms-36 md:ms-[40%] lg:ms-[45%] lg:mt-[-6%]'>
          <h1 className='text-[#ED1C24] text-2xl font-semibold lg:text-3xl  '>Screens</h1>
          <Image
            className='hidden sm:hidden lg:block lg:ms-[40%] lg:mt-[-13%] 2xl:ms-[50%]'
            src={component8} height={200} width={300}></Image>
        </div>

        <div className='w-full ms-10 md:ms-16 md:mt-10 lg:ms-0'>
          <Image
            className='w-[80%] lg:h-[40vh] lg:ms-[10%] xl:h-[70vh] 2xl:h-[90vh]'
            src={s3} height={100} width={200}></Image>
          <Image
            className='w-[80%] lg:h-[40vh] lg:ms-[10%] xl:h-[70vh] 2xl:h-[90vh]'
            src={s2} height={100} width={200}></Image>
          <Image
            className='w-[80%] lg:h-[40vh] lg:ms-[10%] xl:h-[70vh] mt-3 2xl:h-[80vh]'
            src={s1} height={100} width={200}></Image>

        </div>
      </div>

      {/* other works */}
      <div>
        <h1 className='text-[#ED1C24] text-2xl ms-16 mt-10 md:ms-[30%] md:mt-10 font-semibold lg:text-3xl lg:ms-[10%] lg:mt-10'>Other works</h1>
      </div>

      <div className='hidden sm:hidden lg:block'>
        <div className='flex'>
        <div className='flex rounded-[28px] bg-[#ED1C24]  mt-10 w-[45vw]  ps-[3%] pe-[1%] lg:ms-10 xl:ms-32' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
          <div className='w-[50%] mb-4 '>
            <h1 className='text-white text-[34px] font-[550] mt-8'>V-sales</h1>
            <p className='text-white mt-3'>UI/UX development</p>
            <p className='text-white mt-3'>Web development</p>
            <p className=' text-white text-[17px] font-[400] mt-5'>V-sales is the best for your business it saves your time & money without any technical knowledge. Simple way to Track Unlimited Sales, Profit, Stock, Generate Invoice, CRM, POS & much more.</p>
            
          </div>
          <div className='flex w-[45%]'>

            <Image
              className=' mt-12 lg:ms-8  z-[1000] w-[22vw] xl:h-[24vh] lg:h-[20vh]'
              src={laptop1} height={100} width={170}></Image>
          </div>

        </div>


        {/* second section  */}

        <div className='flex rounded-[28px] bg-[#101942]  mt-10 w-[45vw]  ps-[3%] pe-[1%] lg:ms-12 xl:ms-8' style={{ boxShadow: "0px 6px 6px 0px rgba(0, 0, 0, 0.15);" }}>
          <div className='w-[50%] mb-4 ms-5'>
            <h1 className='text-white text-[34px] font-[550] mt-8'>V-sales</h1>
            <p className='text-white mt-3'>UI/UX development </p>
            <p className='text-white mt-3'>Web development </p>
            <p className=' text-white text-[17px] font-[400] mt-5'>V-sales is the best for your business it saves your time & money without any technical knowledge. Simple way to Track Unlimited Sales, Profit, Stock, Generate Invoice, CRM, POS & much more.</p>
            
          </div>
          <div className='flex w-[45%]'>
            <Image
              className=' mt-12 lg:ms-6  z-[1000] w-[22vw] xl:h-[24vh] lg:h-[20vh]'
              src={laptop1} height={100} width={170}></Image>

          </div>

        </div>
      </div>
      </div>

      {/* work for mobile  */}

      <div className='grid grid-cols-1  ms-5 me-5 md:mt-5  h-auto w-full  lg:hidden'>
      <div>
                        <div className='flex mt-7 md:mt-0 bg-[#101942] w-[90vw]  rounded-t-3xl h-auto justify-center'>
                            <Image
                                className=' mt-8  z-[1000] h-[23vh] w-[70vw] mb-5 md:mb-12  md:h-[21vh] '
                                src={laptop1} height={100} width={170}></Image>
                        </div>
                        <div className='bg-[#f0f0f0] w-[90vw]  py-5  rounded-b-3xl'>
                            <h1 className=' text-center text-lg font-[500]'>V-sales | Business | Web development</h1>
                        </div>
                    </div>
                    </div>

<button className='text-[#ED1C24] border border-[#ED1C24] mt-10 px-10 ms-28 md:ms-[35%] lg:px-24 py-2 rounded-lg lg:ms-[35%] xl:ms-[40%]'>View more</button>

{/* footer  */}
<Footer/>
    </>
  )
}

export default Healthyme