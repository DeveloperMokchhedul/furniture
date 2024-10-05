
import banner from "/images/herobg.png"
import { CiSearch } from "react-icons/ci";

function Hero() {
    return (
        <>
            <div className='h-screen ' style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>

                <section className="md:w-1/2  mx-auto text-white">
                    <h2 className="text-white text-[45px] font-medium md:pt-40 space-y-8 text-center">Make your interior more
                        minimalistic & modern</h2>
                    <p className="px-32 mt-5">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

                    <div className="flex justify-center items-center mt-4 relative ">
                        <input className=" bg-transparent border border-white outline-none bg-white/25  rounded-lg w-1/3 py-1 px-4" 
                        type="text"
                        placeholder="search furniture"
                        
                        />
                        <div className="bg-red-500 w-6 h-6  rounded-full flex items-center justify-center absolute right-52">
                            <CiSearch className="text-xl"/>
                        </div>
                    </div>
                </section>



            </div>

        </>
    )
}

export default Hero
