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
import commerceBannerAnim from "../../../public/symmetryAnimations/commerce-animation-main-2-rive.riv";

import commerceAnim1 from "../../../public/symmetryAnimations/commerce-animation-00-rive.riv"
import commerceAnim2 from "../../../public/symmetryAnimations/commerce-animation-1-rive.riv"
import commerceAnim3 from "../../../public/symmetryAnimations/commerce-animation-3-rive.riv"
import commerceAnim4 from "../../../public/symmetryAnimations/commerce-animation-4-rive.riv"

// import dummyRiv from "../../../public/symmetryAnimations/company-animation-1-rive.riv";

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

  const aboutH2 = "commerce";
  const aboutText =
    "digital commerce lets you sell anywhere, anytime, and on any device. we help your customers find your products regardless of whether they’re at home, in the office, or in line at the grocery store.";

  const tabsData = [
    {
      id: 0,
      item: "digital commerce design",
      refId: "#companyTabRef",
    },
    {
      id: 1,
      item: "back-end system development",
      refId: "#visionTabRef",
    },
    {
      id: 2,
      item: "third party integrations",
      refId: "#missionTabRef",
    },
    {
      id: 3,
      item: "global e-commerce deployment",
      refId: "#boardDirectorsTabRef",
    },
  ];

  const customBgColor = "linear-gradient(40deg, rgb(19 156 17) 60%, rgb(242 213 0) 100%)";
//   const customBorderColor = "#2563eb";
  const toggleBorderColor = true;
  const connectText = "ignite your product discovery with us";

  return (
    <>
      <BlackBannerComponent aboutText={aboutText} aboutH2={aboutH2} bannerAnimation={commerceBannerAnim} />
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
            // toggleBorderColor={toggleBorderColor}
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
                    digital commerce design
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p>
                    smart e-commerce solutions, personalized for your specific
                    needs, help grow your business. our advisory and hands-on
                    support provides advanced e-commerce services for your
                    online businesses.
                  </p>
                </div>
                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> webstores &
                      e-commerce consulting
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> commerce
                      platform integrations
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> alibaba
                      commerce partner
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> instant
                      commercial fulfillment (magic button)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={commerceAnim1} autoplay={true} play={true} />
            </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="visionTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    back-end system development
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal ">
                  <p className="">
                    every resilient, future-proofed system needs a strong
                    foundation. we create robust technological structures
                    tailored for your current and future business needs.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={commerceAnim2} autoplay={true} play={true} />
            </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    third party integrations
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    we know how to play well with others. our ability to
                    seamlessly link your commerce platforms with external
                    partners and services enhance across-the-board functionality
                    and capability.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={commerceAnim3} autoplay={true} play={true} />
            </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    global e-commerce deployment
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    reaching customers anywhere in the world requires
                    exceptional understanding of the digital commerce value
                    chain. we are partnered with the world's largest e-commerce
                    platform (alibaba) to enable and support your business.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={commerceAnim4} autoplay={true} play={true} />
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
