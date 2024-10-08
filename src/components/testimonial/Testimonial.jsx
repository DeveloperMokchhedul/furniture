import React from 'react';
import { data } from '../../api/review';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';
import { IoMdStarOutline } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';

function Testimonial() {
  const totalStar = 5
  return (
    <div className='container mx-auto px-5'>
      <h3 className='text-red-400 text-center uppercase'>Testimonials</h3>
      <h1 className='text-4xl font-bold text-center'>Our Client Reviews</h1>
      <div className='mt-20'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{
                  backgroundImage: `url("/images/testomonial1.png")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className='h-[450px] rounded-lg'
              >
                <div className='h-full flex items-end'> {/* Added flex and items-end to move content to the bottom */}
                  <div className='bg-white w-full mx-5 mb-5 rounded-lg relative p-5'> {/* mb-5 moves the card lower */}
                    <img
                      className='absolute left-[45%] -top-5 w-16 h-16 rounded-full border-4 border-white'
                      src={item.image || "/images/revier.png"}  // Dynamically use the item image or fallback to default
                      alt={item.name}
                    />
                    <div className='text-center mt-10'>
                      <h3>{item.name}</h3>
                      <p className='text-sm text-black'>{item.postion}</p>
                      <p className='text-sm py-2 text-black'>{item.commemt}</p>
                      <p className='flex justify-center'>{
                        Array.from({length:totalStar}, (_, index)=>{
                          const startIndex = index;
                          return startIndex<item.rating?(
                            <FaStar key={index} className='text-yellow-600' />
                        ) : (
                            <IoMdStarOutline key={index} />
                        );
                        })

                        
                        }</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
