import React from 'react'
import styles from '../anim.module.css';
import Image from 'next/image';
import catlogo from '../assets/catlogo.png'
import Link from 'next/link';

const Anim = () => {
    return (
        <>

            <div className={styles.bg}>


               <Link href='/main'><div className={styles.anim}>
                    <Image src={catlogo} height={60} width={110}></Image>
                </div> 
                </Link>     
            </div>




        </>
    )
}

export default Anim