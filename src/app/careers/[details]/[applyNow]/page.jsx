"use client";
import React, { useEffect, useRef } from "react";
import Tabs from "../../../components/tabs/Tabs";
// import AnimationTextReversing from "../../components/animationTextReversing/AnimationTextReversing";
import BlackBannerComponent from "../../../components/blackBannerComponent/BlackBannerComponent";
import ConnectWithUs from "../../../components/connectWithUsComponent/ConnectWithUs";
import Footer from "../../../components/footer/Footer";

import { Button, Checkbox, Form, Input } from "antd";
import Select from "react-select";

import careersBannerAnim from "../../../../../public/symmetryAnimations/careers-animation-main-rive.riv";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const page = ({ params }) => {
  console.log(params, "params testing");
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
              isMobile: "(min-   : 300px)",
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

  const bannerLeft = "40%";
  const bannerHeadingSize = "6xl";
  const headingScrollSizeChange = false;

  const countries = [{ value: "afghanistan", label: "Afghanistan" }];
  const designations = [
    { value: "phpDeveloper", label: "php developer" },
    { value: "graphicDesignSpecialist", label: "graphic design specialist" },
    { value: "digitalStrategist", label: "digital strategist" },
    { value: "frontEndDeveloper", label: "front end developer" },
    { value: "backEndDeveloper", label: "back end developer" },
    { value: "accountManager", label: "account manager" },
    { value: "creativeManager", label: "creative manager" },
  ];
  const cities = [
    { value: "karachi", label: "Karachi" },
    { value: "lahore", label: "Lahore" },
    { value: "islamabad", label: "Islamabad" },
    { value: "rawalpindi", label: "Rawalpindi" },
    { value: "faisalabad", label: "Faisalabad" },
    { value: "multan", label: "Multan" },
    { value: "peshawar", label: "Peshawar" },
    { value: "quetta", label: "Quetta" },
    { value: "gujranwala", label: "Gujranwala" },
    { value: "sialkot", label: "Sialkot" },
    { value: "bahawalpur", label: "Bahawalpur" },
    { value: "sargodha", label: "Sargodha" },
    { value: "sukkur", label: "Sukkur" },
    { value: "jhang", label: "Jhang" },
    { value: "sheikhupura", label: "Sheikhupura" },
    { value: "rahim yar khan", label: "Rahim Yar Khan" },
    { value: "gujrat", label: "Gujrat" },
    { value: "kasur", label: "Kasur" },
    { value: "mardan", label: "Mardan" },
    { value: "mingora", label: "Mingora" },
    { value: "dera ghazi khan", label: "Dera Ghazi Khan" },
    { value: "nawabshah", label: "Nawabshah" },
    { value: "sahiwal", label: "Sahiwal" },
    { value: "mirpur khas", label: "Mirpur Khas" },
    { value: "okara", label: "Okara" },
    { value: "burewala", label: "Burewala" },
    { value: "jacobabad", label: "Jacobabad" },
    { value: "saddiqabad", label: "Saddiqabad" },
    { value: "kohat", label: "Kohat" },
    { value: "muridke", label: "Muridke" },
    { value: "muzaffargarh", label: "Muzaffargarh" },
    { value: "khanewal", label: "Khanewal" },
    { value: "gojra", label: "Gojra" },
    { value: "bahawalnagar", label: "Bahawalnagar" },
    { value: "abbottabad", label: "Abbottabad" },
    { value: "jalalpur jattan", label: "Jalalpur Jattan" },
    { value: "pakpattan", label: "Pakpattan" },
    { value: "khuzdar", label: "Khuzdar" },
    { value: "mianwali", label: "Mianwali" },
    { value: "kotri", label: "Kotri" },
    { value: "rajanpur", label: "Rajanpur" },
    { value: "timargara", label: "Timargara" },
    { value: "dera ismail khan", label: "Dera Ismail Khan" },
    { value: "chaman", label: "Chaman" },
    { value: "ushsharif", label: "Ushsharif" },
    { value: "bannu", label: "Bannu" },
    { value: "dera allah yar", label: "Dera Allah Yar" },
    { value: "karak", label: "Karak" },
    { value: "hafizabad", label: "Hafizabad" },
    { value: "larkana", label: "Larkana" },
    { value: "lodhran", label: "Lodhran" },
    { value: "kohat", label: "Kohat" },
    { value: "attock", label: "Attock" },
    { value: "badin", label: "Badin" },
    { value: "barkhan", label: "Barkhan" },
    { value: "mansehra", label: "Mansehra" },
    { value: "chakwal", label: "Chakwal" },
    { value: "khairpur", label: "Khairpur" },
    { value: "nowshera", label: "Nowshera" },
    { value: "dadu", label: "Dadu" },
    { value: "wazirabad", label: "Wazirabad" },
    { value: "lala musa", label: "Lala Musa" },
    { value: "mian channu", label: "Mian Channu" },
    { value: "khanpur", label: "Khanpur" },
    { value: "hattar", label: "Hattar" },
    { value: "jahania", label: "Jahania" },
    { value: "dera murad jamali", label: "Dera Murad Jamali" },
    { value: "dera bugti", label: "Dera Bugti" },
    { value: "shahdadkot", label: "Shahdadkot" },
    { value: "khushab", label: "Khushab" },
    { value: "pano aqil", label: "Pano Aqil" },
    { value: "mastung", label: "Mastung" },
    { value: "nasirabad", label: "Nasirabad" },
    { value: "turbat", label: "Turbat" },
    { value: "karor lal esan", label: "Karor Lal Esan" },
    { value: "kalat", label: "Kalat" },
    { value: "dera alahyar", label: "Dera Alahyar" },
    { value: "tando allahyar", label: "Tando Allahyar" },
    { value: "kot addu", label: "Kot Addu" },
    { value: "chishtian", label: "Chishtian" },
    { value: "swabi", label: "Swabi" },
    { value: "qila saifullah", label: "Qila Saifullah" },
    { value: "parachinar", label: "Parachinar" },
  ];

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
        <div ref={redDiv} className="bg-white pt-[450px]">
          <div
            ref={pinkDiv}
            className="bg-white h-[130px] md:h-[130px] mt-[-80px] 2xl:mt-[-50px] text-black fixed w-full z-10" 
          >
            <Tabs tabsData={tabsData} slidesPerView={4} />
          </div>

          <div
            className="text-black my-10 mx-5 lg:mx-10 flex flex-col lg:justify-center gap-5 lg:mt-16 lg:gap-[0vw] pillat-normal"
            // ref={animationRefs.thirdFadeInAnimation}
          >
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center lg:justify-normal lg:mx-auto ">
              <div className=" border-gray-300 px-3 pb-1">
                <div>
                  <h2>designation</h2>
                </div>
                <div className="mt-3">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      // label="Username"
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: "Select designation",
                        },
                      ]}
                    >
                      <Select
                        options={designations}
                        className="w-full lg:w-[300px] xl:w-[400px] 2xl:w-[450px] -ml-[10px] "
                        placeholder="select your country"
                        isSearchable={true} // Enable searching
                        isClearable={true} // Enable clearing the selection
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
                    </Form.Item>
                  </Form>
                </div>
              </div>
              <div className=" border-gray-300 px-3 pb-1">
                <div>
                  <h2>first name</h2>
                </div>
                <div className=" mt-3">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      // label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your last name",
                        },
                      ]}
                    >
                      <Input
                        placeholder="first name"
                        style={{
                          borderRadius: "0px",
                          borderRight: "0px",
                          borderTop: "0px",
                          borderLeft: "0px",
                          // width: "400px",
                          marginLeft: "-11px",
                        }}
                        className="w-full lg:w-[280px] xl:w-[350px] 2xl:w-[450px]"
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>
              <div className=" border-gray-300 px-3 pb-1">
                <div>
                  <h2>last name</h2>
                </div>
                <div className="mt-3">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      // label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email",
                        },
                      ]}
                    >
                      <Input
                        placeholder="last name"
                        style={{
                          borderRadius: "0px",
                          borderRight: "0px",
                          borderTop: "0px",
                          borderLeft: "0px",
                          // width: "400px",
                          marginLeft: "-11px",
                        }}
                        className="w-full lg:w-[280px] xl:w-[350px] 2xl:w-[450px]"
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-20 justify-center lg:justify-between">
              <div className=" border-gray-300 px-3 pb-1">
                <div>
                  <h2>city</h2>
                </div>
                <div className="mt-3">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      // label="Username"
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: "Select your city",
                        },
                      ]}
                    >
                      <Select
                        options={cities}
                        className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[450px] -ml-[10px] "
                        placeholder="select your city"
                        isSearchable={true} // Enable searching
                        isClearable={true} // Enable clearing the selection
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
                    </Form.Item>
                  </Form>
                </div>
              </div>

              <div className=" border-gray-300 px-3 pb-1">
                <div>
                  <h2>email</h2>
                </div>
                <div className="mt-3">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      // label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email",
                        },
                      ]}
                    >
                      <Input
                        placeholder="email"
                        style={{
                          borderRadius: "0px",
                          borderRight: "0px",
                          borderTop: "0px",
                          borderLeft: "0px",
                          // width: "260px",
                          marginLeft: "-11px",
                        }}
                        className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[450px]"
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>

              <div className=" border-gray-300 px-3 pb-1">
                <div>
                  <h2>subject</h2>
                </div>
                <div className="mt-3">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      // label="Username"
                      name="subject"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your subject",
                        },
                      ]}
                    >
                      <Input
                        placeholder="enter your subject"
                        style={{
                          borderRadius: "0px",
                          borderRight: "0px",
                          borderTop: "0px",
                          borderLeft: "0px",
                          // width: "260px",
                          marginLeft: "-11px",
                        }}
                        className="w-full lg:w-[220px] xl:w-[280px] 2xl:w-[450px]"
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-20 justify-center lg:justify-between">
              <div className=" border-gray-300 px-3 pb-1">
                <div>
                  <h2>cover letter</h2>
                </div>
                <div className="mt-3">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      // label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your cover letter",
                        },
                      ]}
                    >
                      <Input
                        placeholder="your cover letter"
                        style={{
                          borderRadius: "0px",
                          borderRight: "0px",
                          borderTop: "0px",
                          borderLeft: "0px",
                          // width: "260px",
                          marginLeft: "-11px",
                        }}
                        className="w-full lg:w-[220px] xl:w-[500px] 2xl:w-[450px]"
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>

              <div className=" border-gray-300 px-3 pb-1">
                <div>
                  <h2>upload cv</h2>
                </div>
                <div className="mt-3">
                  <div className="text-gray-500 border text-sm border-gray-500 rounded-lg py-2 px-2 text-center w-44 careers-buttons-gradient-bg careers-buttons-gradient-border cursor-pointer">
                    choose file
                  </div>
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
