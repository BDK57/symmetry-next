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

import brandsProductBannerAnim from "../../../public/symmetryAnimations/brands-product-animation-main-rive.riv";
import brandsProductAnim1 from "../../../public/symmetryAnimations/brands-product-animation-1-rive.riv";
import brandsProductAnim2 from "../../../public/symmetryAnimations/brands-product-animation-2-rive.riv";
import brandsProductAnim3 from "../../../public/symmetryAnimations/brands-product-animation-3-rive.riv";
import brandsProductAnim4 from "../../../public/symmetryAnimations/brands-product-animation-4-rive.riv";
import brandsProductAnim4b from "../../../public/symmetryAnimations/brands-product-animation-4-rive.riv";
import brandsProductAnim5 from "../../../public/symmetryAnimations/brands-product-animation-5-rive.riv";
import brandsProductAnim6 from "../../../public/symmetryAnimations/brands-product-animation-6-rive.riv";
import brandsProductAnim7 from "../../../public/symmetryAnimations/brands-product-animation-7-rive.riv";
import brandsProductAnim8 from "../../../public/symmetryAnimations/brands-product-animation-8-rive.riv";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Rive from "@rive-app/react-canvas";
import GsapScrollAnimationComp from "../components/gsapComp/GsapScrollAnimationComp";

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

  const aboutH2 = "brands & products";
  const aboutText =
    "we weave technology-driven ideas into existence across a spectrum of specialized products and services within our four divisions..";

  const tabsData = [
    {
      id: 0,
      item: "symmetry digital",
      refId: "#symmetryDigitalTabRef",
    },
    {
      id: 1,
      item: "iris digital",
      refId: "#irisTabRef",
    },
    {
      id: 2,
      item: "symmetry trade",
      refId: "#symmetryTradeTabRef",
    },
    {
      id: 3,
      item: "coral",
      refId: "#coralTabRef",
    },
    {
      id: 4,
      item: "coral performance",
      refId: "#coralPerformanceTabRef",
    },
    {
      id: 5,
      item: "appabilities",
      refId: "#appabilitiesTabRef",
    },
    {
      id: 6,
      item: "survit",
      refId: "#survitTabRef",
    },
    {
      id: 7,
      item: "mobits",
      refId: "#mobitsTabRef",
    },
    {
      id: 8,
      item: "influense.ai",
      refId: "#influenceTabRef",
    },
  ];

  const animationRefs = GsapScrollAnimationComp();

  return (
    <>
      <BlackBannerComponent
        aboutText={aboutText}
        aboutH2={aboutH2}
        bannerAnimation={brandsProductBannerAnim}
      />
      <div ref={redDiv} className="bg-white  pt-[450px]">
        <div
          ref={pinkDiv}
          className="bg-white h-[130px] md:h-[130px] mt-[-80px] 2xl:mt-[-50px] text-black fixed w-full z-10"
        >
          <Tabs tabsData={tabsData} slidesPerView={4} />
        </div>
        <div>
          <div>
            <AnimationTextReversing>
              <div
                id="symmetryDigitalTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    Symmetry
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    pakistan’s premier full service digital marketing agency,
                    symmetry digital specializes in data-driven and
                    insights-oriented strategies. they are pioneer of innovation
                    and creativity who promise to create engaging brand
                    conversations, ideas that attract more customers, and great
                    experiences across all digital channels.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={brandsProductAnim1} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="irisTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
                ref={animationRefs.firstFadeInAnimation}
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    iris
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    a fast-paced company that is powered by bright minds and big
                    ideas, iris believes in the future of digital and offers a
                    wide range of digital services. they craft strategic plans,
                    create engaging user-experiences, and deliver exceptional
                    creative to build strong brands.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={brandsProductAnim2} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="symmetryTradeTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
                ref={animationRefs.secondFadeInAnimation}
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    Symmetry trade
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    as an authorized channel partner & gold supplier of
                    alibaba.com, they act as a bridge between pakistani brands
                    and the world's largest online marketplace. symmetry trade
                    provides consultancy, knowledge, digital marketing tools and
                    services needed to succeed on the global stage.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={brandsProductAnim3} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="coralTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
                ref={animationRefs.thirdFadeInAnimation}
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    coral
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    built on the belief that good insights lead to better
                    decisions, and better decisions lead to better businesses,
                    corral’s core strength lies in harnessing the power of data
                    to solve complex business problems with a strong commitment
                    to cutting-edge technology. we use data visualization,
                    analysis, big data analytics, machine learning, ai and deep
                    learning to bring data and insights to life.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={brandsProductAnim4} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="coralPerformanceTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
                ref={animationRefs.fourthFadeInAnimation}
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    coral performance
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    corral performance is a comprehensive and insightful unified
                    analytics platform that frees advertisers from manually
                    logging into different paid advertising platforms. it
                    provides performance visualization and insights to identify
                    online advertising performance, generate multi-dimensional
                    reports from raw information for advertisers on all of their
                    advertising channels by collecting data directly from
                    multiple sources, including facebook, google adwords, google
                    display network, youtube and more.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={brandsProductAnim4b} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="appabilitiesTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
                ref={animationRefs.fifthFadeInAnimation}
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    appabilities
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    delivering cutting-edge user interface design (ui) and user
                    experience (ux), appabilities builds world class mobile apps
                    for businesses and startups that want to create amazing user
                    experiences.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={brandsProductAnim5} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="survitTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
                ref={animationRefs.sixthFadeInAnimation}
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    survit
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    survit is an end-to-end saas solution that enables
                    organizations to measure satisfaction level of their
                    customers at scale. the solution is based on csat method of
                    measuring customer satisfaction levels at sales & service
                    touchpoints. the solution is suitable for both external &
                    internal customers hence can be utilized across all
                    industries, specially banking and retail. the solution is
                    based on customer metrics and parameters that differentiate
                    a satisfied customer from a dissatisfied one. the solution
                    offers following key features:
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2 pillat-normal">
                    <li>
                      <span className="text-green-500 mr-1">O</span> mobile
                      interface
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ui/ux
                      design to maximize engagement
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> qr reader
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>{" "}
                      conversational & customizable dashboard
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> p2p
                      comparision
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>{" "}
                      comprehensive reports
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={brandsProductAnim6} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="mobitsTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
                ref={animationRefs.seventhFadeInAnimation}
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    mobits
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    mobits is a cloud-based platform to manage mobile marketing,
                    reporting and user engagement. it enables clients to manage
                    mobile marketing campaigns, run analytics & reports in
                    real-time and deliver push notifications to users. <br></br>{" "}
                    <br></br> the platform is a unique, white label, saas
                    on-premise solution that can leverage your existing
                    infrastructure to deliver real-time alerts, information, and
                    communication from customers to enterprise. this solution
                    will improve any company's business allowing them to reach
                    consumers with targeted content, messaging, coupons and
                    alerts regarding new products or sales coupons.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={brandsProductAnim7} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="influenceTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
                ref={animationRefs.eightFadeInAnimation}
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    influence.ai
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    one-stop shop ai powered influencer marketing solution for
                    the data-driven age. a unified influencer marketing platform
                    to make discovery, engagement, audience analysis, campaign
                    management, real-time reporting and growth simple while
                    giving you access to over 100 million influencers.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={brandsProductAnim8} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>
          </div>
        </div>

        <ConnectWithUs bgColor="black" textColor="text-white" />
        <Footer />
      </div>
    </>
  );
};

export default page;
