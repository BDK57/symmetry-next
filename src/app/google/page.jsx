"use client";
import React, { useEffect, useRef } from "react";
import BlackBannerComponent from "../components/blackBannerComponent/BlackBannerComponent";
import Tabs from "../components/tabs/Tabs";
import AnimationTextReversing from "../components/animationTextReversing/AnimationTextReversing";
import Image from "next/image";
// import square from "../../../../public/square-neon.png";
import ConnectWithUs from "../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../components/footer/Footer";
import Lottie from "react-lottie-player";

// import microsoftAnimation from "../../../public/symmetryAnimations/microsoftAnimation.json";
import affiliationAnimation1 from "../../../public/symmetryAnimations/affiliation-animation-1-rive.riv";
import affiliationAnimation2 from "../../../public/symmetryAnimations/affiliation-animation-2-rive.riv";
import affiliationAnimation3 from "../../../public/symmetryAnimations/affiliation-animation-3-rive.riv";
import affiliationAnimation4 from "../../../public/symmetryAnimations/affiliation-animation-last-rive.riv";

import affiliationBannerAnim from "../../../public/symmetryAnimations/affiliation-animation-main-rive.riv";
import GsapScrollAnimationComp from "../components/gsapComp/GsapScrollAnimationComp";

import Rive from "@rive-app/react-canvas";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

  const aboutH2 = "affiliations & partnerships";
  const aboutText =
    "through our network, we are integrating you with a world that keeps pace with technology and change, enables simplicity from complexity and shapes the future.";

  const tabsData = [
    {
      id: 0,
      item: "google",
    },
    {
      id: 1,
      item: "microsoft",
    },
    {
      id: 2,
      item: "alibaba",
    },
    {
      id: 3,
      item: "iso 9001:2015",
    },
  ];

  const animationRefs = GsapScrollAnimationComp();

  return (
    <>
      <BlackBannerComponent
        aboutText={aboutText}
        aboutH2={aboutH2}
        bannerAnimation={affiliationBannerAnim}
      />
      <div ref={redDiv} className="bg-white  pt-[450px]">
        <div
          ref={pinkDiv}
          className="bg-white h-[130px] md:h-[130px] mt-[-80px] 2xl:mt-[-50px] text-black fixed w-full z-10"
        >
          <Tabs tabsData={tabsData} slidesPerView={4} />
        </div>

        <AnimationTextReversing>
          <div className="company-div flex flex-col gap-5 lg:w-6/12">
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                google
              </h2>
            </div>
            <div className="text-gray-500 text-[14px] pillat-normal">
              <p>
                Symmetry Group Limited is a Google Partner with expert-level
                Google Ad products knowledge. Partners receive training,
                support, and insights that keep their skills sharp and help
                drive campaign success and deliver higher ROIs.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
            <Rive src={affiliationAnimation1} autoplay={true} play={true} />
          </div>
        </AnimationTextReversing>

        <AnimationTextReversing flexDirection="flex-row-reverse">
          <div
            className="company-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
            ref={animationRefs.firstFadeInAnimation}
          >
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light pillat-normal">
                microsoft
              </h2>
            </div>
            <div className="text-gray-500 text-[14px] pillat-normal">
              <p>
                Symmetry Group is a Microsoft Partner. This partnership helps
                the Company in bringing efficiency to its processes and
                enhancing its capabilities by providing an access to business
                guidance along with a pool of specialized training and marketing
                products, applications and tools from the tech giant.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
            <Rive src={affiliationAnimation2} autoplay={true} play={true} />
          </div>
        </AnimationTextReversing>

        <AnimationTextReversing>
          <div
            className="company-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
            ref={animationRefs.secondFadeInAnimation}
          >
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                ali baba
              </h2>
            </div>
            <div className="text-gray-500 text-[14px] ">
              <p>
                symmetry Group is a channel partner of Alibaba.com. Under the
                contract the company is responsible for:
              </p>
            </div>
            <div className="text-gray-500">
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="text-green-500 mr-1">O</span> promoting and
                  marketing the Alibaba.com International Website and the
                  Memberships
                </li>
                <li>
                  <span className="text-green-500 mr-1">O</span> soliciting,
                  sourcing & selling memberships
                </li>
                <li>
                  <span className="text-green-500 mr-1">O</span> providing
                  customer support services to the members including but not
                  limited to online and onsite support, customer enquiries,
                  complaints handling and other after-sales support as required
                  under the relevant customer care programs of alibaba.com
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
            <Rive src={affiliationAnimation3} autoplay={true} play={true} />
          </div>
        </AnimationTextReversing>

        <AnimationTextReversing flexDirection="flex-row-reverse">
          <div
            className="company-div flex flex-col gap-5 lg:w-6/12 opacity-0 transform translate-y-[20px]"
            ref={animationRefs.thirdFadeInAnimation}
          >
            <div className="text-black">
              <h2 className="text-5xl lg:text-6xl  2xl:text-7xl font-light">
                iso
              </h2>
            </div>
            <div className="text-gray-500 text-[14px] ">
              <p>
                the iso 9001:2015 standard certification pertains to quality
                management system within an organization. this framework helps
                organizations to base their operating standards on a number of
                quality management principles including a strong customer focus,
                the motivation and implication of top management, the process
                approach and continual improvement to ensure the customers get
                consistent, good-quality products and services.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-5/12 lg:h-72 lg:mt-0 mt-10">
            <Rive src={affiliationAnimation4} autoplay={true} play={true} />
          </div>
        </AnimationTextReversing>

        <ConnectWithUs bgColor="black" textColor="text-white" />
        <Footer />
      </div>
    </>
  );
};

export default page;
