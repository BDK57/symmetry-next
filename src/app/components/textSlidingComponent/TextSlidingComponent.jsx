"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../homeComponents/Dummy.css";
import GsapScrollAnimationComp from "../../components/gsapComp/GsapScrollAnimationComp";
import Link from "next/link";
import GsapBottomAnimation from "../gsapComponent/GsapBottomAnimation";
gsap.registerPlugin(ScrollTrigger);

const TextSlidingComponent = ({
  businessTitle,
  businessText,
  knowMore,
  getLink,
  clientTitle,
  clientText,
  isBorder,
  isImageSwipper,
  slidesPerView,
  swipperGap,
  swipperContent,
  clientMarque,
  businessMarque,
  paddingBottom,
  componentMarginTop,
}) => {

  const [triggerBottomAnimation, setTriggerBottomAnimation] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  const triggerBotAnimFunc = () => {
    setTriggerBottomAnimation(true);
  };

  const animationRefs = GsapScrollAnimationComp();

  // const getLink = "google"

  return (
    <>
    {triggerBottomAnimation && <GsapBottomAnimation getLink={getLink} />}

    <div className="">
      <div
        className={`mx-3 mb-10 mt-5 lg:${componentMarginTop} md:mt-36 md:mx- overflow-hidden`}
      >
        <div
          className={`w-full lg:ml-[48px] ${
            isBorder
              ? " w-[100%] lg:w-[35%] border-b border-transparent pb-1 transform translate-y-[50px]"
              : ""
          }  w-[40%]`}
        >
          <h2
            className={`text-gray-600 text-4xl lg:text-4xl opacity-0 pillat-normal pb-3 lg:pb-0 transform translate-y-[50px]`}
            ref={animationRefs.firstFadeInAnimation}
          >
            {businessTitle || clientTitle}
          </h2>
          <div className={` ${isBorder ? "rainbow-symmetry-border mt-2" : ""}`}></div>
        </div>

        {businessMarque && (
          <div
            className="marquee opacity-0 transform translate-y-[50px] mt-0 lg:-mt-7"
            ref={animationRefs.secondFadeInAnimation}
          >
            <ul className="marquee-content gap-10">
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                skillfully
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                solving
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                challenges
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                skillfully
              </li>
              <li className="!text-[160px] !2xl:text-[200px]     rainbow-text">
                solving
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text ">
                challenges
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                skillfully
              </li>
              <li className="!text-[160px] !2xl:text-[200px]    rainbow-text">
                solving
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text ">
                challenges
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                skillfully
              </li>
              <li className="!text-[160px] !2xl:text-[200px]   rainbow-text">
                solving
              </li>
              <li className="!text-[160px] !2xl:text-[200px]   rainbow-text">
                challenges
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                skillfully
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                solving
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                challenges
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                skillfully
              </li>
              <li className="!text-[160px] !2xl:text-[200px]     rainbow-text">
                solving
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text ">
                challenges
              </li>
            </ul>
          </div>
        )}

        {clientMarque && (
          <div
            className="marquee opacity-0 transform translate-y-[50px] mt-2 lg:mt-8"
            ref={animationRefs.thirdFadeInAnimation}
          >
            <ul class="marquee-content gap-10">
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                transforming
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                your
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                possibilities
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                transforming
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                your
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                possibilities
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                transforming
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                your
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                possibilities
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                transforming
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                your
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                possibilities
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                transforming
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                your
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                possibilities
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                transforming
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                your
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                possibilities
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                transforming
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                your
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                possibilities
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                transforming
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                your
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                possibilities
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                transforming
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                your
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                possibilities
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  !text-black">
                transforming
              </li>
              <li className="!text-[160px] !2xl:text-[200px] rainbow-text ">
                your
              </li>
              <li className="!text-[160px] !2xl:text-[200px]  rainbow-text  ">
                possibilities
              </li>
            </ul>
          </div>
        )}

        <div
          onClick={() => {
            triggerBotAnimFunc();
          }}
          className="sm:w-[80%] lg:max-w-[600px] "
        >
          <p
            className="text-xs lg:text-sm text-gray-600 font-[300] mt leading-[16px] pillat-normal opacity-0 lg:ml-[48px] transform translate-y-[50px]"
            ref={animationRefs.fourthFadeInAnimation}
          >
            {businessText || clientText}
            <Link href={"clients"} class="a-arrow relative">
              <span className="text-black font-bold text-[14px] sm:text-[12px] sm:ml-0 ml-1 ">
                see it for yourself
              </span>
              <span class="arrow"></span>
            </Link>
          </p>
        </div>

        {isImageSwipper && (
          <div
            className="mt-9 swipper-icons-color-toggle opacity-0 transform translate-y-[50px] "
            ref={animationRefs.fifthFadeInAnimation}
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
              modules={[Autoplay, Navigation]}
              speed={700}
              loop={true}
              // navigation={true}
              centeredSlides={true}
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
                <>
                  <SwiperSlide>
                    <div className="cursor-pointer">
                      <div className="flex justify-center items-center border border-gray-400 rounded-md">
                        <div className=" md:w-5/12 lg:w-8/12 md:h-24 flex justify-center items-center ">
                          <Image src={item.img} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>

            <div className="swiper-navigation-buttons flex justify-center  gap-2 lg:gap-[10px] 2xl:gap-3 w-full mt-16 mb-3">
              <button
                className={`swiper-button-prev $ !static custom-arrow-border rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8 `}
              ></button>
              <button
                className={`swiper-button-next !static custom-arrow-border  rounded-md rotate-[45deg] !w-7 !h-7 md:!w-8 md:!h-8 lg:!w-8 lg:!h-8`}
              ></button>
            </div>
          </div>
        )}

        {/* <div className="flex justify-center items-center my-20">
        <h2 className="text-5xl md:text-6xl  text-[#13a772]">Swipper Here</h2>
      </div> */}
      </div>
    </div>
    </>
  );
};

export default TextSlidingComponent;
