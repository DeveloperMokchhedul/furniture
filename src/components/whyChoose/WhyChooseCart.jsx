import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'


function WhyChooseCart({title,description }) {
    const cardRef = useRef()
    useGSAP(()=>{
        gsap.from(cardRef.current, {
            y:100,
            delay:1,
            duration:2,
            opacity:0,
            scrollTrigger:{
                trigger:cardRef.current,
                start:"top 120%",
                end:"top 5%",
                scrub:1
            }
        })
    })
    return (
        <>

            <div ref={cardRef} className='col-span-12 md:text-start text-center md:col-span-3 '>
                <h3 className='text-3xl font-bold font-poppin'>{title}</h3>
                <p className='mt-3'>{description}</p>
                <button className='flex mx-auto items-center mt-5 md:mt-0 justify-center text-red-600'>More Info  </button>
            </div>
        </>
    )
}

export default WhyChooseCart
