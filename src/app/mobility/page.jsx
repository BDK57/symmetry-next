"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import square from "../../../../public/square-neon.png";
import Tabs from "../components/tabs/Tabs";
import AnimationTextReversing from "../components/animationTextReversing/AnimationTextReversing";
import BlackBannerComponent from "../components/blackBannerComponent/BlackBannerComponent";
import ConnectWithUs from "../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../components/footer/Footer";
import Lottie from "react-lottie-player";
import symmetryAnimation from "../../../public/symmetryAnimations/brandsSymmetryAnimation.json";
import irisAnimation from "../../../public/symmetryAnimations/irisAnimation.json";
import symmetryTradeAnimation from "../../../public/symmetryAnimations/symmetryTradeAnimation.json";
import coralAnimation from "../../../public/symmetryAnimations/coralAnimation.json";
import coralPerformanceAnimation from "../../../public/symmetryAnimations/coralPerformanceAnimation.json";
import appabilitiesAnimation from "../../../public/symmetryAnimations/appabilitiesAnimation.json";
import survitAnimation from "../../../public/symmetryAnimations/survitAnimation.json";
import mobitsAnimation from "../../../public/symmetryAnimations/mobitsAnimation.json";
import influenceAiAnimation from "../../../public/symmetryAnimations/influenceAiAnimation.json";
import dummyRiv from "../../../public/symmetryAnimations/home-banner.riv";
import companyAnimation from "../../../public/symmetryAnimations/companyAnimation.json";
import visionAnimation from "../../../public/symmetryAnimations/visionAnimation.json";
import missionAnimation from "../../../public/symmetryAnimations/missionAnimation.json";
import directorsAnimation from "../../../public/symmetryAnimations/directorsAnimation.json";
import initiativeAnimation from "../../../public/symmetryAnimations/initiativeAnimation.json";

