"use client"


import Image from "next/image";
import { CiSearch } from "react-icons/ci";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';


// import required modules
import { Pagination } from 'swiper/modules';


const MultipleService = () => {
  return (
    <div className="bg-blue-50 py-16 px-4 lg:px-24">
      {/* top side part  */}
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 max-w-3xl mb-8">
            We Provide Multipool Services Centers to You
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Right Content */}
        <div className=" lg:col-span-5 bg-white shadow-lg rounded-lg p-6 space-y-4  mt-6 lg:mt-0">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900 ">
              We Provide 50+ Services <br />
              With Our Experts Team!
            </h3>
            <div className="flex items-center space-x-4">
              {/* Images */}
              <div className="flex -space-x-2">
                <Image
                  src="https://i.postimg.cc/jdfyH2NN/Ellipse-2-1.png"
                  alt="Expert 1"
                  width={400}
                  height={300}
                  className="w-[54px] h-[54px] rounded-full border-2 border-white"
                />
                <Image
                  src="https://i.postimg.cc/WbZHf0x1/Ellipse-3-1.png"
                  alt="Expert 2"
                  width={400}
                  height={300}
                  className="w-[54px] h-[54px] rounded-full border-2 border-white"
                />
                <Image
                  src="https://i.postimg.cc/25k96My1/Ellipse-4.png"
                  alt="Expert 3"
                  width={400}
                  height={300}
                  className="w-[54px] h-[54px] rounded-full border-2 border-white"
                />
                <span className="flex items-center justify-center text-sm text-white w-[54px] h-[54px] rounded-full border-2 border-white bg-[#65c8d0]">
                  40+
                </span>
              </div>
              {/* <span className="text-sm text-white w-[54px] h-[54px] rounded-full border-2 border-white bg-[#65c8d0]">40+</span> */}
            </div>
          </div>
          <p className="text-gray-600">
            Find your services what services you need
          </p>
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search your services..."
              className="w-full px-4 py-2 text-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#65c8d0]"
            />
            <button className="absolute top-2/4 -translate-y-2/4  right-1 bg-[#65c8d0] text-white px-4 py-1 rounded-r-full">
              <CiSearch className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* slider part  */}

      <div className="lg:mt-20 mt-16 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default MultipleService;