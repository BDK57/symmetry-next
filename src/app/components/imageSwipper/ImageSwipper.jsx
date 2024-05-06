"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// import "../imageSwipper/ImageSwipper.css"
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import GsapScrollAnimationComp from "../../components/gsapComp/GsapScrollAnimationComp";
import GsapBottomAnimation from "../gsapComponent/GsapBottomAnimation";

const ImageSwipper = ({
  brandsTitle,
  brandsHeading,
  brandsText,
  hasKnowMore,
  getLink,
  swipperContent,
  slidesPerView,
  irisLogo,
  swipperGap,
  knowMoreLink,
}) => {
  const [triggerBottomAnimation, setTriggerBottomAnimation] = useState(false);

  const triggerBotAnimFunc = () => {
    setTriggerBottomAnimation(true);
  };

  const animationRefs = GsapScrollAnimationComp();

  return (
    <>
      {triggerBottomAnimation && <GsapBottomAnimation getLink={getLink} />}
      <div className="md:mx-12 mx-3 lg:mx-auto lg:w-[53%]">
        <div className="mt-5">
          <div
            className="border-b border-green-500 pt-6 opacity-0 transform translate-y-[50px]"
            ref={animationRefs.firstFadeInAnimation}
          >
            <p className="text-3xl lg:text-4xl xl:text-5xl mb-4 text-black pillat-normal">
              {brandsTitle}
            </p>
            <div className="rainbow-symmetry-border"></div>
          </div>
          <div
            className="w-full mt-4 opacity-0 transform translate-y-[50px]"
            ref={animationRefs.secondFadeInAnimation}
          >
            <span className="rainbow-text text-4xl sm:text-6xl md:text-5xl lg:text-7xl 2xl:text-8xl pillat-normal">
              <span
                className=""
                dangerouslySetInnerHTML={{ __html: brandsHeading }}
              />
            </span>

            {/*********  Desktop  *********/}

            <span className="text-black text-sm 2xl:leading-[15px] mt-6 lg:block hidden pillat-thin">
              <span
                onClick={() => {
                  triggerBotAnimFunc();
                }}
                className="relative w-[100%] "
              >
                {brandsText}
                <Link href={`${getLink}`} class="a-arrow">
                  {" "}
                  <span className="text-black font-bold">
                    explore our world{" "}
                  </span>{" "}
                  <span class="arrow"></span>
                </Link>
              </span>
            </span>

            {/*********  Mobile  *********/}

            <span
              onClick={() => {
                triggerBotAnimFunc();
              }}
              className=" w-[100%] lg:hidden block text-black text-[13px] sm:text-sm mt-2 pillat-thin"
            >
              {brandsText}
              <Link href={`${knowMoreLink}`} class="a-arrow relative">
                {" "}
                <span className="text-black font-bold">
                  explore our world{" "}
                </span>{" "}
                <span class="arrow"></span>
              </Link>
            </span>
          </div>
        </div>

        {/* <div className="flex justify-center items-center my-14">
          <h2 className="text-5xl md:text-6xl  text-[#13a772]">Swipper Here</h2>
        </div> */}

        <div
          className="mb-10 mt-10 md:mx-auto swipper-icons-color-toggle opacity-0 transform translate-y-[50px]"
          ref={animationRefs.thirdFadeInAnimation}
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1.5}
            breakpoints={{
              500: {
                slidesPerView: 2,
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
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 1000,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="mySwiper "
          >
            {swipperContent.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className="cursor-pointer">
                  <div className="flex justify-center items-center border border-gray-400 rounded-md">
                    <div className=" md:w-10/12 md:h-24 flex justify-center items-center ">
                      <Image src={item.img} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-navigation-buttons flex justify-center gap-2 lg:gap-[10px] 2xl:gap-3 w-full mt-10">
            <button
              className={`swiper-button-prev  !static custom-arrow-border rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8 `}
            ></button>
            <button
              className={`swiper-button-next !static custom-arrow-border  rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8`}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSwipper;
