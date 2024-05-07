import React, { useEffect, useRef, useState } from "react";
// import square from "../../../../public/square-neon.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import logo from "../../../../public/logo.webp";
import Link from "next/link";
import hamburger from "../../../../public/hamburger-icon-3.png";
import linkdinLogo from "../../../../public/linkdin-logo.webp";
import fbLogo from "../../../../public/fb-logo.webp";
import twitterLogo from "../../../../public/twitter-logo.webp";
import Lottie from "react-lottie-player";
import aboutBannerAnimation from "../../../../public/symmetryAnimations/aboutBannerAnimation.json";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Menu } from "antd";
import Rive from "@rive-app/react-canvas";
import RiveAnimation from "../../../../public/symmetryAnimations/banner-Rive.riv";
import startingAnimation from "../../../../public/symmetryAnimations/startingAnimation.json";
import { useRouter } from "next/navigation";
import GsapTopAnimation from "../gsapComponent/GsapTopAnimation";
import CollapsibleFooter from "../collapsibleFooter/CollapsibleFooter";

gsap.registerPlugin(ScrollTrigger);
const BlackBannerComponent = ({
  aboutH2,
  aboutText,
  customBgColor,
  bannerAnimation,
  bannerTop,
  bannerLeft,
  bannerHeadingSize,
  headingScrollSizeChange = true,
  noRainbowText = false,
}) => {
  console.log(headingScrollSizeChange, "heading BOOLean");

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [toggleGsap, setToggleGsap] = useState(true);

  const [collapseIcon, setCollapseIcon] = useState(true);
  const [collapseIcon1, setCollapseIcon1] = useState(true);
  const [collapseIcon2, setCollapseIcon2] = useState(true);
  const [collapseIcon3, setCollapseIcon3] = useState(true);

  const blackDiv = useRef();
  const redDiv = useRef();
  const aboutDiv = useRef();
  const symmetryDiv = useRef();
  const textDiv = useRef();
  const pinkDiv = useRef();
  const animationDiv = useRef();

  const endingBlackRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  const hamburgerLogoRef = useRef();

  const navRef = useRef();
  const subMenuRef = useRef();
  const socialLinksRef = useRef();
  const menuAnimationRef = useRef();

  /****** Mobile *******/

  const subMenuRefMobile = useRef();
  const socialLinksRefMobile = useRef();

  /******  toggeling drawer code and antd sub menu items  *******/

  const toggleDrawer = () => {
    const myTimeout = setTimeout(() => {
      setIsOpen((prevState) => !prevState);
    }, 600);
  };

  const items = [
    getItem(
      <div className="footer-text-color-toggle pillat-normal abbo text-2xl">
        about
      </div>,
      "sub1",
      [<></>]
    ),

    getItem(
      <>
        <Link href={"investorRelations"}>
          <div className="footer-text-color-toggle pillat-normal text-2xl">
            investors relations{" "}
          </div>
        </Link>
      </>,
      "sub2",
      [
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              {" "}
              company information{" "}
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              {" "}
              governance{" "}
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              financial reports
            </div>
          </>
        ),

        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              corporate briefings
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              notices & announcements
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              important documents
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              investor contacts
            </div>
          </>
        ),
      ]
    ),

    getItem(
      <div className="footer-text-color-toggle pillat-normal text-2xl">
        business divisions{" "}
      </div>,
      "sub3",
      [
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              transformation
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              interactive marketing
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              commerce
            </div>
          </>
        ),

        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              mobility
            </div>
          </>
        ),
      ]
    ),

    getItem(
      <>
        <Link href={"brands-products"}>
          <div className="footer-text-color-toggle pillat-normal text-2xl">
            brands & products
          </div>
        </Link>
      </>,
      "sub4",
      [
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              symmetry digital
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              iris digital
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              symmetry trade
            </div>
          </>
        ),

        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              coral
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              coral performance
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              appabilities
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              survit
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              mobit
            </div>
          </>
        ),
      ]
    ),

    getItem(
      <>
        <Link href={"clients"}>
          <div className="footer-text-color-toggle pillat-normal text-2xl">
            clients
          </div>
        </Link>
      </>,
      "sub5",
      [
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              telecom
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              banking & finance
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              fmcg
            </div>
          </>
        ),

        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              real estate
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              pharmaceutical
            </div>
          </>
        ),
        getItem(
          <>
            <div className="footer-text-color-toggle text-xl pillat-normal">
              others
            </div>
          </>
        ),
      ]
    ),

    getItem(
      <>
        <Link href={"google"}>
          <div className="footer-text-color-toggle pillat-normal abbo text-2xl">
            affiliation & partnerships
          </div>
        </Link>
      </>,
      "sub1",
      [<></>]
    ),

    getItem(
      <>
        <Link href={"careers"}>
          <div className="footer-text-color-toggle pillat-normal abbo text-2xl">
            careers
          </div>
        </Link>
      </>,
      "sub1",
      [<></>]
    ),

    getItem(
      <>
        <Link href={"contact-us"}>
          <div className="footer-text-color-toggle pillat-normal abbo text-2xl">
            contact us
          </div>
        </Link>
      </>,
      "sub1",
      [<></>]
    ),
  ];

  const mobileMenuItems = [
    {
      id: 0,
      title: (
        <>
          <div className="flex justify-between gap-5 mt-2 ">
            <div>about us</div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            {/* <div className="text-2xl font-bold" >
              {collapseIcon ? "+" : "-"}
            </div> */}
          </div>
        </>
      ),
    },
    {
      id: 1,
      title: (
        <>
          <div
            onClick={() => setCollapseIcon(!collapseIcon)}
            className={`flex justify-between gap-5 mt-2 ${
              !collapseIcon ? "footer-text-color-toggle-2" : "text-white"
            } `}
          >
            <div>investors relations</div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            <div className="text-2xl font-bold">{collapseIcon ? "+" : "-"}</div>
          </div>
        </>
      ),
      companyInformation: "company information",
      governance: "governance",
      financialReports: "financial reports",
      corporateBriefings: "corporate briefings",
      noticesAnnouncements: "notices & announcements",
      importantDocuments: "important documents",
      investorContacts: "investor contacts",
    },
    {
      id: 2,
      title: (
        <>
          <div
            onClick={() => setCollapseIcon1(!collapseIcon1)}
            className={`flex justify-between gap-5 mt-2 ${
              !collapseIcon1 ? "footer-text-color-toggle-2" : "text-white"
            } `}
          >
            <div>business divisions</div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            <div className="text-2xl font-bold">
              {collapseIcon1 ? "+" : "-"}
            </div>
          </div>
        </>
      ),
      transformation: "transformation",
      interactiveMarketing: "interactive marketing",
      commerce: "commerce",
      mobility: "mobility",
    },
    {
      id: 3,
      title: (
        <>
          <div
            onClick={() => setCollapseIcon2(!collapseIcon2)}
            className={`flex justify-between gap-5 mt-2 ${
              !collapseIcon2 ? "footer-text-color-toggle-2" : "text-white"
            } `}
          >
            <div>brands & products</div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            <div className="text-2xl font-bold">
              {collapseIcon2 ? "+" : "-"}
            </div>
          </div>
        </>
      ),
      symmetryDigital: "symmetry digital",
      irisDigital: "iris digital",
      symmetryTrade: "symmetry trade",
      coral: "coral",
      coralPerformance: "coral performance",
      appabilities: "appabilities",
      survit: "survit",
      mobits: "mobits",
    },
    {
      id: 4,
      title: (
        <>
          <div
            onClick={() => setCollapseIcon3(!collapseIcon3)}
            className={`flex justify-between gap-5 mt-2 ${
              !collapseIcon3 ? "footer-text-color-toggle-2" : "text-white"
            } `}
          >
            <div>clients</div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            <div className="text-2xl font-bold">
              {collapseIcon3 ? "+" : "-"}
            </div>
          </div>
        </>
      ),
      telecom: "telecom",
      bankingFinance: "banking & finance",
      fmcg: "fmcg",
      realEstate: "real estate",
      pharmaceutical: "pharmaceutical",
      others: "others",
    },
    {
      id: 5,
      title: (
        <>
          <div className="flex justify-between gap-5 mt-2 ">
            <div>affiliations & partnerships </div>
            {/* <div className="text-2xl font-bold" >
              {collapseIcon ? "+" : "-"}
            </div> */}
          </div>
        </>
      ),
    },
    {
      id: 6,
      title: (
        <>
          <div className="flex justify-between gap-5 mt-2 ">
            <div>careers </div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            {/* <div className="text-2xl font-bold" >
              {collapseIcon ? "+" : "-"}
            </div> */}
          </div>
        </>
      ),
    },
    {
      id: 7,
      title: (
        <>
          <div className="flex justify-between gap-5 mt-2 ">
            <div>middle east</div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            {/* <div className="text-2xl font-bold" >
              {collapseIcon ? "+" : "-"}
            </div> */}
          </div>
        </>
      ),
    },
    {
      id: 8,
      title: (
        <>
          <div className="flex justify-between gap-5 mt-2 ">
            <div>contact us</div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            {/* <div className="text-2xl font-bold" >
              {collapseIcon ? "+" : "-"}
            </div> */}
          </div>
        </>
      ),
    },
  ];

  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }

  /* This useEffect Enables Locomotive Scroll for this page */

  useEffect(() => {
    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        // console.log("locomotive useEffect enabled transformation");
        locomotiveScrollRef.current = new LocomotiveScroll({
          lenisOptions: {
            easing: (t) => t * (2 - t),
            lerp: 0.1,
            smoothTouch: true,
            smoothWheel: true,
            duration: 1,
          },
        });
      } catch (error) {
        console.error("Error loading Locomotive Scroll:", error);
      }
    };

    initLocomotiveScroll();
  }, []);

  /******   scrolling animations effect that moves navbar up and down  ******/

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
              is2xl: "(min-width : 1600px)",
              isDesktop: "(min-width : 1024px)",
              isTablet: "(min-width : 768px)",
              isMobile: "(min-width : 300px)",
            },
            (context) => {
              let { is2xl, isDesktop, isTablet, isMobile } = context.conditions;
              gsap.to(blackDiv.current, {
                height: "220px",
              });
              gsap.to(symmetryDiv.current, {
                width: is2xl
                  ? "12vw"
                  : isDesktop
                  ? "15vw"
                  : isTablet
                  ? "25vw"
                  : isMobile
                  ? "35vw"
                  : "0%",
              });
            }
          );
          gsap.to(animationDiv.current, {
            opacity: "0",
            height: "0px",
            transition: "all  0.1s",
            delay: 0.1,
          });

          gsap.to(aboutDiv.current, {
            fontSize: "55px",
          });
          gsap.to(textDiv.current, {
            opacity: "0",
            height: "0px",
            transition: "all  0.1s",
            delay: 0.1,
          });
          gsap.to(pinkDiv.current, {
            marginTop: "-234px",
          });
        },

        /******* On Enter Back  ********/

        onEnterBack: () => {
          gsap.to(blackDiv.current, {
            height: "360px",
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
              gsap.to(aboutDiv.current, {
                fontSize: is2xl
                  ? "130px"
                  : isDesktop
                  ? "100px"
                  : isTablet
                  ? "96px"
                  : isMobile && !headingScrollSizeChange
                  ? "70px"
                  : "80px",
              });
              gsap.to(symmetryDiv.current, {
                width: is2xl
                  ? "17vw"
                  : isDesktop
                  ? "20vw"
                  : isTablet
                  ? "30vw"
                  : isMobile
                  ? "45vw"
                  : "0%",
              });
            }
          );

          gsap.to(textDiv.current, {
            opacity: "1",
            // height: "100%",
            transition: "all  0.1s",
            delay: 0.1,
          });
          gsap.to(pinkDiv.current, {
            marginTop: "-100px",
          });
          gsap.to(animationDiv.current, {
            opacity: "1",
            height: "100%",
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

  /***********  Hamburger GSAP animation toggle  ***********/

  const gsapToggle = () => {
    setToggleGsap(!toggleGsap);

    gsap.to(hamburgerLogoRef.current, {
      x: toggleGsap ? 15 : -300,
      opacity: toggleGsap ? 1 : 0,
      duration: toggleGsap ? 0.2 : 0.4,
      delay: toggleGsap ? 1.3 : 0.5,
    });

    gsap.to(menuAnimationRef.current, {
      // x: toggleGsap ? 15 : -400,
      opacity: toggleGsap ? 1 : 0,
      duration: toggleGsap ? 0.5 : 0.7,
      delay: toggleGsap ? 1.7 : 0.1,
    });

    gsap.to(subMenuRef.current, {
      x: toggleGsap ? 15 : -300,
      opacity: toggleGsap ? 1 : 0,
      duration: toggleGsap ? 0.2 : 0.4,
      delay: toggleGsap ? 2 : 0.3,
    });

    gsap.to(socialLinksRef.current, {
      x: toggleGsap ? 15 : -300,
      opacity: toggleGsap ? 1 : 0,
      duration: toggleGsap ? 0.2 : 0.4,
      delay: toggleGsap ? 2.3 : 0,
    });

    /***** Mobile Animations ******/

    gsap.to(subMenuRefMobile.current, {
      x: toggleGsap ? 15 : -300,
      opacity: toggleGsap ? 1 : 0,
      duration: toggleGsap ? 0.2 : 0.4,
      delay: toggleGsap ? 2 : 0.3,
    });

    gsap.to(socialLinksRefMobile.current, {
      x: toggleGsap ? 15 : -300,
      opacity: toggleGsap ? 1 : 0,
      duration: toggleGsap ? 0.2 : 0.4,
      delay: toggleGsap ? 2.3 : 0,
    });
  };

  /******  this function will take back to home with black animation  ******/

  const toHomeAnimFunc = () => {
    // const container = document.getElementById("page-loader");
    const container = endingBlackRef.current;
    const body = document.body;
    container.style.pointerEvents = "none";

    gsap.from(endingBlackRef.current, {
      y: "800px",
      backgroundColor: "black",
      color: "black",
      duration: 0.5,
      // ease: "power1.inOut",
      zIndex: 50,
      onStart: () => {
        container.style.display = "flex";
        body.style.overflow = "hidden";
        if (locomotiveScrollRef.current) {
          // console.log("locomotive destroyed in black banner");
          locomotiveScrollRef.current.destroy();
        }
      },
    });

    gsap.to(endingBlackRef.current, {
      y: "-50px",
      backgroundColor: "black",
      color: "black",
      duration: 0.5,
      // ease: "power1.inOut",
      zIndex: 50,
      onComplete: () => {
        router.push("/");
      },
    });
  };

  const textColor = "text-white";

  return (
    <>
      {/* Starting Animation */}

      <GsapTopAnimation />

      <div
        ref={blackDiv}
        className={`  h-[350px] lg:h-[370px] 2xl:h-[390px] text-white pt-10 md:pl-10 pl-3 fixed w-full z-30`}
        style={{ background: `${customBgColor || "black"}` }}
      >
        <div
          // id="page-loader"
          className="bg-black justify-center items-center h-[200vh] w-[200%] absolute hidden top-0 left-[-50px] z-50"
          style={{ transform: "translateY(800px)" }}
          ref={endingBlackRef}
        ></div>
        <div className="">
          <div className="flex justify-between items-center gap-3">
            {/* <Link href="/"> */}
            <div
              onClick={() => {
                toHomeAnimFunc();
              }}
              className="ml-1"
            >
              <Image
                src={logo}
                alt="logo"
                className="w-[45vw] md:w-[30vw] lg:w-[20vw]"
                ref={symmetryDiv}
              />
            </div>
            {/* </Link> */}
            {/* Ending black animation */}
            <div className="">
              <div class="menu cross menu--1">
                <label
                  className="top-[30px] !right-[-43px] md:right-[10px] md:top-[38px] lg:top-[39px] lg:!right-[-20px] xl:top-[35px] xl:right-[-12px] absolute cursor-pointer w-[50vw] h-[50vw] max-w-[90px] max-h-[150px] "
                  style={{ zIndex: "99999" }}
                >
                  <input
                    type="checkbox"
                    onClick={() => {
                      toggleDrawer();
                      gsapToggle();
                    }}
                  />{" "}
                  {/* <div className="border border-white rounded-lg rotate-45 w-[27px]"> */}
                  {/* <svg
                    viewBox="30 35 30 30"
                    // width="100"
                    // height="100"
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ rotate: "-45deg" , width : "25px", paddingTop: "5px" , paddingBottom: "5px" ,paddingRight: "5px" , paddingLeft: "5px" }}
                  >
                    <circle cx="0" cy="0" r="0" />
                    <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                    <path class="line--2" d="M0 50h70" />
                    <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                  </svg> */}
                  <div className="hem">
                    <div id="hamburger" className={`${isOpen ? "open" : ""}`}>
                      <svg viewBox="0 0 100 100">
                        <path
                          class="line line1"
                          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        />
                        <path class="line line2" d="M 20,50 H 80" />
                        <path
                          class="line line3"
                          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* </div> */}
                </label>
              </div>
            </div>

            {/* <button >Show</button> */}
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="!bg-black"
              size="100vw"
              style={{ height: "130vh" }}
            >
              <>
                <div className="ml-2 mt-4 md:mx-10">
                  <div
                    ref={hamburgerLogoRef}
                    className="w-[55vw] ml-1 opacity-0 translate-x-[-300px]"
                  >
                    <Image src={logo} />
                  </div>

                  <div>
                    {/*********  Mobile   *********/}

                    <div>
                      <div className="mt-16 lg:hidden">
                        <div
                          className="text-white flex flex-col gap-2 mr-1 text-2xl pillat-normal opacity-0 translate-x-[-300px]"
                          ref={subMenuRefMobile}
                        >
                          <div className="flex   text-2xl mr-5">
                            <div className="text flex flex-col text-white w-full">
                              <CollapsibleFooter
                                dataArr={mobileMenuItems}
                                textColor={textColor}
                              />
                            </div>
                          </div>

                          {/* <div className="flex justify-between mr-5">
                            <div>business divisions</div>
                            <div className="text-2xl font-bold">+</div>
                          </div>
                          <div className="flex justify-between mr-5">
                            <div>brands & products</div>
                            <div className="text-2xl font-bold">+</div>
                          </div>
                          <div className="flex justify-between mr-5">
                            <div>clients</div>
                            <div className="text-2xl font-bold">+</div>
                          </div>
                          <div className="flex justify-between mr-5">
                            <div>affiliation & partnerships</div>
                          </div>
                          <div className="flex justify-between mr-5">
                            <div>careers</div>
                          </div>
                          <div className="flex justify-between mr-5">
                            <div>contact us</div>
                          </div> */}
                        </div>

                        <div
                          ref={socialLinksRefMobile}
                          className="flex gap-3 mt-5 opacity-0 translate-x-[-300px]"
                        >
                          <div className="border border-green-400 rounded-lg my-auto px-1 py-1 cursor-pointer hamburger-social-icons-div">
                            <Link
                              href={
                                "https://www.linkedin.com/company/symmetry-group/"
                              }
                              target="blank"
                            >
                              <Image
                                src={linkdinLogo}
                                width={28}
                                className="hamburger-social-icon"
                              />
                            </Link>
                          </div>
                          <div className="border border-green-400 rounded-lg my-auto px-1 py-1 cursor-pointer hamburger-social-icons-div">
                            <Link
                              href={"https://www.facebook.com/SymmetryGroup/"}
                              target="blank"
                            >
                              <Image
                                src={fbLogo}
                                width={28}
                                className="hamburger-social-icon"
                              />
                            </Link>
                          </div>
                          <div className="border border-green-400 rounded-lg my-auto px-1 py-1 cursor-pointer hamburger-social-icons-div">
                            <Link
                              href={"https://twitter.com/SymmetryGroupHQ/"}
                              target="blank"
                            >
                              <Image
                                src={twitterLogo}
                                width={28}
                                className="hamburger-social-icon"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*********  Laptop   *********/}

                    <div>
                      <div className="mt-16 hidden lg:block">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-white flex flex-col gap-2 mr-1 text-xl pillat-normal lg:gap-5 ">
                              <div
                                ref={subMenuRef}
                                className="opacity-0 translate-x-[-300px]"
                              >
                                <Menu
                                  // onClick={onClick}
                                  style={{
                                    width: 256,
                                  }}
                                  mode="vertical"
                                  items={items}
                                />
                              </div>

                              <div
                                ref={socialLinksRef}
                                className="flex gap-3 ml-2 mt-5 opacity-0 translate-x-[-300px]"
                              >
                                <div className="border border-green-400 rounded-lg my-auto px-1 py-1 cursor-pointer hamburger-social-icons-div">
                                  <Image
                                    src={linkdinLogo}
                                    width={28}
                                    className="hamburger-social-icon"
                                  />
                                </div>
                                <div className="border border-green-400 rounded-lg my-auto px-1 py-1 cursor-pointer hamburger-social-icons-div">
                                  <Image
                                    src={fbLogo}
                                    width={28}
                                    className="hamburger-social-icon"
                                  />
                                </div>
                                <div className="border border-green-400 rounded-lg my-auto px-1 py-1 cursor-pointer hamburger-social-icons-div">
                                  <Image
                                    src={twitterLogo}
                                    width={28}
                                    className="hamburger-social-icon"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            ref={menuAnimationRef}
                            className="hidden md:block opacity-0"
                          >
                            <Rive
                              src={RiveAnimation}
                              autoplay={true}
                              play={true}
                              className="lg:w-96 h-96"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </Drawer>
          </div>
        </div>
        <div
          ref={aboutDiv}
          className={`text-5xl ${
            noRainbowText ? "text-white" : "rainbow-text"
          }  lg:text-8xl 2xl:text-[150px] pt-10 pillat-normal relative z-30`}
        >
          {aboutH2}
        </div>
        <div>
          <div
            ref={animationDiv}
            className={`lg:block hidden absolute w-full h-72  2xl:right-[-40px] top-[10px] z-0`}
            style={{
              position: "absolute",
              left: bannerLeft || "35%",
              top: bannerTop || "0px",
            }}
            // className="w-44 h-44"
          >
            <Rive
              src={bannerAnimation}
              autoplay={true}
              play={true}
              // style={{width : "44px" , height : "44px"}}
            />
          </div>
        </div>
        <div
          ref={textDiv}
          className=" md:w-[60%] 2xl:w-[40%] pt-5 pillat-normal text-sm md:text-base"
        >
          {aboutText}
        </div>
      </div>
    </>
  );
};

export default BlackBannerComponent;
