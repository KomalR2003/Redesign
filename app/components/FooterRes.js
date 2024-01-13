import React from 'react'
import Link from 'next/link'

const FooterRes = () => {
  return (
    <>
    
    <div className=' w-full  h-auto bg-[#101942] text-white p-10 2xl:hidden lg:hidden xl:hidden ' style={{ clipPath: 'polygon(100% 100%, 0% 100% , 0.00% 44.90%, 2.00% 45.23%, 4.00% 45.50%, 6.00% 45.69%, 8.00% 45.81%, 10.00% 45.87%, 12.00% 45.84%, 14.00% 45.75%, 16.00% 45.58%, 18.00% 45.35%, 20.00% 45.05%, 22.00% 44.68%, 24.00% 44.25%, 26.00% 43.77%, 28.00% 43.23%, 30.00% 42.65%, 32.00% 42.03%, 34.00% 41.37%, 36.00% 40.69%, 38.00% 39.99%, 40.00% 39.27%, 42.00% 38.55%, 44.00% 37.82%, 46.00% 37.11%, 48.00% 36.41%, 50.00% 35.74%, 52.00% 35.09%, 54.00% 34.48%, 56.00% 33.92%, 58.00% 33.40%, 60.00% 32.93%, 62.00% 32.52%, 64.00% 32.18%, 66.00% 31.90%, 68.00% 31.69%, 70.00% 31.54%, 72.00% 31.47%, 74.00% 31.48%, 76.00% 31.55%, 78.00% 31.70%, 80.00% 31.92%, 82.00% 32.20%, 84.00% 32.56%, 86.00% 32.97%, 88.00% 33.44%, 90.00% 33.96%, 92.00% 34.53%, 94.00% 35.15%, 96.00% 35.79%, 98.00% 36.47%, 100.00% 37.17%)', height: 'auto' }}>
          
          <div className='flex w-full'>
         
         <div className='w-[55vw]'>
         <p><i className="fa-solid fa-phone text-xl mt-60"></i><span className='ms-3 text-sm'> +91 20 652 66070</span></p>
            <p><i className="fa-solid fa-envelope text-xl mt-4"></i><span className=' text-sm'> info@felixtechlabs.com</span></p>
            <p><i className="fa-solid fa-location-dot text-xl mt-6"></i><span className=' text-sm'> New Airport Road, Mhada Colony, Viman Nagar, Pune</span></p>
            <div className='flex ms-3 mt-5'>
            <i className="fa-brands fa-twitter  text-[24px]"></i>
            <i className="fa-brands fa-linkedin-in ms-14 text-[24px]"></i>
          
            </div>
         </div>

         <div className='w-[30vw] mt-52'>
         <ul>
         <Link href='/services'><li className='text-lg font-[500]'>SERVICES</li></Link>
         <Link href='/approach'><li className='text-lg font-[500] mt-7'>APPROACH</li></Link>
         <Link href='/work1'><li className='text-lg font-[500] mt-7'>WORK</li></Link>
         <Link href='/contact'><li className='text-lg font-[500] mt-7'>CONTACT</li></Link>
                  </ul>
         </div>
         </div>

          <h1 className=' text-sm mt-10 font-[450] ' >© 2022 Felix TechLabs LLP. All Rights Reserved</h1>
        </div>
         
        </>
  )
}

export default FooterRes