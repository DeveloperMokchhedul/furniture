import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Metarial() {
    const imageRef = useRef()
    const text2Ref = useRef()
  
  
  
    useGSAP(() => {
    
      gsap.from(text2Ref.current, {
        y: 50, duration: 1,delay:1,opacity:0,
        scrollTrigger: {
          trigger: text2Ref.current,
          start: "top 80%", // Start the animation when the top of the box hits 80% of the viewport height
          end: "top 30%",   // End the animation when the top of the box reaches 20% of the viewport height
          scrub: 1,        // Smoothly animate the transition
        },
      })
        gsap.from(imageRef.current, {
          y: 50, duration: 3,opacity:0, 
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1
          }
        })
  
  
  
    })
    return (
        <>
            <div  className='container mx-auto grid grid-cols-12 gap-10 px-5 items-center justify-between '>
                <div ref={text2Ref} className='col-span-6 flex flex-col gap-y-4 '>
                    <h3 className='text-red-600 font-poppin tracking-[12px]  text-2xl ' >EXPERIENCES</h3>
                    <h1 className='text-[65px] font-bold  leading-[60px]'>We Provide you the Best Experience</h1>
                    <p className='leading-[50px] text-[26px]'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>

                    <button className='text-red-600 mx-s'>More Info</button>

                </div>

                <div ref={imageRef} className='col-span-6 py-20 flex justify-end items-center '>
                    <div className='grid grid-cols-12 gap-8 items-center'>
                        <div className='col-span-6 flex justify-end flex-col '>
                            <img src="/images/group1.png" alt="" />
                            <img src="/images/group2.png" alt="" />
                      
                        </div>
                        <div className='col-span-6 flex justify-end'>
                        <img src="/images/group2.png" alt="" />
                           
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Metarial
