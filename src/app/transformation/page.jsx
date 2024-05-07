"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import square from "../../../../public/square-neon.png";
import Tabs from "../components/tabs/Tabs";
import AnimationTextReversing from "../components/animationTextReversing/AnimationTextReversing";
import BlackBannerComponent from "../components/blackBannerComponent/BlackBannerComponent";
import ConnectWithUs from "../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../components/footer/Footer";

import transformationAnim1 from "../../../public/symmetryAnimations/transformation-animation-1-rive.riv"
import transformationAnim2 from "../../../public/symmetryAnimations/transformation-animation-2-rive.riv"
import transformationAnim3 from "../../../public/symmetryAnimations/transformation-animation-3-rive.riv"
import transformationAnim4 from "../../../public/symmetryAnimations/transformation-animation-4-rive.riv"
import transformationAnim5 from "../../../public/symmetryAnimations/transformation-animation-50-rive.riv"
import transformationAnim6 from "../../../public/symmetryAnimations/transformation-animation-60-rive.riv"

import transformationBannerAnim from "../../../public/symmetryAnimations/transformation-main-banner-rive.riv";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Rive from "@rive-app/react-canvas";

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
  const aboutH2 = "transformation";
  const aboutText =
    "Digital Technology can move mountains, shape culture, and change people’s perceptions. We envision a future that leverages the best of technology to transformative experiences that aren't possible without it.";

  const tabsData = [
    {
      id: 0,
      item: "data science",
      refId: "#dataScienceTabRef",
    },
    {
      id: 1,
      item: "web,software & application",
      refId: "#webSoftwareTabRef",
    },
    {
      id: 2,
      item: "iot devices",
      refId: "#iosDevicesTabRef",
    },
    {
      id: 3,
      item: "digital strategy",
      refId: "#digitalStrategyTabRef",
    },
    {
      id: 4,
      item: "technology consulting",
      refId: "#technologyConsultingTabRef",
    },
    {
      id: 5,
      item: "digital consultancy",
      refId: "#digitalConsultancyTabRef",
    },
    {
      id: 6,
      item: "investor contacts",
      refId: "#investorContactsTabRef",
    },
  ];

  return (
    <>
      <div>
        <BlackBannerComponent
          aboutText={aboutText}
          aboutH2={aboutH2}
          bannerAnimation={transformationBannerAnim}
        />
        <div ref={redDiv} className="bg-white  pt-[450px]">
          <div
            ref={pinkDiv}
            className="bg-white h-[130px] md:h-[130px] mt-[-80px] 2xl:mt-[-75px] text-black fixed w-full z-10"
          >
            <Tabs tabsData={tabsData} slidesPerView={4} />
          </div>
          <div className="my-10">
            <AnimationTextReversing>
              <div
                id="dataScienceTabRef"
                className="company-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    data science
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p>
                    data makes insight actionable. your data is often scattered
                    across multiple sources and formats. we help you make sense
                    of disparate data, turning it into the key driver for
                    insights, decisions and revenue.
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2 pillat-normal">
                    <li>
                      <span className="text-green-500 mr-1">O</span> data
                      organization
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> data
                      management architecture
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> business &
                      analytics
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> business
                      intelligence dashboards
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> automation
                      & artificial intelligence
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={transformationAnim1} autoplay={true} play={true} />
            </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="webSoftwareTabRef"
                className="company-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    web, software & application
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p>
                    we love leveraging technology to tell stories that capture
                    user's imagination and help brands succeed. we create out of
                    the box interactive solutions that keep your audience
                    engaged across channels, applications and platforms.
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2 pillat-normal">
                    <li>
                      <span className="text-green-500 mr-1">O</span> needs
                      assessment & advising
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> application
                      modernization & upgradation
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> social &
                      hyper gaming
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ux/ui
                      design
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ar/vr
                      implementation & integration
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>{" "}
                      development, deployment & maintenance
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={transformationAnim2} autoplay={true} play={true} />
            </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="iosDevicesTabRef"
                className="company-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    iot devices
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p>
                    we envision a world where all our devices seamlessly
                    connect, learn from each other, and work together. a world
                    where more is possible
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2 pillat-normal">
                    <li>
                      <span className="text-green-500 mr-1">O</span> commerce
                      devices
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> connected
                      technology consulting
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={transformationAnim3} autoplay={true} play={true} />
            </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="digitalStrategyTabRef"
                className="company-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    digital strategy
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p>
                    technology and data are the bridges between new media and
                    how consumers live their lives. with insights, we can
                    personalize your brand, marketing and digital experiences
                    for physical, digital and virtual worlds, to empower your
                    customers with authenticity, value, convenience and choice.
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2 pillat-normal">
                    <li>
                      <span className="text-green-500 mr-1">O</span> brand
                      strategy
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> digital
                      marketing strategy
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> digital
                      customer engagement strategy
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ux/ui
                      design
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ar/vr
                      implementation & integration
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>{" "}
                      development, deployment & maintenance
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={transformationAnim4} autoplay={true} play={true} />
            </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="technologyConsultingTabRef"
                className="company-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    technology consulting
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p>
                    blockchain, metaverse, cryptocurrency and nfts are more than
                    just buzz words for us. we address complex technology
                    changes and navigate you to greater success, helping you to
                    look beyond the obvious and deliver innovative,
                    information-based solutions that enhance your growth.
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2 pillat-normal">
                    <li>
                      <span className="text-green-500 mr-1">O</span> new &
                      emerging technology
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> technology
                      training
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> tech
                      management
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={transformationAnim5} autoplay={true} play={true} />
            </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="digitalConsultancyTabRef"
                className="company-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    digital consulting
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p>
                    as the world shifts to a digital economy and virtual social
                    networks, we help your business adapt quickly and stay ahead
                    of the game. we combine technology expertise with a deep
                    understanding of human behavior and customer experience to
                    ensure your digital transformations are impactful and
                    successful in meeting business goals.
                  </p>
                </div>
                <div className="text-gray-500">
                  <ul className="flex flex-col gap-2 pillat-normal">
                    <li>
                      <span className="text-green-500 mr-1">O</span> new &
                      emerging technology
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> technology
                      training
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> tech
                      management
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
              <Rive src={transformationAnim6} autoplay={true} play={true} />
            </div>
            </AnimationTextReversing>
          </div>

          <ConnectWithUs bgColor="black" textColor="text-white" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
