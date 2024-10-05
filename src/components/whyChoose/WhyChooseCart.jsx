import React from 'react'



function WhyChooseCart({title,description }) {
    return (
        <>

            <div className='col-span-3'>
                <h3 className='text-3xl font-bold font-poppin'>{title}</h3>
                <p className='mt-3'>{description}</p>
                <button className='flex items-center justify-center text-red-600'>More Info  </button>
            </div>
        </>
    )
}

export default WhyChooseCart
