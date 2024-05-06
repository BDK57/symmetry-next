"use client";
import React, { useEffect, useRef } from "react";
import Tabs from "../../components/tabs/Tabs";
import AnimationTextReversing from "../../components/animationTextReversing/AnimationTextReversing";
import BlackBannerComponent from "../../components/blackBannerComponent/BlackBannerComponent";
import ConnectWithUs from "../../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../../components/footer/Footer";

import { Button, Checkbox, Form, Input } from "antd";
import Select from "react-select";

import careersBannerAnim from "../../../../public/symmetryAnimations/careers-animation-main-rive.riv";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const page = ({ params }) => {
  console.log(params , "params testing")
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

  const aboutText = "apply today and help us change the industry";

  const tabsData = [
    {
      id: 0,
      item: "job details",
      refId: "",
    },
  ];

  const yourRoles = [
    {
      id: 0,
      role: "work under the leadership of the Head of Design and the direction of Strategy and Creative teams, and deliver designs according to the briefed concepts.",
    },
    {
      id: 1,
      role: "Understanding concepts and brand styles and delivering visuals that fit well with the brand persona and communication.",
    },
    {
      id: 2,
      role: "A firm grip on the Adobe suite, Photoshop, and Illustrator with a prime focus to deliver digital and mobile-first designs suited for different digital platforms.",
    },
    {
      id: 3,
      role: "Possess knowledge about different digital platforms and the user behavior on these platforms to deliver meaningful and thumb-stopping creatives.",
    },
    {
      id: 4,
      role: "Communicates with internal teams in an effective and professional manner.",
    },
    {
      id: 5,
      role: "Research design trends to apply creative concepts in designs and come up with innovative ideas.",
    },
  ];

  const qualification = [
    {
      id: 0,
      data: "Bachelor’s degree in Design, Digital Media, or related fields from reputable institutions is preferred.",
    },
    {
      id: 1,
      data: "At least 2-3 years of work experience in an advertising agency environment",
    },
    {
      id: 2,
      data: "A portfolio that demonstrates the compelling design and interactive experiences, strong conceptual thinking, a track record of diverse experiences, and a refined aesthetic sensibility.",
    },
    {
      id: 3,
      data: "Skills in Photoshop and Illustrator primarily for digital, out of home, web, mobile, print etc. plus knowledge of Sketch, Adobe XD and/or Figma/ canva with strong written and verbal communication skills.",
    },
    {
      id: 4,
      data: "Understanding of design eco-system and principles.",
    },
    {
      id: 5,
      data: "Knowledge of how to develop brand identities.",
    },
    {
      id: 6,
      data: "Exceptional presentation skills to be a client-facing representative as needed.",
    },
  ];

  const bannerLeft = "40%";
  const bannerHeadingSize = "6xl";
  const headingScrollSizeChange = false;
  const applyNow = "apply-now"

  return (
    <>
      <div>
        <BlackBannerComponent
          aboutText={aboutText}
          aboutH2={params.details.replaceAll(/%|20/g, " ")}
          bannerAnimation={careersBannerAnim}
          bannerLeft={bannerLeft}
          bannerHeadingSize={bannerHeadingSize}
          headingScrollSizeChange={headingScrollSizeChange}
        />
        <div ref={redDiv} className="bg-white  pt-[450px]">
          <div
            ref={pinkDiv}
            className="bg-white h-[105px] md:h-[105px] mt-[-100px] 2xl:mt-[-50px] text-black fixed w-full z-10"
          >
            <Tabs tabsData={tabsData} slidesPerView={4} />
          </div>

          <div className="ml-3 lg:mx-12 lg:pt-1">
            <div className="block lg:flex justify-between lg:mt-10">
              <div>
                <h2 className="text-2xl sm:text-4xl text-[#212529]">karachi</h2>
                <p className="text-xs sm:text-base lg:text-xs text-gray-500 pt-1">
                  location
                </p>
              </div>
              <div>
                <h2 className="text-2xl sm:text-4xl text-[#212529]">
                  morning (9 am to 6 pm )
                </h2>
                <p className="text-xs sm:text-base lg:text-xs text-gray-500 pt-1">
                  job shift
                </p>
              </div>

              <div className="flex gap-3 mb-3 mt-2">
                <div className="text-gray-500 border text-sm border-gray-500 rounded-lg py-2 px-2 text-center w-44 careers-buttons-gradient-bg careers-buttons-gradient-border cursor-pointer">
                  <Link href={`/careers/${params.details.replaceAll(/%|20/g, " ")}/${applyNow}`}>apply now</Link>
                </div>
                <div className="text-gray-500 border text-sm border-gray-500 rounded-lg py-2 px-2 text-center w-44 careers-buttons-gradient-bg careers-buttons-gradient-border cursor-pointer">
                  current opening
                </div>
              </div>
            </div>
            <div className="text-gray-500 text-[14px] lg:mt-10">
              <h3>
                Symmetry Group is the largest digital media group in Pakistan
                that offers a spectrum of interactive marketing, digital media
                and transformation services, which repeatedly set benchmarks in
                the industry. We continuously evolve, create and redefine
                industry standards.
              </h3>
              <h3>
                we are looking for a creative, dynamic, and highly skilled
                Graphic Design Specialist to join the Symmetry Group Design
                Team. The ideal candidate is proactive, self-motivated, and
                inspirational with a solid understanding of visual and graphic
                design capabilities and a comprehensive understanding of how
                brands can express themselves visually across an ecosystem that
                fits well with the brand persona and guidelines, anchored on
                driving customer experience.
              </h3>

              <h2 className="text-black font-bold">your role:</h2>

              <h3>
                while there will never be a typical day at Symmetry Group, here
                are a few exciting responsibilities highlighted for you:
              </h3>

              <div className="lg:mt-5">
                {yourRoles.map((item, index) => (
                  <div className="text-gray-500 flex gap-3 mt-2 ">
                    <span
                      className={`inline-flex  rotate-[45deg] w-2/12 mt-[6px]
                    rainbow-border transition-all duration-300 `}
                    ></span>
                    <h4 className="w-10/12">{item.role}</h4>
                  </div>
                ))}
              </div>

              <h2 className="text-black font-bold my-5">
                qualifications/degree/certifications
              </h2>

              {qualification.map((item, index) => (
                <div className="text-gray-500 flex gap-3 mt-2 ">
                  <span
                    className={`inline-flex  rotate-[45deg] w-2/12 mt-[6px]
               rainbow-border transition-all duration-300 `}
                  ></span>
                  <h4 className="w-10/12">{item.data}</h4>
                </div>
              ))}

              <div className="text-gray-500 mt-5 lg:mt-12">
                <div className="flex gap-1">
                  <span className="text-black font-bold">department:</span>
                  <h3>design</h3>
                </div>
                <div className="flex gap-1">
                  <span className="text-black font-bold">
                    shifts available:
                  </span>
                  <h3>morning (9 am to 6 pm)</h3>
                </div>
                <div className="flex gap-1">
                  <span className="text-black font-bold">location:</span>
                  <h3>karachi, pakistan</h3>
                </div>
              </div>

              <div className="lg:flex justify-between lg:mt-12">
                <div className="text-gray-500 mt-5 lg:mt-8">
                  <span className="text-black font-bold text-base">
                    karachi
                  </span>
                  <h3>
                    Plot No. 56-A, Khalid Commercial, Street 2, Phase 7 Ext.,
                    D.H.A, Karachi, Pakistan
                  </h3>
                  <h4>phone +92 21 3517 1991</h4>
                </div>

                <div className="bg-black text-white text-2xl font-bold my-10 text-center lg:w-4/12">
                  Google Map Here
                </div>
              </div>
            </div>
          </div>

          <ConnectWithUs bgColor="bg-black" textColor="text-white" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
