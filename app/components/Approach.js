import React from 'react'
import Image from 'next/image';
import menu1 from '../assets/Menu1.png'
import frame from '../assets/Frame.png'
import component8 from '../assets/Component8.png'
import catlogo from '../assets/catlogo.png'
import Footer from './Footer';
import grp681 from '../assets/Group681.png'
import grp682 from '../assets/Group682.png'
import grp683 from '../assets/Group683.png'
import grp68 from '../assets/Group68.png'
import grp66 from '../assets/Group66.png'
import grp67 from '../assets/Group67.png'
import grp54 from '../assets/Group54.png'
import Link from 'next/link';

const Approach = () => {
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
            
            {/* main section  */}
            <div className='lg:ms-[15%] lg:me-[10%] 2xl:me-[20%]'>
            {/* <h1 className='mt-5 md:mt-28 md:ms-24 text-2xl ms-5 text-[#ED1C24] lg:text-5xl font-semibold lg:mt-[-3%]'>We beleive in 6 step process which leads us to success in every project</h1> */}
            <h1 className='mt-5 md:mt-28 md:ms-24 text-2xl ms-5 text-[#ED1C24] lg:text-5xl font-semibold lg:mt-[-3%]'>We believe in 6 step process which leads us to success in every project</h1>
            </div>

                {/* first section  */}
            <div className='flex flex-col-reverse lg:flex-row lg:w-[60vw] mx-auto justify-between'>
                <div className='lg:w-[35vw] '>
                    <Image src={grp66} height={200} width={500}></Image>
                </div>

                <div className='w-full lg:w-[45vw] 2xl:w-[38vw]'>
                    <div className='flex flex-col lg:flex-row'>
                        <button className='bg-[#ED1C24] w-[10vw] mx-auto lg:mx-0 lg:w-auto px-[15px] py-[6px]  rounded-full text-xl text-white lg:mt-16'>1</button>
                        {/* <h1 className='text-2xl mx-auto mt-5 lg:mx-0 text-[#ED1C24] lg:text-xl font-semibold lg:mt-16 lg:ms-10'>The Initial Meeting</h1> */}
                        <h1 className='text-2xl mx-auto mt-5 lg:mx-0 text-[#ED1C24] lg:text-xl font-semibold lg:mt-16 lg:ms-10'>The Initial Meeting</h1>
                    </div>
                    <div>
                        <p className='hidden sm:hidden lg:block ms-7 mt-1 lg:text-xl font-[500] lg:ms-16 '>Raise your service query through our online chat or email section to meet us for detailing your project requirements and expectations. We love answering emails, phone calls, and assisting people who visit our workplace to define their customized requirements. Once we understand your requirements and determine the scope of work, we precede to the next stage to begin the desired app your development process.</p>
                        <p className='text-xl font-[500] ms-4 text-center mt-3 lg:hidden '>Raise your service query through our online chat or email section to meet us for detailing your project requirements and expectations.</p>
                    </div>
                </div>
            </div>

            <div className='flex lg:justify-end'>
            <Image
                className='hidden sm:hidden lg:block lg:mt-[-25%]'
              src={component8} height={200} width={300}></Image>
             </div>
             

             {/* second section  */}

             <div className=''>
            <Image
                className='hidden sm:hidden lg:block mt-40'
              src={component8} height={200} width={300}></Image>
             </div>

             <div className='flex flex-col lg:flex-row lg:w-[60vw] lg:mt-[-30%] mx-auto justify-between'>

                <div className='w-full lg:w-[45vw] 2xl:w-[50vw]'>
                    <div className='flex flex-col lg:flex-row'>
                    <button className='bg-[#ED1C24] w-[10vw] mx-auto lg:mx-0 lg:w-auto px-[15px] py-[6px] lg:h-fit rounded-full text-xl text-white lg:mt-16'>2</button>
                        <h1 className='text-2xl ms-7 mt-5  text-[#ED1C24] lg:text-2xl font-semibold lg:mt-16 lg:ms-10'>Get the Proposal Approved & Contract Signed</h1>
                    </div>
                    <div>
                        <p className='hidden sm:hidden lg:block ms-7 mt-1 lg:text-xl font-[500] lg:ms-16 lg:mt-2 '>Once your service requirements are noted by our client service professionals, a detailed, formal proposal will be outlined to assess your expectations. The proposal will contain various details including app s features, functionalities, project cost, expected delivery date, and other crucial factors that can help both the parties to keep a track on products quality and delivery. A dedicated project manager will get assigned to you once the contract gets signed to help your communicate effectively with our team of developers and marketers.</p>
                        <p className='text-xl font-[500] ms-4 mt-3 text-center lg:hidden '>Once your service requirements are noted by our client service professionals, a detailed, formal proposal will be outlined to assess your expectations.</p>
                    </div>
                </div>

                <div className='lg:w-[45vw] '>
                    <Image src={grp67} height={200} width={500}></Image>
                </div>
            </div>

            {/* third section  */}

            <div className='flex flex-col-reverse lg:flex-row lg:w-[60vw] mx-auto justify-between'>
                <div className='lg:w-[35vw] '>
                    <Image src={grp68} height={200} width={500}></Image>
                </div>

                <div className='w-full lg:w-[45vw] 2xl:w-[38vw]'>
                    <div className='flex flex-col lg:flex-row'>
                        <button className='bg-[#ED1C24] w-[10vw] mx-auto lg:mx-0 lg:w-auto px-[15px] py-[6px] h-fit  rounded-full text-xl text-white lg:mt-16'>3</button>
                        <h1 className='text-2xl ms-7  mt-5  text-[#ED1C24] lg:text-2xl font-semibold lg:mt-16 lg:ms-10'>Attend Discovery Workshop For Expectation Setting</h1>
                    </div>
                    <div>
                        <p className='hidden sm:hidden lg:block ms-7 mt-1 lg:text-xl font-[500] lg:ms-16 '>At Felix TechLabs, we give high importance to your vision and demands. Thus, we get a special discovery workshop session arranged with our experienced UX/UI designer to give a kick-ass start to your app development process. Let us know about your visual expectations, design inspirations, and other detailing that can help us contribute more towards the app development.</p>
                        <p className='text-xl font-[500] ms-4 text-center mt-3 lg:hidden '>At Felix TechLabs, we give high importance to your vision and demands. Thus, we get a special discovery workshop session arranged with our experienced UX/UI designer to give a kick-ass start to your app development process.</p>
                    </div>
                </div>
            </div>

            <div className='flex lg:justify-end'>
            <Image
                className='hidden sm:hidden lg:block lg:mt-[-25%]'
              src={component8} height={200} width={300}></Image>
             </div>

             {/* fourth section  */}

             <div className=''>
            <Image
                className='hidden sm:hidden lg:block mt-40'
              src={component8} height={200} width={300}></Image>
             </div>

             <div className='flex flex-col lg:flex-row lg:w-[60vw] lg:mt-[-30%] mx-auto justify-between'>

                <div className='w-full lg:w-[45vw] 2xl:w-[50vw]'>
                    <div className='flex flex-col lg:flex-row'>
                    <button className='bg-[#ED1C24] w-[10vw] mx-auto lg:mx-0 lg:w-auto px-[15px] py-[6px] lg:h-fit rounded-full text-xl text-white lg:mt-16'>4</button>
                        <h1 className='text-2xl ms-7 mt-5  text-[#ED1C24] lg:text-2xl font-semibold lg:mt-16 lg:ms-10'>Get the Designing of Your App Started</h1>
                    </div>
                    <div>
                        <p className='hidden sm:hidden lg:block ms-7 mt-1 lg:text-xl font-[500] lg:ms-16 lg:mt-2 '>We start-off with User Experience design to form wireframes and provide basic blueprints that can help us outline the core functionality of your app or website. Once the wireframes get finalized, the full visual design (UI Design) will get applied to it for deciding matching color schemes, font styles, imagery, and other components in accordance with your brand guidelines</p>
                        <p className='text-xl font-[500] ms-4 mt-3 text-center lg:hidden '>Once your service requirements are noted by our client service professionals, a detailed, formal proposal will be outlined to assess your expectations.</p>
                    </div>
                </div>

                <div className='lg:w-[45vw] '>
                    <Image src={grp682} height={200} width={500}></Image>
                </div>
            </div>

            {/* fifth section  */}

            <div className='flex flex-col-reverse lg:flex-row lg:w-[60vw] mx-auto justify-between'>
                <div className='lg:w-[35vw] '>
                    <Image src={grp683} height={200} width={500}></Image>
                </div>

                <div className='w-full lg:w-[45vw] 2xl:w-[38vw]'>
                    <div className='flex flex-col lg:flex-row'>
                        <button className='bg-[#ED1C24] w-[10vw] mx-auto lg:mx-0 lg:w-auto px-[15px] py-[6px] h-fit  rounded-full text-xl text-white lg:mt-16'>5</button>
                        <h1 className='text-2xl ms-7  mt-5  text-[#ED1C24] lg:text-2xl font-semibold lg:mt-16 lg:ms-10'>Final Development & Testing</h1>
                    </div>
                    <div>
                        <p className='hidden sm:hidden lg:block ms-7 mt-1 lg:text-xl font-[500] lg:ms-16 '>The designed layout gets released to experienced development experts for completing the apps coding task at the faster pace. Your dedicated project manager will keep you informed about the development progress and stages that your app has cleared successfully. Once the developed product has passed the full assurance testing stages, the app will be shared with you.</p>
                        <p className='text-xl font-[500] ms-4 text-center mt-3 lg:hidden '>The designed layout gets released to experienced development experts for completing the apps coding task at the faster pace. Your dedicated project manager will keep you informed about the development progress and stages that your app has cleared successfully.</p>
                    </div>
                </div>
            </div>

            <div className='flex lg:justify-end'>
            <Image
                className='hidden sm:hidden lg:block lg:mt-[-25%]'
              src={component8} height={200} width={300}></Image>
             </div>

              {/* six section  */}

              <div className=''>
            <Image
                className='hidden sm:hidden lg:block mt-40'
              src={component8} height={200} width={300}></Image>
             </div>

             <div className='flex flex-col lg:flex-row lg:w-[60vw] lg:mt-[-30%] mx-auto justify-between'>

                <div className='w-full lg:w-[45vw] 2xl:w-[50vw]'>
                    <div className='flex flex-col lg:flex-row'>
                    <button className='bg-[#ED1C24] w-[10vw] mx-auto lg:mx-0 lg:w-auto px-[15px] py-[6px] lg:h-fit rounded-full text-xl text-white lg:mt-16'>6</button>
                        <h1 className='text-2xl ms-24 mt-5  text-[#ED1C24] lg:text-2xl font-semibold lg:mt-16 lg:ms-10'>Plan a Big Launch</h1>
                    </div>
                    <div>
                        <p className='hidden sm:hidden lg:block ms-7 mt-1 lg:text-xl font-[500] lg:ms-16 lg:mt-2 '>We start-off with User Experience design to form wireframes and provide basic blueprints that can help us outline the core functionality of your app or website. Once the wireframes get finalized, the full visual design (UI Design) will get applied to it for deciding matching color schemes, font styles, imagery, and other components in accordance with your brand guidelines</p>
                        <p className='text-xl font-[500] ms-4 mt-3 text-center lg:hidden '>Based on the features, nature, and platform-support, the app will get released on the Apple, Google Play or Windows stores within the pre-defined time-frame.</p>
                    </div>
                </div>

                <div className='lg:w-[45vw] '>
                    <Image src={grp681} height={200} width={500}></Image>
                </div>
            </div>


            <div className='flex justify-center'>
                <Image 
                 className='rotate-[-80deg]'
                src={component8} height={200} width={300}></Image>
            </div>

            <div className='w-[80vw] lg:w-[60vw] mx-auto mt-[-60%] lg:mt-[-15%]'> 
                <h1 className='hidden sm:hidden lg:block font-semibold'>At Felix TechLabs, we expect to carry business relationships. Thus, the launch of your app is just the beginning of a never-ending journey. We can offer a range of marketing, support and maintenance services to keep your app up on leading app stores and can help it get ample visibility amongst the defined target group!</h1>
                <h1 className='font-semibold  lg:hidden '>At Felix TechLabs, we expect to carry business relationships. Thus, the launch of your app is just the beginning of a never-ending journey.</h1>
            </div>
            <div className='w-[80vw] lg:w-[40vw] mx-auto'>
            <p className='text-[#ED1C24] font-semibold mt-12 lg:mt-10'>Connect with us once we assure that we will be your trusted technology partner in your success.</p>
            </div>

            <div className='w-full lg:w-[10vw] mx-auto mt-12 lg:mt-20 '>
                <Image 
                 className='h-[12vh] w-[22vw] mx-auto lg:w-auto lg:h-auto'
                src={grp54} height={60} width={120}></Image>
            </div>

            {/* footer  */}

            <Footer/>

        </>
    )
}

export default Approach