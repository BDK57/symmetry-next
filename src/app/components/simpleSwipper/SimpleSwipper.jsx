"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SimpleSwipper = ({
  swipperContent,
  swipperGap,
  slidesPerView,
  swipperTitle,
}) => {
  return (
    <div>
      <div className="">
        <div className=" md:mx-auto">
          <Swiper
            spaceBetween={20}
            slidesPerView={2.5}
            breakpoints={{
              500: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: slidesPerView,
                spaceBetween: swipperGap,
              },
            }}
            speed={700}
            loop={true}
            // navigation={true}
            centeredSlides={true}
            // modules={[Navigation]}
            className="mySwiper "
          >
            {swipperContent.map((item, index) => (
              <>
                <SwiperSlide>
                  <div className="sm:h-[250px] h-[150px]">
                    <div className="border border-gray-400 rounded-md  ">
                      <div className="flex justify-center items-center py-3 ">
                        <Image src={item.img} className="lg:w-[7vw]" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SimpleSwipper;
