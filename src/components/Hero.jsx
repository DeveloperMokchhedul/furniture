
import banner from "/images/herobg.png"
import { CiSearch } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Hero() {
    const titleRef = useRef()
    const textRef = useRef()
    const inputReff = useRef()
    useGSAP(()=>{
        gsap.from(titleRef.current, {
            x:-900,
            delay:1,
            duration:2
        });
        gsap.from(textRef.current, {
            x:900,
            delay:1,
            duration:2

        })
        gsap.from(inputReff.current, {
            y:50,
            delay:1,
            opacity:0,
            duration:2

        })

    })
    return (
        <>
            <div className='h-screen ' style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>

                <section className="md:w-1/2   mx-auto text-white">
                    <h2 ref={titleRef} className="text-white text-[45px] pt-20 font-medium md:pt-40 space-y-8 text-center">Make your interior more
                        minimalistic & modern</h2>
                    <p ref={textRef} className="px-32 mt-5 text-center">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

                    <div ref={inputReff} className="flex justify-center items-center mt-4 relative ">
                        <input className="  border border-white outline-none bg-white/25  rounded-lg w-1/3 py-1 px-4" 
                        type="text"
                        placeholder="search furniture"
                        
                        />
                        <div className="bg-red-500 w-6 h-6  rounded-full flex items-center justify-center absolute right-[170px] md:right-56">
                            <CiSearch className="text-xl"/>
                        </div>
                    </div>
                </section>



            </div>

        </>
    )
}

export default Hero
