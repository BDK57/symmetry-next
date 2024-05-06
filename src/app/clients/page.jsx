"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import square from "../../../../public/square-neon.png";
import BlackBannerComponent from "../components/blackBannerComponent/BlackBannerComponent";
import Tabs from "../components/tabs/Tabs";
import SimpleSwipper from "../components/simpleSwipper/SimpleSwipper";
import ConnectWithUs from "../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../components/footer/Footer";
import jazzLogo from "../../../public/jazz-logo.webp";
import hblLogo from "../../../public/hbl-logo.webp";
import peekFreansLogo from "../../../public/peek-freans-logo.webp";
import realEstateLogo from "../../../public/real-estate-logo.webp";
import pharmaceuticalLogo from "../../../public/pharmaceutical-logo.webp";
import othersKhaadiLogo from "../../../public/others-khaadi-logo.webp";

import clientBannerAnim from "../../../public/symmetryAnimations/client-animation-main-rive.riv";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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

  const aboutH2 = "clients";
  const aboutText =
    "for organizations on the journey towards innovation, growth and digital-first thinking, we assist in building and deploying the right solutions, integrated to business needs and customized for business success.";

  const tabsData = [
    {
      id: 0,
      item: "telecom",
      refId: "#telecomTabRef",
    },
    {
      id: 1,
      item: "banking & finance",
      refId: "#bangkingTabRef",
    },
    {
      id: 2,
      item: "fmcg",
      refId: "#fmcgTabRef",
    },
    {
      id: 3,
      item: "real estate",
      refId: "#realEstateTabRef",
    },
    {
      id: 4,
      item: "pharmaceutical",
      refId: "#pharmaceuticalTabRef",
    },
    {
      id: 5,
      item: "others",
      refId: "#othersTabRef",
    },
  ];

  const telecomSwipperContent = [
    {
      id: 0,
      img: jazzLogo,
    },
    {
      id: 1,
      img: jazzLogo,
    },
    {
      id: 2,
      img: jazzLogo,
    },
    {
      id: 3,
      img: jazzLogo,
    },
    {
      id: 4,
      img: jazzLogo,
    },
    {
      id: 5,
      img: jazzLogo,
    },
    {
      id: 6,
      img: jazzLogo,
    },
    {
      id: 7,
      img: jazzLogo,
    },
    {
      id: 8,
      img: jazzLogo,
    },
  ];

  const bankingSwipperContent = [
    {
      id: 0,
      img: hblLogo,
    },
    {
      id: 1,
      img: hblLogo,
    },
    {
      id: 2,
      img: hblLogo,
    },
    {
      id: 3,
      img: hblLogo,
    },
    {
      id: 4,
      img: hblLogo,
    },
    {
      id: 5,
      img: hblLogo,
    },
    {
      id: 6,
      img: hblLogo,
    },
    {
      id: 7,
      img: hblLogo,
    },
    {
      id: 8,
      img: hblLogo,
    },
  ];

  const fmcgSwipperContent = [
    {
      id: 0,
      img: peekFreansLogo,
    },
    {
      id: 1,
      img: peekFreansLogo,
    },
    {
      id: 2,
      img: peekFreansLogo,
    },
    {
      id: 3,
      img: peekFreansLogo,
    },
    {
      id: 4,
      img: peekFreansLogo,
    },
    {
      id: 5,
      img: peekFreansLogo,
    },
    {
      id: 6,
      img: peekFreansLogo,
    },
    {
      id: 7,
      img: peekFreansLogo,
    },
    {
      id: 8,
      img: peekFreansLogo,
    },
  ];

  const realEstateContent = [
    {
      id: 0,
      img: realEstateLogo,
    },
    {
      id: 1,
      img: realEstateLogo,
    },
  ];

  const pharmaceuticalContent = [
    {
      id: 0,
      img: pharmaceuticalLogo,
    },
    {
      id: 1,
      img: pharmaceuticalLogo,
    },
    {
      id: 2,
      img: pharmaceuticalLogo,
    },
  ];

  const othersSwipperContent = [
    {
      id: 0,
      img: othersKhaadiLogo,
    },
    {
      id: 1,
      img: othersKhaadiLogo,
    },
    {
      id: 2,
      img: othersKhaadiLogo,
    },
    {
      id: 3,
      img: othersKhaadiLogo,
    },
    {
      id: 4,
      img: othersKhaadiLogo,
    },
    {
      id: 5,
      img: othersKhaadiLogo,
    },
    {
      id: 6,
      img: othersKhaadiLogo,
    },
    {
      id: 7,
      img: othersKhaadiLogo,
    },
    {
      id: 8,
      img: othersKhaadiLogo,
    },
  ];

  const animationRefs = GsapScrollAnimationComp();

  return (
    <>
      <BlackBannerComponent
        aboutText={aboutText}
        aboutH2={aboutH2}
        bannerAnimation={clientBannerAnim}
      />
      <div ref={redDiv} className="bg-white  pt-[450px]">
        <div
          ref={pinkDiv}
          className="bg-white h-[130px] md:h-[130px] mt-[-80px] 2xl:mt-[-50px] text-black fixed w-full z-10"
        >
          <Tabs tabsData={tabsData} slidesPerView={4} />
        </div>
        <div id="telecomTabRef" className="md:mx-12 sm:ml-2 ml-2">
          <div className="mx-auto lg:mt-10 ">
            <h2 className="text-4xl lg:text-6xl mt-10 pillat-normal text-black">
              telecom
            </h2>
            <div className="w-[90%] mx-auto sm:mt-12 mt-3">
              <SimpleSwipper
                swipperContent={telecomSwipperContent}
                slidesPerView={7}
                swipperGap={50}
              />
            </div>
          </div>
        </div>

        <div
          id="bankingTabRef"
          className="md:mx-12 sm:ml-2 ml-2 mt-14 opacity-0 transform translate-y-[20px]"
          ref={animationRefs.firstFadeInAnimation}
        >
          <div className="mx-auto">
            <h2 className="text-4xl lg:text-6xl pillat-normal text-black">
              banking & finance
            </h2>
            <div className="w-[90%] mx-auto sm:mt-12 mt-3">
              <SimpleSwipper
                swipperContent={bankingSwipperContent}
                slidesPerView={7}
                swipperGap={50}
              />
            </div>
          </div>
        </div>

        <div
          id="fmcgTabRef"
          className="md:mx-12 sm:ml-2 ml-2 mt-14 opacity-0 transform translate-y-[20px]"
          ref={animationRefs.secondFadeInAnimation}
        >
          <div className="mx-auto lg:mt-10 ">
            <h2 className="text-4xl lg:text-6xl pillat-normal text-black">fmcg</h2>
            <div className="w-[90%] mx-auto sm:mt-12 mt-3">
              <SimpleSwipper
                swipperContent={fmcgSwipperContent}
                slidesPerView={7}
                swipperGap={50}
              />
            </div>
          </div>
        </div>

        <div
          id="realEstateTabRef"
          className="md:mx-12 sm:ml-2 ml-2 mt-14 opacity-0 transform translate-y-[20px]"
          ref={animationRefs.thirdFadeInAnimation}
        >
          <div className="mx-auto lg:mt-10 ">
            <h2 className="text-4xl lg:text-6xl pillat-normal text-black">real estate</h2>
            <div className="w-[90%] mx-auto flex items-center gap-11 mt-12">
              {realEstateContent.map((item, index) => (
                <div key={item.id} className="">
                  <div className="border border-gray-400 rounded-md  ">
                    <div className="flex justify-center items-center py-3 px-3 ">
                      <Image src={item.img} className="lg:w-[7vw]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="pharmaceuticalTabRef"
          className="md:mx-12 sm:ml-2 ml-2 mt-14 lg:mt-44  opacity-0 transform translate-y-[20px]"
          ref={animationRefs.fourthFadeInAnimation}
        >
          <div className="mx-auto lg:mt-10 ">
            <h2 className="text-4xl lg:text-6xl pillat-normal text-black">
              pharmaceutical
            </h2>
            <div className="w-[90%] mx-auto flex items-center gap-11 mt-12">
              {pharmaceuticalContent.map((item, index) => (
                <div key={item.id} className="">
                  <div className="border border-gray-400 rounded-md  ">
                    <div className="flex justify-center items-center py-3 px-3 ">
                      <Image src={item.img} className="lg:w-[7vw]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="othersTabRef"
          className="md:mx-12 sm:ml-2 ml-2 mt-14 opacity-0 transform translate-y-[20px]"
          ref={animationRefs.fifthFadeInAnimation}
        >
          <div className="mx-auto lg:mt-10 ">
            <h2 className="text-4xl lg:text-6xl pillat-normal text-black">others</h2>
            <div className="w-[90%] mx-auto sm:mt-12 mt-3">
              <SimpleSwipper
                swipperContent={othersSwipperContent}
                slidesPerView={7}
                swipperGap={50}
              />
            </div>
          </div>
        </div>

        <ConnectWithUs bgColor="black" textColor="text-white" />
        <Footer />
      </div>
    </>
  );
};

export default page;