import mobilityBannerAnim from "../../../public/symmetryAnimations/mobility-animation-main-rive.riv";
import mobilityAnim1 from "../../../public/symmetryAnimations/mobility-animation-1-rive.riv"
import mobilityAnim2 from "../../../public/symmetryAnimations/mobility-animation-2-rive.riv"
import mobilityAnim3 from "../../../public/symmetryAnimations/mobility-animation-3-rive.riv"
import mobilityAnim4 from "../../../public/symmetryAnimations/mobility-animation-4-rive.riv"

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Rive from "rive-react";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const blackDiv = useRef();
  const redDiv = useRef();
  const aboutDiv = useRef();
  const symmetryDiv = useRef();
  const textDiv = useRef();
  const pinkDiv = useRef();
  const animationDiv = useRef();

  useEffect(() => {
    let mm = gsap.matchMedia();

    gsap.to(blackDiv.current, {
      scrollTrigger: {
        trigger: blackDiv.current,
        // markers: true,
        start: "80px",
        end: "82px",
        onEnter: () => {
          mm.add(
            {
              isMobile: "(min-width : 300px)",
              isTablet: "(min-width : 768px)",
              isDesktop: "(min-width : 1024px)",
              is2xl: "(min-width : 1600px)",
            },
            (context) => {
              let { isMobile, isTablet, isDesktop, is2xl } = context.conditions;
              gsap.to(blackDiv.current, {
                height: ((isMobile = "200px"), (isTablet = "220px")),
              });
              gsap.to(pinkDiv.current, {
                marginTop: "-234px",
              });
            }
          );
          gsap.to(animationDiv.current, {
            opacity: "0",
            transition: "all  0.1s",
            delay: 0.1,
          });
          gsap.to(aboutDiv.current, {
            fontSize: "60px",
          });
          gsap.to(textDiv.current, {
            opacity: "0",
            transition: "all  0.1s",
            delay: 0.1,
          });
        },
        onEnterBack: () => {
          gsap.to(blackDiv.current, {
            height: "384px",
          });
          // gsap.to(symmetryDiv.current, {
          //   fontSize: "60px",
          // });
          gsap.to(aboutDiv.current, {
            fontSize: "96px",
          });
          gsap.to(textDiv.current, {
            opacity: "1",
            transition: "all  0.1s",
            delay: 0.1,
          });
          mm.add(
            {
              is2xl: "(min-width : 1600px)",
              isDesktop: "(min-width : 1024px)",
              isTablet: "(min-width : 768px)",
              isMobile: "(min-width : 300px)",
            },
            (context) => {
              let { is2xl, isDesktop, isTablet, isMobile } = context.conditions;
              gsap.to(pinkDiv.current, {
                marginTop: is2xl ? "-80px" : "-100px",
              });
            }
          );
          gsap.to(animationDiv.current, {
            opacity: "1",
            transition: "all  0.1s",
            delay: 0.1,
          });
        },
      },
    });

    gsap.to(redDiv.current, {
      scrollTrigger: {
        trigger: redDiv.current,
        // markers: true,
        start: "400px",
        end: "620px",
        onEnter: () => {
          gsap.to(pinkDiv.current, {
            scrollTrigger: {
              pin: true,
            },
          });
        },
      },
    });

    mm.revert();
  }, []);

  const aboutH2 = "mobility";
  const aboutText =
    "mobile technologies have transformed business processes and capabilities. we operate at the crossroads of mobility, digital technology and operations to help you create meaning for your customers.";

  const tabsData = [
    {
      id: 0,
      item: "mobile marketing solutions",
      refId: "#companyTabRef",
    },
    {
      id: 1,
      item: "voice & messaging solutions",
      refId: "#visionTabRef",
    },
    {
      id: 2,
      item: "applications & mobility",
      refId: "#missionTabRef",
    },
    {
      id: 3,
      item: "geo-location & tagging",
      refId: "#boardDirectorsTabRef",
    },
  ];

  const customBgColor =
    "linear-gradient(40deg, #5d9c11 60%, #13b0a8 100%)";
  //   const customBorderColor = "#2563eb";
  const toggleBorderMobilityColor = true;
  const connectText = "unlock the power of mobility with us";

  return (
    <>
        <BlackBannerComponent
        aboutText={aboutText}
        aboutH2={aboutH2}
        customBgColor={customBgColor}
        bannerAnimation={mobilityBannerAnim}
      />
      <div ref={redDiv} className="bg-white  pt-[450px]">
        <div
          ref={pinkDiv}
          className="bg-white h-[130px] md:h-[130px] mt-[-80px] 2xl:mt-[-50px] text-black fixed w-full z-10"
        >
          <Tabs
            tabsData={tabsData}
            slidesPerView={4}
            customBgColor={customBgColor}
            // customBorderColor={customBorderColor}
            toggleBorderMobilityColor={toggleBorderMobilityColor}
          />
        </div>
        <div>
          <div>
            <AnimationTextReversing>
              <div
                id="companyTabRef"
                className="company-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    mobile marketing solutions
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p>
                    a developing mobile landscape requires specialized tools.
                    our suite of mobile solutions reaches your customers
                    wherever they are and helps you unlock new potential.
                  </p>
                </div>
                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> sms
                      services
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ivr
                      campaigns
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> mobile
                      advertising
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> mobile
                      analytics & reporting
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={mobilityAnim1} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="visionTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    voice & messaging solutions
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal ">
                  <p className="">
                    the foundation of all mobility is the ability to reach
                    people through calls and messages. we automate and
                    personalize solutions for you to capture untapped internal
                    and external opportunities.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={mobilityAnim2} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    applications & mobility
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    make mobile devices work together with the right
                    applications. we develop and deploy tools to transform
                    engagement, access and measurement for your company and
                    customers.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={mobilityAnim3} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    geo-location & tagging
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    mobile devices are multi-faceted tools of data-collection
                    and analysis. we enable you to maximize their utility in
                    tracking, managing and analyzing your location-based data.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={mobilityAnim4} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>
          </div>
        </div>

        <ConnectWithUs
          bgColor={customBgColor}
          connectText={connectText}
          textColor="text-white"
        />
        <Footer />
      </div>
    </>
  );
};

export default page;
