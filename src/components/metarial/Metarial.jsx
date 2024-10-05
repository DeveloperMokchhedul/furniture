import React from 'react'

function Metarial() {
    return (
        <>
            <div className='container mx-auto grid grid-cols-12 gap-10 px-5 items-center justify-between '>
                <div className='col-span-6 flex flex-col gap-y-4 '>
                    <h3 className='text-red-600 font-poppin tracking-[12px]  text-2xl ' >EXPERIENCES</h3>
                    <h1 className='text-[65px] font-bold  leading-[60px]'>We Provide you the Best Experience</h1>
                    <p className='leading-[50px] text-[26px]'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>

                    <button className='text-red-600 mx-s'>More Info</button>

                </div>

                <div className='col-span-6 py-20 flex justify-end items-center '>
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
