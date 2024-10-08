import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";

function BestSelling() {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState();
    const [isVisible, setIsVisible] = useState(4); // Fix typo
    const [show, setShow] = useState(false);

      const titleRef = useRef()
      const cardRef = useRef()
    useGSAP(()=>{
        gsap.from(titleRef.current, {
            y:100,
            delay:1,
            duration:2,
            opacity:0,
            scrollTrigger:{
                trigger:titleRef.current,
                start:"top 120%",
                end:"top 5%",
                scrub:1
            }
        }),
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

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProduct(data);
        };
        fetchData();
    }, [category, isVisible]);

    const totalStar = 5;

    const handleCategory = (category) => {
        setCategory(category);
    };

    const filterData = category ? product.filter((item) => item.category === category) : product;

    const handleShowMore = () => {
        setIsVisible(filterData.length); // Show all products
        setShow(true);
    };

    const handleLess = () => {
        setIsVisible(4); // Show only 4 products again
        setShow(false);
    };

    return (
        <>
            <div className='py-5 px-5 container mx-auto'>
                <h1 ref={titleRef} className='text-2xl md:text-5xl font-bold text-center'>Best Selling Product</h1>
                <div className='flex gap-5 w-full md:w-2/5 mx-auto items-center justify-between py-3 px-5 rounded-lg mt-10 bg-black/25'>
                    {
                        Array.from(new Set(product.map(item => item.category)))
                            .map((category, index) => (
                                <button onClick={() => handleCategory(category)} className='bg-black text-[8px] md:text-[12px] text-white px-3 py-1 rounded-md' key={index}>{category}</button>
                            ))
                    }
                </div>

                <div ref={cardRef} className='grid grid-cols-12 mt-16 gap-5'>
                    {
                        filterData && filterData.slice(0, isVisible).map((item) => (
                            <div key={item.id} className='col-span-12 md:col-span-3 bg-slate-600 p-5'>
                                <img className='w-[130px] h-[130px]  rounded-full mx-auto' src={item.image} alt="" />
                                <div className='bg-white p-5 rounded-lg mt-3 text-center'>
                                    <p>{item.category}</p>
                                    <h3 className='font-bold'>{item.title.slice(0, 15)}</h3>
                                    <div className='flex justify-center mt-2'>
                                        {
                                            Array.from({ length: totalStar }, (_, index) => {
                                                const startIndex = index;
                                                return startIndex < item.rating.rate ? (
                                                    <FaStar key={index} className='text-yellow-600' />
                                                ) : (
                                                    <IoMdStarOutline key={index} />
                                                );
                                            })
                                        }
                                    </div>
                                    <button className='bg-green-700 text-white flex justify-center items-center mx-auto px-3 py-1 rounded-md mt-5'>Add To Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="text-center mt-5">
                    {!show ? (
                        <button onClick={handleShowMore} className='bg-red-600 px-2 py-1 rounded-md'>Show More</button>
                    ) : (
                        <button onClick={handleLess} className='bg-red-600 px-2 py-1 rounded-md'>Show Less</button>
                    )}
                </div>
            </div>
        </>
    );
}

export default BestSelling;
