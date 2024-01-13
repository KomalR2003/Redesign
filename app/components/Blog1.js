import React from 'react'
import Image from 'next/image';
import frame from '../assets/Frame.png'
import anim2 from '../assets/anim2.png'
import Ellipse6 from '../assets/Ellipse6.png'
import b1 from '../assets/b1.png'
import Footer from './Footer';
import D102Res from './D102Res';

const Blog1 = () => {
    return (
        <>
            {/* desktop  */}
            <div>
                <div className='hidden 2xl:flex xl:flex lg:flex'>
                    <div className='mt-7 ms-20 mb-8  w-1/12'>
                        <Image src={frame} height={670} width={170}></Image>
                    </div>

                    <div className='w-6/12'>
                        <h1 className='text-3xl text-[#ED1C24] font-[500] mt-12 ms-28'>Importance Of Enterprise App For <br />Proficient Growth Of Your Business</h1>
                        <p className='text-[18px] text-gray-400 mt-3 ms-28'>June 15, 8 min read</p>
                        <div className='flex'>
                            <div>
                                <Image className='relative ms-[-33%] mt-[-20%]' src={anim2} height={320} width={320}></Image>
                                <Image className='absolute mt-[-20.5%] ms-[-6%]' src={Ellipse6} height={300} width={320}></Image>
                            </div>
                            <div className='absolute '>
                                <p className='ms-28 mt-4 font-[500] text-[17.5px]'>As the world is rapidly adopting digital, there is a marked hike in the <br />number of enterprise apps catering to multiple business use cases aimed<br /> at one or more business divisions. With this growth, organizations now<br /> have a lot of choice in using mobile apps to expand customer outreach, <br /> improve brand visibility on the smart phone, and grow the user base of<br /> this niche segment.</p>
                                <p className='ms-28 mt-4 font-[500] text-[17.5px]'>Nowadays, 65% of consumers are seen hooked up to their mobile phones.<br /> Therefore, it s no wonder that an enterprise level application will help your<br /> business to connect well with the potential leads and aid in conversions.</p>
                                <p className='ms-28 mt-4 font-[600] text-[17.5px]'>Reasons to turn mobile</p>
                                <p className='ms-28  font-[500] text-[17.5px]'> Let s look at some reasons why having a mobile-centric marketing and business strategy is<br /> likely to yield amazing RoI and growth for your business in todays times -</p>
                                <p className='ms-32 mt-4 font-[500] text-[17.5px]'><span className=' font-[600] '>Proficient task management:</span> Well, coordinating task while on the move is a serious<br /> daunting work. Previously people used to send emails for even a single change and<br /> create some major obstacles. Those days are history, and with an enterprise application,<br /> you can always get the chance to manage your task proficiently. It has a separate task<br /> section, which will collaborate well with your business ventures, and access reports or<br /> updates, on time.</p>
                                <p className='ms-32 mt-4 font-[500] text-[17.5px]'><span className=' font-[600]'>Visible to Customers:</span> For accentuating the current value of your business, you need to <br /> remain visible for your customers. And that is only possible, when you have an enterprise <br /> app, right in front of you. Average customers spend over two hours, browsing their smart<br /> phones. Therefore, staying online always is the best way to approach them, whenever<br /> they want to. You can maintain that visibility proficiently with an enterprise application,<br /> by your side.</p>
                                <p className='ms-32 mt-4 font-[500] text-[17.5px]'><span className=' font-[600]'>Train the employees:</span> Employees always need to stay up to date with their companys <br /> functionality. Now, if you are maintaining a large firm, then it becomes rather difficult to <br /> work with each employee separately. And thats when this application comes handy. It <br />will help in training employees, under one platform. All they have to do is just reach out<br /> for the application, and that will help to connect them with others.</p>
                                <p className='ms-32 mt-4 font-[500] text-[17.5px]'>Proficient business enterprise application will help in providing value to customers. It is<br /> the perfect tool to build recognition and brand, as per the companys requisites.</p>
                            </div>
                            <div>
                                <Image className='relative ms-[100%] mt-[170%]' src={anim2} height={320} width={320}></Image>
                                <Image className='absolute mt-[-20.5%] ms-[22%]' src={Ellipse6} height={300} width={320}></Image>
                            </div>
                        </div>
                    </div>

                    <div className='w-5/12'>
                        <Image className='mt-36 ms-20' src={b1} height={330} width={360}></Image>
                    </div>
                </div>
            </div>


            {/* mobile responsive  */}

            <D102Res />

            {/* footer   */}
             <div>
                 <Footer />
            </div>




        </>
    )
}

export default Blog1