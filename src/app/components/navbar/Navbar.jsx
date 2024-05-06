"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.webp";
import hamburger from "../../../../public/hamburger-icon-3.png";
import hamburgerSvg from "../../../../public/hamburger.svg";
import linkdinLogo from "../../../../public/linkdin-logo.webp";
import fbLogo from "../../../../public/fb-logo.webp";
import twitterLogo from "../../../../public/twitter-logo.webp";
import rightChevron from "../../../../public/right-chevron.png";
import "../navbar/Navbar.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import Lottie from "react-lottie-player";
import bannerAnimation from "../../../../public/symmetryAnimations/homeBannerAnimation.json";

import Rive from "@rive-app/react-canvas";
import RiveAnimation from "../../../../public/symmetryAnimations/banner-Rive.riv";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import CollapsibleComp from "../collapsibleComponent/Collapsible";
import CollapsibleFooter from "../collapsibleFooter/CollapsibleFooter";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Navbar = ({ toggleRed, setToggleRed }) => {
  const [collapseIcon, setCollapseIcon] = useState(true);
  const [collapseIcon1, setCollapseIcon1] = useState(true);
  const [collapseIcon2, setCollapseIcon2] = useState(true);
  const [collapseIcon3, setCollapseIcon3] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
  }, []);

  const [activeBg, setActiveBg] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [getNavRefId, setNavRefId] = useState();
  const [toggleGsap, setToggleGsap] = useState(true);
  const navRef = useRef();
  const hamburgerLogoRef = useRef();
  const subMenuRef = useRef();
  const socialLinksRef = useRef();
  const menuAnimationRef = useRef();

  /****** Mobile *******/

  const subMenuRefMobile = useRef();
  const socialLinksRefMobile = useRef();

  useEffect(() => {
    /* Navbar shows and  closes base on scrolling up and down */

    var actionNav = gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: navRef.current,
        start: "10px top",
        end: 99999,
        onUpdate: ({ direction }) => {
          if (direction === -1) {
            actionNav.reverse();
          } else if (direction === 1) {
            actionNav.play();
          }
        },
      },
      y: "-=100",
      duration: 0.3,
      ease: "power1.inOut",
    });

    // Changing li item color when reaching to its div
    liItems.forEach((item, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item.refId,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
          markers: false,
          onEnter: () => {
            setActiveBg(index); // Change active background index
          },
          onEnterBack: () => {
            setActiveBg(index); // Change active background index
          },
        },
      });

      return () => {
        tl.kill();
      };
    });
  }, []);

  // const navHoverFunc = (itemId, refId) => {
  //   setActiveBg(itemId);
  //   setNavRefId(refId);
  // };

  const liItems = [
    {
      id: 0,
      name: "our heritage",
      refId: "#heritageHomeScrollRef",
    },
    {
      id: 1,
      name: "business division",
      refId: "#businessHomeScrollRef",
    },
    {
      id: 2,
      name: "brands & products",
      refId: "#brandsHomeScrollRef",
    },
    {
      id: 3,
      name: "clients",
      refId: "#clientsHomeScrollRef",
    },
    {
      id: 4,
      name: "affiliations & partnerships",
      refId: "#affiliationsHomeScrollRef",
    },
    {
      id: 5,
      name: "contact us",
      refId: "#contactUsHomeScrollRef",
    },
  ];

  const investorRelationsItems = [
    {
      id: 0,
      name: "company information",
    },
    {
      id: 1,
      name: "governance",
    },
    {
      id: 2,
      name: "financial reports",
    },
    {
      id: 3,
      name: "corporate briefings",
    },
    {
      id: 4,
      name: "notices & announcements",
    },
    {
      id: 5,
      name: "important documents",
    },
    {
      id: 6,
      name: "investor contacts",
    },
  ];

  const businessDivisionsItems = [
    {
      id: 0,
      name: "transformation",
    },
    {
      id: 1,
      name: "interactive marketing",
    },
    {
      id: 2,
      name: "commerce",
    },
    {
      id: 3,
      name: "mobility",
    },
  ];

  /***********  Antd Hamburger Sub Menu Items  ***********/

  const toggleDrawer = () => {
    const myTimeout = setTimeout(() => {
      setIsOpen((prevState) => !prevState);
    }, 700);
  };

  const items = [
    getItem(
      <div className="footer-text-color-toggle pillat-normal abbo">about</div>,
      "sub1",
      [<></>]
    ),

    getItem(
      <>
        <Link href={"investorRelations"}>
          <div className="footer-text-color-toggle pillat-normal">
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
      <div className="footer-text-color-toggle pillat-normal">
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
          <div className="footer-text-color-toggle pillat-normal">
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
          <div className="footer-text-color-toggle pillat-normal">clients</div>
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
          <div className="footer-text-color-toggle pillat-normal abbo">
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
          <div className="footer-text-color-toggle pillat-normal abbo">
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
          <div className="footer-text-color-toggle pillat-normal abbo">
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

  /***********  Hamburger GSAP animation toggle  ***********/

  const gsapToggle = () => {
    setToggleGsap(!toggleGsap);

    /***** Desktop Animations ******/

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

  const textColor = "text-white";

  return (
    <>
      <div className="bg-black w-full z-30 fixed" ref={navRef}>
        <div className="py-5 mx-2 md:mx-12">
          <div className="flex justify-between items-center gap-3">
            <Link href="/">
              <div className="ml-1">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-[45vw] md:w-[30vw] lg:w-[22vw]"
                />
              </div>
            </Link>
            {liItems.map((item, index) => (
              <div key={item.id} className="ss pillat-thin lg:block hidden">
                <ul className="flex items-center gap-3 xl:gap-5 text-[1vw] 2xl:text-xl cursor-pointer">
                  <li
                    key={item.id}
                    // onMouseOver={() => navHoverFunc(item.id, item.refId)}
                    // onMouseOut={() => setActiveBg(0)}
                    className={`${
                      activeBg === index ? "rainbow-text" : "text-white"
                    } text-white`}
                  >
                    <div
                      onClick={() =>
                        gsap.to(window, {
                          duration: 1.5,
                          scrollTo: { y: item.refId, offsetY: 100 },
                        })
                      }
                    >
                      {item.name}
                      <span
                        className={`hidden lg:inline-flex ${
                          activeBg === index
                            ? "rotate-[45deg]"
                            : "rotate-[90deg]"
                        } rainbow-border transition-all duration-300`}
                      ></span>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
            <div className="">
              <div class="menu cross menu--1">
                <label
                  className="top-[-15px] lg:top-[0px] absolute cursor-pointer w-[50vw] h-[50vw] max-w-[90px] max-h-[50px] !right-[-20px] md:!right-[10px]"
                  style={{ zIndex: "99999" }}
                >
                  <input
                    type="checkbox"
                    onClick={() => {
                      toggleDrawer();
                      gsapToggle();
                    }}
                  />
                  <svg
                    viewBox="0 0 100 100"
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="0" cy="0" r="0" />
                    <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                    <path class="line--2" d="M0 50h70" />
                    <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                  </svg>
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
                    className="w-[55vw] opacity-0 translate-x-[-300px]"
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

                    {/*********  Desktop   *********/}

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
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div
id="page-loader"
className="bg-red-500 justify-center items-center h-[110vh] w-[100%] absolute top-0 hidden "
style={{ transform: "translateY(700px)" }}
ref={loaderRef}
>
<div
  ref={lottieAnimationRef}
  className="opacity-0 w-96 h-96"
>
  <Lottie
    loop
    animationData={bannerAnimation}
    play
    // style={{ width: 350, height: 350 }}
  />
</div>
</div> */
}

// onClick={() => loaderAnimationFunc()}
