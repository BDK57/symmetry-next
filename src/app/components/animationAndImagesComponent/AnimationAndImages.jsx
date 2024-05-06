"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import square from "../../../../public/square-neon.png";
import Lottie from "react-lottie-player";
import dummyRiv from "../../../../public/symmetryAnimations/home-banner.riv";
import Rive from "@rive-app/react-canvas";
import Link from "next/link";
import blackArrow from "../../../../public/black-arrow.png";
import GsapScrollAnimationComp from "../../components/gsapComp/GsapScrollAnimationComp";
import GsapBottomAnimation from "../gsapComponent/GsapBottomAnimation";

const AnimationAndImages = ({
  aasH3,
  aasH2,
  aasP,
  aasKnowMore,
  getLink,
  swipperContent,
  slidesPerView,
  swipperGap,
  navigation,
  animation,
  knowMoreLink,
}) => {
  // console.log(aasKnowMore , "KNOW MOREEEE affiliation")
  const [triggerBottomAnimation, setTriggerBottomAnimation] = useState(false);

  const triggerBotAnimFunc = () => {
    setTriggerBottomAnimation(true);
  };

  const animationRefs = GsapScrollAnimationComp();

  return (
    <>
      {triggerBottomAnimation && <GsapBottomAnimation getLink={getLink}/>}
      <div className="relative mx-3 md:mx-12 lg:ml-12 lg:mr-[2px] lg:w-[%]">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-[62%]">
            <div className="mt-5">
              <div
                className="pt-6 opacity-0 transform translate-y-[50px]"
                // ref={animationRefs.firstFadeInAnimation}
              >
                <p className="text-3xl lg:text-5xl 2xl:text-7xl mb-4 text-black pillat-normal">
                  {aasH3}
                </p>
                <div className="rainbow-symmetry-border"></div>
              </div>
              <div
                className="w-full mt-4 opacity-0 transform translate-y-[50px]"
                ref={animationRefs.secondFadeInAnimation}
              >
                <span className="rainbow-text text-4xl sm:text-6xl md:text-5xl lg:text-6xl 2xl:text-8xl pillat-normal">
                  <span
                    ref={animationRefs.thirdFadeInAnimation}
                    className=""
                    dangerouslySetInnerHTML={{ __html: aasH2 }}
                  />
                </span>

                {/*********  Laptop  *********/}

                <span className=" border-l border-gray-400 text-black text-xs 2xl:text-sm pl-4 ml-3 w-[55%] 2xl:w-[45%] xl:max-w-[600px] 2xl:leading-[15px] mt-3 lg:inline-block hidden pillat-thin">
                  <span
                    onClick={() => {
                      triggerBotAnimFunc();
                    }}
                    className="relative w-[100%] "
                  >
                    {aasP}
                    <Link href={`${knowMoreLink}`} className="a-arrow">
                      <span className="text-black font-bold">
                        see to believe
                      </span>
                      <span className="arrow "></span>
                    </Link>
                  </span>
                </span>

                {/*********  Mobile  *********/}

                <span
                  onClick={() => {
                    triggerBotAnimFunc();
                  }}
                  className="w-[100%] lg:hidden block text-black text-xs sm:text-sm mt-2 pillat-thin"
                >
                  {aasP}
                  <Link href={`${knowMoreLink}`} className="a-arrow relative">
                    <span className="text-black font-bold text-[13px]">
                      see to believe
                    </span>
                    <span className="arrow"></span>
                  </Link>
                </span>
              </div>
            </div>

            <div
              className="mb-10 mt-10 md:mx-auto swipper-icons-color-toggle cursor-pointer opacity-0 transform translate-y-[50px]"
              ref={animationRefs.fourthFadeInAnimation}
            >
              <Swiper
                spaceBetween={20}
                slidesPerView={slidesPerView}
                breakpoints={{
                  300: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
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
                    spaceBetween: 60,
                  },
                }}
                speed={700}
                loop={true}
                // navigation={true}
                centeredSlides={false}
                // modules={[Navigation]}
                className="mySwiper "
              >
                {swipperContent.map((item, index) => (
                  <Swiper
                    key={item.id}
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
                    navigation={false}
                    centeredSlides={true}
                    // modules={[Navigation]}
                    className="mySwiper "
                  >
                    {swipperContent.map((item, index) => (
                      <SwiperSlide key={item.id}>
                        <div className="h-[100px] md:h-[150px] lg:h-[200px]">
                          <div className="flex justify-center items-center border border-gray-400 rounded-md">
                            <div className=" md:w-5/12 lg:w-7/12 md:h-28 flex justify-center items-center ">
                              <Image src={item.img} />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="absolute hidden lg:block lg:w-[23vw] xl:w-[20vw] 2xl:w-[17vw]  h-full  top-0 right-0">
            {/* <Image src={square} alt="animation square" className="full" /> */}
            <Rive
              src={animation}
              // stateMachines="bumpy"
              autoplay={true} // Or play={true}
              play={true}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationAndImages;
