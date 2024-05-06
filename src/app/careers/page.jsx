"use client";
import React, { useEffect, useRef } from "react";
import Tabs from "../components/tabs/Tabs";
import AnimationTextReversing from "../components/animationTextReversing/AnimationTextReversing";
import BlackBannerComponent from "../components/blackBannerComponent/BlackBannerComponent";
import ConnectWithUs from "../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../components/footer/Footer";

import { Button, Checkbox, Form, Input } from "antd";
import Select from "react-select";

import careersBannerAnim from "../../../public/symmetryAnimations/careers-animation-main-rive.riv";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

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

  const aboutH2 = "current openings";
  const aboutText = "apply today and help us change the industry";

  const tabsData = [
    {
      id: 0,
      item: "job search",
      refId: "#dataScienceTabRef",
    },
    {
      id: 1,
      item: "all jobs",
      refId: "#webSoftwareTabRef",
    },
  ];

  const city = [
    { value: "karachi", label: "Karachi" },
    { value: "islamabad", label: "Islamabad" },
    { value: "lahore", label: "Lahore" },
  ];

  const department = [
    { value: "development", label: "development" },
    { value: "creative", label: "creative" },
    { value: "design", label: "design" },
    { value: "media", label: "media" },
    { value: "strategy and planning", label: "strategy and planning" },
  ];

  const jobDetails = [
    {
      id: 0,
      city: "karachi",
      jobTitle: "php developer",
    },
    {
      id: 1,
      city: "karachi",
      jobTitle: "graphic design specialist",
    },
    {
      id: 2,
      city: "islamabad",
      jobTitle: "digital strategist",
    },
    {
      id: 3,
      city: "karachi",
      jobTitle: "creative associate digital",
    },
    {
      id: 4,
      city: "karachi",
      jobTitle: "android developer",
    },
    {
      id: 5,
      city: "karachi",
      jobTitle: "front end developer",
    },
    {
      id: 6,
      city: "karachi",
      jobTitle: "account manager",
    },
    {
      id: 7,
      city: "karachi",
      jobTitle: "creative manager",
    },
    {
      id: 8,
      city: "lahore",
      jobTitle: "back end developer",
    },
  ];

  return (
    <>
      <div>
        <BlackBannerComponent
          aboutText={aboutText}
          aboutH2={aboutH2}
          bannerAnimation={careersBannerAnim}
        />
        <div ref={redDiv} className="bg-white  pt-[450px]">
          <div
            ref={pinkDiv}
            className="bg-white h-[120px] md:h-[120px] mt-[-80px] 2xl:mt-[-50px] text-black fixed w-full z-10"
          >
            <Tabs tabsData={tabsData} slidesPerView={4} />
          </div>
          <div className="my-10">
            <AnimationTextReversing>
              <div
                id="dataScienceTabRef"
                className="company-div flex flex-col gap-5"
              >
                <div className="text-gray-500 text-[14px] pillat-normal">
                  <p>
                    symmetry group is the largest digital media group in
                    pakistan that offers a spectrum of interactive marketing,
                    digital media and transformation services, which repeatedly
                    set benchmarks in the industry. we continuously evolve,
                    create and redefine industry standards. our teams are our
                    greatest assets, if you have what it takes to be a dynamic
                    and energetic addition to our team, we are looking for you!
                  </p>
                </div>
              </div>
            </AnimationTextReversing>

            <div className="mx-3 md:mx-12 mt-10">
              <div className="lg:flex ">
                <div className="w-full">
                  <div className=" border-gray-300 px-3 pb-1 w-full">
                    <div className="mt-3 w-full">
                      <Select
                        options={city}
                        className="w-full  -ml-[10px] "
                        placeholder="job search"
                        isSearchable={true}
                        isClearable={true}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor:
                              state.isFocused || state.isSelected
                                ? "black"
                                : "white",
                            ":active": {},
                            color:
                              state.isFocused || state.isSelected
                                ? "white"
                                : "black",
                          }),
                          singleValue: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                          }),
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[50%]">
                  <div className=" border-gray-300 px-3 pb-1 w-full">
                    <div className="mt-3 w-full">
                      <Select
                        options={city}
                        className="w-full  -ml-[10px] "
                        placeholder="select city"
                        isSearchable={true}
                        isClearable={true}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor:
                              state.isFocused || state.isSelected
                                ? "black"
                                : "white",
                            ":active": {},
                            color:
                              state.isFocused || state.isSelected
                                ? "white"
                                : "black",
                          }),
                          singleValue: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                          }),
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[50%]">
                  <div className=" border-gray-300 px-3 pb-1 w-full">
                    <div className="mt-3 w-full">
                      <Select
                        options={department}
                        className="w-full  -ml-[10px] "
                        placeholder="select department"
                        isSearchable={true}
                        isClearable={true}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor:
                              state.isFocused || state.isSelected
                                ? "black"
                                : "white",
                            ":active": {},
                            color:
                              state.isFocused || state.isSelected
                                ? "white"
                                : "black",
                          }),
                          singleValue: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                          }),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 ">
                {jobDetails.map((item, index) => (
                  <div
                    key={index}
                    className="w-full border-[1px] border-gray-300 rounded-xl p-4 pt-8 pillat-normal bg-[#fafafa] relative overflow-hidden cursor-pointer"
                  >
                    <div className="min-h-[250px]">
                      <p className="text-gray-500 text-sm">{item.city}</p>
                      <h2 className="text-black text-4xl w-10">
                        {item.jobTitle}
                      </h2>
                    </div>
                    <div className="flex justify-between gap-4 mb-3">
                      <div className="text-gray-500 border text-sm border-gray-500 rounded-lg py-2 px-2 text-center w-44 careers-buttons-gradient-bg careers-buttons-gradient-border ">
                        {/* <Link href={`/careers/${item.jobTitle.replaceAll(' ','')}`}>apply now</Link> */}
                        <Link href={`/careers/${item.jobTitle}`}>
                          apply now
                        </Link>
                      </div>
                      <div className="text-gray-500 border text-sm border-gray-500 rounded-lg py-2 px-2 text-center w-44 careers-buttons-gradient-bg careers-buttons-gradient-border">
                        <Link href={`/careers/${item.jobTitle}`}>details</Link>
                      </div>
                    </div>
                    <div
                      className={`absolute top-[-120px] right-[-180px] border border-gray-300 rounded-[50px] w-72 h-72`}
                    ></div>
                    <div
                      className={`absolute top-[-70px] right-[-240px] border border-gray-300 rounded-[50px] w-72 h-72`}
                    ></div>
                  </div>
                ))}
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
