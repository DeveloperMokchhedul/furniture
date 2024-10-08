import React, { useRef } from 'react'
import WhyChooseCart from './WhyChooseCart'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function WhyChoseUs() {
    const titleRef = useRef()
    useGSAP(()=>{
        gsap.from(titleRef.current, {
            y:100,
            delay:0,
            duration:1,
            opacity:0,
            scrollTrigger:{
                trigger:titleRef.current,
                start:"top 120%",
                end:"top 5%",
                scrub:1
            }
        })
    })

    return (
        <>
            <div className='container mx-auto py-20 grid grid-cols-12 px-5 gap-5 items-center bg-[#F5F5F5] '>
                <div className='col-span-3'>
                    <h1 ref={titleRef} className='text-2xl font-bold'>Why <br /> Chosing Us</h1>
                </div>

                <WhyChooseCart
                    title={"Luxury facilites"}
                    description={"The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."}
                />

                <WhyChooseCart
                    title={"Afforadable price"}
                    description={"The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."}

                />

                <WhyChooseCart
                    title={"Many Choices"}
                    description={"The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."}

                />
            </div>
        </>
    )
}

export default WhyChoseUs
