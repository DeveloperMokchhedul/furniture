import React from 'react'
import WhyChooseCart from './WhyChooseCart'

function WhyChoseUs() {

    return (
        <>
            <div className='container mx-auto py-20 grid grid-cols-12 px-5 gap-5 items-center bg-[#F5F5F5] '>
                <div className='col-span-3'>
                    <h1 className='text-2xl font-bold'>Why <br /> Chosing Us</h1>
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
