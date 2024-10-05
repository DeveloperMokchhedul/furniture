import React from 'react'

function Experience() {
  return (
    <>
    <div className='container mx-auto grid grid-cols-12 px-5 items-center '>
        <div className='col-span-6 py-20'>
            <img src="/images/experienceBanner.png" alt="" />
        </div>
        <div className='col-span-6 flex flex-col gap-y-4 '>
            <h3 className='text-red-600 font-poppin tracking-[12px]  text-2xl ' >EXPERIENCES</h3>
            <h1 className='text-[65px] font-bold  leading-[60px]'>We Provide you the Best Experience</h1>
            <p className='leading-[50px] text-[26px]'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>

            <button className='text-red-600 mx-s'>More Info</button>
        
        </div>

    </div>
    
      
    </>
  )
}

export default Experience
