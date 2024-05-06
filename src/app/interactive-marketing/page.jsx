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

import interactiveBannerAnim from "../../../public/symmetryAnimations/interactive-animation-main-rive.riv";
import interactiveAnim1 from "../../../public/symmetryAnimations/interactive-animation-1-rive.riv"
import interactiveAnim2 from "../../../public/symmetryAnimations/interactive-animation-2-rive.riv"
import interactiveAnim3 from "../../../public/symmetryAnimations/interactive-animation-3-rive.riv"
import interactiveAnim4 from "../../../public/symmetryAnimations/interactive-animation-4-rive.riv"
import interactiveAnim5 from "../../../public/symmetryAnimations/interactive-animation-5-rive.riv"
import interactiveAnim6 from "../../../public/symmetryAnimations/interactive-animation-6-rive.riv"
import interactiveAnim7 from "../../../public/symmetryAnimations/interactive-animation-7-rive.riv"
import interactiveAnim8 from "../../../public/symmetryAnimations/interactive-animation-8-rive.riv"
import interactiveAnim9 from "../../../public/symmetryAnimations/interactive-animation-9-rive.riv"


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Rive from "rive-react";
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

  const aboutH2 = "interactive marketing";
  const aboutText =
    "we offer a unified platform of technology solutions, creative thinking, brand activation, user experience design, and management services that help organizations build better relationships with their customers.";

  const tabsData = [
    {
      id: 0,
      item: "strategy",
      refId: "#companyTabRef",
    },
    {
      id: 1,
      item: "digital advertising",
      refId: "#visionTabRef",
    },
    {
      id: 2,
      item: "creative & content",
      refId: "#missionTabRef",
    },
    {
      id: 3,
      item: "design",
      refId: "#boardDirectorsTabRef",
    },
    {
      id: 4,
      item: "social media marketing",
      refId: "#initiativesTabRef",
    },
    {
      id: 5,
      item: "performance marketing",
      refId: "#initiativesTabRef",
    },
    {
      id: 6,
      item: "influencer marketing",
      refId: "#initiativesTabRef",
    },
    {
      id: 7,
      item: "digital pr",
      refId: "#initiativesTabRef",
    },
    {
      id: 8,
      item: "search",
      refId: "#initiativesTabRef",
    },
  ];

  const customBgColor = "linear-gradient(40deg, #0d53bd 40%, #13b0a8 90%)";
  const customBorderColor = "#2563eb";
  const toggleBorderColor = true;
  const connectText = "reimagine your customer interactions with us";

  const InteractivebannerTop = "0px"
  const InteractivebannerLeft = "38%"

  const animationRefs = GsapScrollAnimationComp();

  const noRainbowText = true

  return (
    <>
      <BlackBannerComponent
        aboutText={aboutText}
        aboutH2={aboutH2}
        noRainbowText={noRainbowText}
        customBgColor={customBgColor}
        bannerAnimation={interactiveBannerAnim}
        bannerTop={InteractivebannerTop}
        bannerLeft={InteractivebannerLeft}
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
            customBorderColor={customBorderColor}
            toggleBorderColor={toggleBorderColor}
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
                    strategy
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p>
                    technology and data are the bridges between new media and
                    how consumers live their lives. with insights, we can
                    personalize your brand, marketing and digital experiences to
                    empower your customers with authenticity, value, convenience
                    and choice.
                  </p>
                </div>
                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> brand
                      strategy{" "}
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> interactive
                      digital marketing strategy
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> digital
                      customer engagement strategy
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={interactiveAnim1} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="visionTabRef"
                className="vision-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    digial advertising
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal ">
                  <p className="">
                    we make informed media decisions based on rigorous data and
                    models. from one-off ad tests to transformational media
                    plans, our teams serve all your needs, helping you gain
                    unprecedented visibility into the effectiveness of your
                    advertising, leading to improved results and return on
                    investment.
                  </p>
                </div>
                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> media
                      planning
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> media
                      buying
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> operations,
                      trafficking & optimization
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> monitoring
                      & tracking
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={interactiveAnim2} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    creative & content
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    we are essential collaborators in the development and
                    production of engaging, interactive and immersive content
                    across many digital channels. from concept to completion, we
                    produce custom-branded experiences that drive brand affinity
                    and buzzworthy results for your audience.
                  </p>
                </div>

                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> ideas &
                      concepts
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>{" "}
                      storytelling
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>content
                      production
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> content
                      management
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> content
                      operations
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> immersive
                      experiences
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> animations
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={interactiveAnim3} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    design
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    we harness creativity and technology to create incredible,
                    immersive experiences. our passion is crafting experiences
                    that people love and remember.
                  </p>
                </div>

                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> digital &
                      physical experience design
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> augmented &
                      virtual experiences design
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>web & mobile
                      app design
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> ui/ux
                      design
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={interactiveAnim4} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    social media marketing
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    we help transform businesses by creating and implementing
                    impactful social media strategies. we enable you to optimize
                    your online communities by listening and engaging with the
                    right audience, based on brand and industry best practices.
                  </p>
                </div>

                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> community &
                      asset management
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>campaign
                      design & management
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>social
                      content creation & curation
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> social
                      listening & sentiment management
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> social
                      audit
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> competitive
                      monitoring
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={interactiveAnim5} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    performance marketing
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    performance is more than just managing campaigns. we help
                    you create data-driven, technology-powered, personalized
                    experiences for every customer and generate critical
                    insights for your business to thrive in the digital age,
                    giving you the best bang for your buck.
                  </p>
                </div>

                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span>campaign
                      management
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>
                      personalization
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>optimization
                      & automation
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> data
                      integration, ai/ml & automation
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> adtech
                      strategies & implementation
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> lead
                      generation & conversion
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={interactiveAnim6} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    influencer marketing
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    match making between brands and content creators requires
                    deep expertise and an in-depth understanding of the
                    influencer ecosystem. the key to success is a unique
                    approach tailored to your needs. we connect you with the
                    right influencer at the right time, to transform your brand
                    into a captivating story to be told by the right people.
                  </p>
                </div>

                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> influencer
                      matchmaking & planning
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>develop
                      custom influencer campaigns
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>influencer
                      onboarding, relationship & management
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> tracking,
                      reporting & roi measurement
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={interactiveAnim7} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing flexDirection="flex-row-reverse">
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    digital pr
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    we adopt a proactive approach to managing and building
                    relationships with key stakeholders, opinion leaders, media
                    and others. we help generate effective and persuasive
                    content that can elevate your brand, improve your reputation
                    and profile.
                  </p>
                </div>

                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span>reputation
                      management
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>
                      sentiment management
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span> publishers
                      relationship & management
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={interactiveAnim8} autoplay={true} play={true} />
              </div>
            </AnimationTextReversing>

            <AnimationTextReversing>
              <div
                id="missionTabRef"
                className="mission-div flex flex-col gap-5 lg:w-6/12"
              >
                <div className="text-black">
                  <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                    search
                  </h2>
                </div>
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p className="">
                    whether you want to dominate competition on search or reach
                    new customers who are interested in your products and
                    services, we never stop thinking about your success. we have
                    the knowledge, experience and expertise to deliver
                    high-quality strategies that generate meaningful results
                  </p>
                </div>

                <div className="text-gray-500 pillat-normal">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-green-500 mr-1">O</span> search
                      engine optimization
                    </li>
                    <li>
                      <span className="text-green-500 mr-1">O</span>paid search
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
                <Rive src={interactiveAnim9} autoplay={true} play={true} />
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
