import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Experience() {
  const imageRef = useRef()
  const textRef = useRef()



  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1 })

    tl.from(imageRef.current, {
      x: -100, duration: 2,opacity:0,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%", // Start the animation when the top of the box hits 80% of the viewport height
        end: "top 20%",   // End the animation when the top of the box reaches 20% of the viewport height
        scrub: 1,        // Smoothly animate the transition
      },
    })
      .from(textRef.current, {
        y: -100, duration: 2,opacity:0, scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1
        }
      }, "<")



  })
  return (
    <>
      <div className='container mx-auto grid grid-cols-12 px-5 gap-10 items-center '>
        <div className='col-span-6 py-20'>
          <img ref={imageRef} src="/images/experienceBanner.png" alt="" />
        </div>
        <div ref={textRef} className='animationDiv col-span-6 flex flex-col gap-y-4 '>
          <h3 className='text-red-600 font-poppin tracking-[12px]  text-xl ' >EXPERIENCES</h3>
          <h1 className='text-[50px] font-bold  leading-[60px]'>We Provide you the Best Experience</h1>
          <p className='leading-[28px] text-[18px]'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>

          <button className='text-red-600 mx-s'>More Info</button>

        </div>

      </div>


    </>
  )
}

export default Experience
