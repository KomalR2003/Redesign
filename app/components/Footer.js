import React from 'react'
import styles from '../styles.module.css'
import FooterRes from './FooterRes'
import Link from 'next/link'

const Footer = () => {
  
  return (
    <>
    
    <div className='hidden sm:hidden md:hidden lg:block xl:block 2xl:block'>
<div className=' w-full  h-auto bg-[#101942] text-white p-12  ' style={{ clipPath: 'polygon(100% 100%, 0% 100% , 0.00% 37.42%, 3.33% 38.85%, 6.67% 40.19%, 10.00% 41.39%, 13.33% 42.38%, 16.67% 43.13%, 20.00% 43.60%, 23.33% 43.78%, 26.67% 43.65%, 30.00% 43.23%, 33.33% 42.52%, 36.67% 41.57%, 40.00% 40.40%, 43.33% 39.08%, 46.67% 37.66%, 50.00% 36.21%, 53.33% 34.78%, 56.67% 33.44%, 60.00% 32.25%, 63.33% 31.25%, 66.67% 30.50%, 70.00% 30.03%, 73.33% 29.85%, 76.67% 29.98%, 80.00% 30.40%, 83.33% 31.11%, 86.67% 32.07%, 90.00% 33.23%, 93.33% 34.55%, 96.67% 35.97%, 100.00% 37.42%)', height: '85vh' }}>
      <div className='flex w-full ps-[8%]   2xl:mt-[22%] xl:mt-[26%] lg:mt-[60%]'>
        <div className='w-[35%]'>
        <i className="fa-brands fa-twitter ms-12 text-2xl  2xl:text-3xl "></i>
        <i className="fa-brands fa-linkedin-in ms-20 text-2xl 2xl:text-3xl"></i>
        <h1 className=' 2xl:text-xl mt-24 font-[450] ' >© 2022 Felix TechLabs LLP. All Rights Reserved</h1>
        </div>
        <div className='w-[25%] ms-14 2xl:ms-[11%]'>
        <p><i className="fa-solid fa-phone text-[21px]"></i><span className='ms-5 text-[17px]'> +91 20 652 66070</span></p>
        <p><i className="fa-solid fa-envelope text-[22px] mt-10"></i><span className='ms-5 text-[17px]'> info@felixtechlabs.com</span></p>
        <p><i className="fa-solid fa-location-dot text-[24px] mt-10"></i><span className='ms-5 text-[17px]'> New Airport Road, Mhada Colony, Viman Nagar, Pune</span></p>
        
        </div>
        <div className='w-[18%] ms-[15%]' ><ul>
                <Link href='/services'><li className='text-lg font-[500]'>SERVICES</li></Link>
                <Link href='/approach'><li className='text-lg font-[500] mt-7'>APPROACH</li></Link>
                <Link href='/work1'><li className='text-lg font-[500] mt-7'>WORK</li></Link>
                <Link href='/contact'><li className='text-lg font-[500] mt-7'>CONTACT</li></Link>
              </ul></div>
      </div>
     
      
    </div>
    </div>


    {/* for mobile responsive  */}

    <div className='w-12/12 sm:block md:block lg:hidden xl:hidden 2xl:hidden'>
        <FooterRes />
      </div>
    </>
  )
}

export default Footer