"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { Navigation } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Tabs = ({
  tabsData,
  slidesPerView,
  customBorderColor,
  toggleBorderColor,
  toggleBorderMobilityColor,
}) => {
  const [activeBg, setActiveBg] = useState(0);
  const [getTabsRefId, setTabsRefId] = useState();


  useEffect(() => {
    // Changing li item color when reaching to its div
    tabsData.forEach((item, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item.refId,
          start: "top 65%",
          end: "bottom center",
          toggleActions: "play none none none",
          markers: false,
          onEnter: () => {
            setActiveBg(index); // Change active background index
          },
          onEnterBack: () => {
            setActiveBg(index); // Change active background index
          },
        },
      });

      return () => {
        tl.kill();
      };
    });
  }, []);

  return (
    <div className="text-black">
      <div className="w-[80%] mx-auto">
        {/* <div className="mt-9 border border-[#4ade80] rounded-full "*/}
        <div
          className="mt-9 border rounded-full overflow-hidden"
          style={{ borderColor: `${customBorderColor || "#4ade80"}` }}
        >
          <Swiper
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
                spaceBetween: 0,
              },
            }}
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            speed={700}
            // onSlideChange={(swiper) => updateShownArray(swiper)}
            className="mySwiper my-tabs-swipper"
          >
            <>
              {tabsData.map((item, index, array) => (
                <>
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: item.refId, offsetY: 330 },})
                      }
                      className={`${
                        toggleBorderColor
                          ? "tabs-interactive-custom-bg"
                          : toggleBorderMobilityColor
                          ? "tabs-mobility-custom-bg"
                          : "tabs-custom-bg"
                      } cursor-pointer 
                    py-[10px] ${activeBg === index && toggleBorderColor ? "tabs-interactive-custom-bg" : activeBg === index ? "ss-custom-bg" : "" }`}
                    >
                      <div className="text-center">
                        <div className="">{item.item}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </>
          </Swiper>

          <div className="swiper-navigation-buttons swipper-tabs-navigation-buttons">
            <button
              className={`tabs-arrow-color swiper-button-prev swipper-button-tabs-prev `}
            ></button>
            <button
              className={`tabs-arrow-color swiper-button-next swipper-button-tabs-next`}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

// tabs-mobility-custom-bg
