"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "../../components/animationAndSwipperComponent/AnimationAndSwipper.css";
import "swiper/css";
import "swiper/css/navigation";
import Lottie from "react-lottie-player";
// import square from "../../../../public/square-neon.png";
import rivAnimation from "../../../../public/symmetryAnimations/home-banner.riv";
import Rive from "@rive-app/react-canvas";
import Link from "next/link";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";
import GsapBottomAnimation from "../gsapComponent/GsapBottomAnimation";
import GsapScrollAnimationComp from "../../components/gsapComp/GsapScrollAnimationComp";

const AnimationAndSwipper = ({
  interactiveTitle,
  interactiveHeading,
  interactiveText,
  mobilityTitle,
  mobilityHeading,
  mobilityText,
  aasKnowMore,
  knowMoreLink,
  getLink,
  swipperContent,
  animation,
}) => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [triggerBottomAnimation, setTriggerBottomAnimation] = useState(false);

  const toTransformationBlackRef = useRef(null);

  /**** Gsap Funcions ****/

  const triggerBotAnimFunc = () => {
    setTriggerBottomAnimation(true);
  };

  const handleActive = (swiper) => {
    setActive(swiper.realIndex);
  };

  const [activeAni, setActiveAni] = useState();

  const [borderHover, setBorderHover] = useState();
  const [borderHover2, setBorderHover2] = useState();

  const hoverFunc = (id) => {
    setBorderHover("border border-white transition-all ease-in-out duration-1000");
    setBorderHover2("border border-white transition-all ease-in-out duration-1000");
    setActiveAni(id);
  };

  const hoverFuncOut = () => {
    setBorderHover("border border-gray-300 transition-all ease-in-out duration-1000");
    setBorderHover2("border border-gray-300 transition-all ease-in-out duration-1000");
  };

  const animationRefs = GsapScrollAnimationComp();

  return (
    <>
      <div className="relative">
        {triggerBottomAnimation && <GsapBottomAnimation getLink={getLink} />}
        <div className="relative mx-3 md:mx-12 lg:ml-12 lg:mr-[2px] lg:w-[%]">
          <div className=" lg:flex justify-between items-center">
            <div className="lg:w-[62%]">
              <div className="mt-5">
                <div
                  className="pt-6 opacity-0 transform translate-y-[50px]"
                  ref={animationRefs.firstFadeInAnimation}
                >
                  <p className="text-3xl xl:text-4xl mb-4 text-black pillat-normal">
                    {interactiveTitle || mobilityTitle}
                  </p>
                  <div className="rainbow-symmetry-border"></div>
                </div>
                <div
                  className="w-full mt-4 opacity-0 transform translate-y-[50px]"
                  ref={animationRefs.secondFadeInAnimation}
                >
                  <span className="rainbow-text text-4xl sm:text-6xl md:text-5xl lg:text-5xl 2xl:text-7xl pillat-normal">
                    <span
                      ref={animationRefs.thirdFadeInAnimation}
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: interactiveHeading || mobilityHeading,
                      }}
                    />
                  </span>

                  {/*********  Desktop  *********/}

                  <span className="border-l border-gray-400 text-black text-xs 2xl:text-sm pl-4 ml-3 w-[55%] 2xl:w-[45%] xl:max-w-[600px] 2xl:leading-[15px] mt-3 lg:inline-block hidden pillat-thin">
                    <span      onClick={() => {
                    triggerBotAnimFunc();
                  }} className="w-[100%] relative">
                      {interactiveText || mobilityText}
                      <Link href={knowMoreLink} class="a-arrow">
                        <span className="text-black font-bold">know more</span>
                        <span class="arrow"></span>
                      </Link>
                    </span>
                  </span>

                  {/*********  Mobile  *********/}

                  <span      onClick={() => {
                    triggerBotAnimFunc();
                  }} className="w-[100%] lg:hidden block text-black text-sm sm:text-sm mt-2 pillat-thin">
                    {interactiveText || mobilityText}
                    <Link href={""} class="a-arrow relative">
                      {" "}
                      <span className="text-black font-bold">
                        know more{" "}
                      </span>{" "}
                      <span class="arrow"></span>
                    </Link>
                  </span>
                </div>
              </div>

              <div
                className="mb-10 mt-10 md:mx-auto opacity-0 transform translate-y-[50px]"
                ref={animationRefs.fourthFadeInAnimation}
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
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  modules={[Autoplay, Navigation]}
                  speed={700}
                  loop={true}
                  onSlideChange={handleActive}
                  autoplay={{
                    delay: 1000,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  centeredSlides={true}
                  className="mySwiper "
                >
                  {swipperContent.map((item, index) => (
                    <SwiperSlide
                    className="h-[px] relative overflow-hidden cursor-pointer"
                    key={item.id}
                    onClick={() => {
                      triggerBotAnimFunc();
                    }}
                    onMouseOver={() => hoverFunc(item.id)}
                    onMouseLeave={() => hoverFuncOut()}
                    >
                      <div
                        className={`rounded-lg swipper-hover-class transition-all ease-in-out duration-300`}
                      >
                        <div
                          className={`border border-gray-400 rounded-lg flex flex-col justify-start items-start py-[35px] px-[20px] h-[300px] ${
                            active == item.id
                              ? "swipper-active-class transition-all duration-500 ease-in-out"
                              : ""
                          } `}
                        >
                          <div className="">
                            <h2 className="text-3xl w-[120px] xl:w-[170px]  flex items-end min-h-[110px] mb-2 leading-[30px] pillat-thin">
                              {item.h2}
                            </h2>
                            <p className=" text-xs leading-[17px] pillat-normal">
                              {item.text}
                            </p>
                          </div>
                        </div>
                        
                      <div
                          className={`absolute top-[-120px] right-[-230px] border border-gray-300 rounded-[50px] w-72 h-72  ${
                            activeAni == index ? borderHover : ""
                          } `}
                        ></div>
                        <div
                          className={`absolute top-[-70px] right-[-270px] border border-gray-300 rounded-[50px] w-72 h-72 ${
                            activeAni == index ? borderHover2 : ""
                          }`}
                        ></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-navigation-buttons flex justify-center gap-2 lg:gap-[10px] 2xl:gap-3 w-full mt-10">
                  <button
                    className={`swiper-button-prev  !static custom-arrow-border rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8 `}
                  ></button>
                  <button
                    className={`swiper-button-next  !static custom-arrow-border  rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8`}
                  ></button>
                </div>
              </div>
            </div>
            <div className="absolute hidden lg:block lg:w-[23vw] xl:w-[16vw] 2xl:w-[14vw] h-full  top-0 right-0">
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
      </div>
    </>
  );
};

export default AnimationAndSwipper;
