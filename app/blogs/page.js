import React from 'react'
import dynamic from 'next/dynamic'

const Blogs = dynamic(() => import('../components/Blogs'), {ssr: false}) ;
// import Blogs from '../components/Blogs'

const page = () => {

  return (
    <div>
       <Blogs />
    </div>
  )
}

export default page