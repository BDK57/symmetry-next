"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import investorImg from "../../../../public/footer-investors-img.webp";
import linkdinImg from "../../../../public/footer-linkdin-img.webp";
import xImg from "../../../../public/x-logo-footer.webp";
import fbImg from "../../../../public/fb-logo.webp";
import phoneIcon from "../../../../public/phone-footer-icon.webp";
import mailIcon from "../../../../public/mail-footer-icon.webp";
import GsapBottomAnimation from "../gsapComponent/GsapBottomAnimation";
import CollapsibleFooter from "../collapsibleFooter/CollapsibleFooter";

const Footer = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const [getLink, setGetLink] = useState("");
  const [triggerBottomAnimation, setTriggerBottomAnimation] = useState(false);
  const [collapseIcon, setCollapseIcon] = useState(true);
  const [collapseIcon1, setCollapseIcon1] = useState(true);
  const [collapseIcon2, setCollapseIcon2] = useState(true);
  const [collapseIcon3, setCollapseIcon3] = useState(true);

  const triggerBotAnimFunc = () => {
    setTriggerBottomAnimation(true);
  };

  const footerDesktopItems = [
    {
      title: "about us",
      subItems: [
        "company",
        "vision",
        "mission",
        "board of directors",
        "initiatives",
      ],
      link: "company",
    },
    {
      title: "investor relations",
      subItems: [
        "company information",
        "governance",
        "financial reports",
        "corporate briefings",
        "notices & annoucements",
        "important documents",
        "investor contacts",
      ],
      link: "investorRelations",
    },
    {
      title: "business divisions",
      subItems: [
        "transformation",
        "interactive marketing",
        "commerce",
        "mobility",
      ],
      link: null,
    },
    {
      title: "brands & products",
      subItems: [
        "symmetry digital",
        "iris digital",
        "coral",
        "coral performance",
        "appabilities",
        "survit",
        "mobits",
        "influense ai",
      ],
      link: "brands-products",
    },
    {
      title: "clients",
      subItems: [
        "telecom",
        "banking & finance",
        "fmcg",
        "real estate",
        "pharmaceutical",
        "others",
      ],
      link: "clients",
    },
    {
      title: "affiliation & partnerships",
      subItems: ["google", "microsoft", "alibaba", "iso 9001:2015"],
      link: "google",
    },
    {
      title: "contact us",
      subItems: ["karachi", "islamabad", "lahore", "general & media inquiries"],
      link: "contact-us",
    },
  ];

  const footerMobileItems = [
    {
      id: 0,
      title: (
        <>
          <div className="flex justify-between gap-5 mt-2 ">
            <div onClick={() => setGetLink("company", triggerBotAnimFunc())}>
              about us
            </div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            {/* <div className="text-2xl font-bold" >
              {collapseIcon ? "+" : "-"}
            </div> */}
          </div>
        </>
      ),
      link: "company",
    },
    {
      id: 1,
      title: (
        <>
          <div
            onClick={() => setCollapseIcon(!collapseIcon)}
            className={`flex justify-between gap-5 mt-2 ${
              !collapseIcon ? "footer-text-color-toggle-2" : "text-black"
            } `}
          >
            <div
              onClick={() =>
                setGetLink("investorRelations", triggerBotAnimFunc())
              }
            >
              investors relations
            </div>
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
      link: "investorRelations",
    },
    {
      id: 2,
      title: (
        <>
          <div
            onClick={() => setCollapseIcon1(!collapseIcon1)}
            className={`flex justify-between gap-5 mt-2 ${
              !collapseIcon1 ? "footer-text-color-toggle-2" : "text-black"
            } `}
          >
            <div onClick={() => setGetLink("", triggerBotAnimFunc())}>
              business divisions
            </div>
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
      link: null,
    },
    {
      id: 3,
      title: (
        <>
          <div
            onClick={() => setCollapseIcon2(!collapseIcon2)}
            className={`flex justify-between gap-5 mt-2 ${
              !collapseIcon2 ? "footer-text-color-toggle-2" : "text-black"
            } `}
          >
            <div
              onClick={() =>
                setGetLink("brands-products", triggerBotAnimFunc())
              }
            >
              brands & products
            </div>
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
      link: "brands-products",
    },
    {
      id: 4,
      title: (
        <>
          <div
            onClick={() => setCollapseIcon3(!collapseIcon3)}
            className={`flex justify-between gap-5 mt-2 ${
              !collapseIcon3 ? "footer-text-color-toggle-2" : "text-black"
            } `}
          >
            <div onClick={() => setGetLink("clients", triggerBotAnimFunc())}>
              clients
            </div>
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
      link: "clients",
    },
    {
      id: 5,
      title: (
        <>
          <div className="flex justify-between gap-5 mt-2 ">
            <div onClick={() => setGetLink("google", triggerBotAnimFunc())}>
              affiliations & partnerships{" "}
            </div>
            {/* <div className="text-2xl font-bold" >
              {collapseIcon ? "+" : "-"}
            </div> */}
          </div>
        </>
      ),
      link: "google",
    },
    {
      id: 6,
      title: (
        <>
          <div className="flex justify-between gap-5 mt-2 ">
            <div onClick={() => setGetLink("careers", triggerBotAnimFunc())}>
              careers{" "}
            </div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            {/* <div className="text-2xl font-bold" >
              {collapseIcon ? "+" : "-"}
            </div> */}
          </div>
        </>
      ),
      link: "careers",
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
            <div onClick={() => setGetLink("contact-us", triggerBotAnimFunc())}>
              contact us
            </div>
            {/* <div className={`${collapseIcon ? "bg-red-500" : "bg-green-500"}`} >+</div> */}
            {/* <div className="text-2xl font-bold" >
              {collapseIcon ? "+" : "-"}
            </div> */}
          </div>
        </>
      ),
      link: "contact-us",
    },
  ];

  const textColor = "text-black";

  return (
    <>
      <div className="relative">
        {triggerBottomAnimation && <GsapBottomAnimation getLink={getLink} />}
        <div className="bg-[#fafafa]">
          {/****** Mobile  *******/}
          <div className="rainbow-symmetry-border lg:hidden"></div>

          <div className="mx-3 md:mx-5 lg:hidden pt-10">
            <div className="text-black flex flex-col gap-2">
              <div className="flex text-2xl">
                <div className="text flex flex-col text-black w-full">
                  <CollapsibleFooter
                    dataArr={footerMobileItems}
                    textColor={textColor}
                    setGetLink={setGetLink}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rainbow-symmetry-border lg:mt-0 mt-4 "></div>
          <div className="investors-div lg:hidden mt-2 mx-2">
            <div className="flex gap-2">
              <div>
                <Image src={investorImg} width={50} />
              </div>
              <div className="ml-[2px]">
                <div className="text-black text-xs">investor complaints</div>
                <div className=" mt-2 text-sm pillat-normal">
                  <div className="flex gap-2 pb-[2px] text-black text-xs">
                    <div>
                      <Image src={phoneIcon} width={15} />
                    </div>
                    <div className="">+92 21 3534 0688 ext. 105</div>
                  </div>
                  <div className="flex gap-2 text-black text-xs">
                    <div>
                      <Image src={mailIcon} width={15} />
                    </div>
                    <Link href={"mailto:complaints@symmetrygroup.biz"} target="_blank">
                      <div> complaints@symmetrygroup.biz </div>
                      </Link>
                  </div>
                </div>
              </div>
              <div className="text-black">
                <h2 className="text-xs pillat-normal !font-extrabold mb[2px]">
                  follow us
                </h2>
                <div className="flex justify-center items-center gap-1">
                  <div className="border border-gray-400 rounded-md cursor-pointer">
                    <Link
                      href={"https://www.linkedin.com/company/symmetry-group/"}
                      target="blank"
                    >
                      <Image src={linkdinImg} width={25} />
                    </Link>
                  </div>
                  <div className="border border-gray-400 rounded-md">
                    <Link
                      href={"https://www.facebook.com/SymmetryGroup/"}
                      target="blank"
                    >
                      <Image src={fbImg} width={25} />
                    </Link>
                  </div>
                  <div className="border border-gray-400 rounded-md">
                    <Link
                      href={"https://twitter.com/SymmetryGroupHQ/"}
                      target="blank"
                    >
                      <Image src={xImg} width={25} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/****** Desktop *******/}
          <div className="lg:pb-8 pb-0 pt-10">
            <div className="hidden lg:block mx-10">
              <div className="gap-4 grid grid-cols-7">
                {footerDesktopItems.map((item, index) => (
                  <div key={index} className="text-black">
                    {item.link ? (
                      <h2
                        onClick={() => {
                          triggerBotAnimFunc();
                          setGetLink(item.link);
                        }}
                        className="font-semibold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer"
                      >
                        {item.title}
                      </h2>
                    ) : (
                      <h2 className="font-semibold text-lg min-h-[70px] mb-2 footer-text-color-toggle cursor-pointer">
                        {item.title}
                      </h2>
                    )}
                    <ul className="text-gray-500 flex flex-col gap-2 pillat-thin">
                      {item.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="footer-text-color-toggle cursor-pointer"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rainbow-symmetry-border"></div>

          <div className="investors-div lg:block hidden mx-16 my-4">
            <div className="flex justify-between">
              <div className="flex gap-10">
                <div>
                  <Image src={investorImg} alt="investors img" width={50} />
                </div>
                <div className="text-black">
                  <h2 className="font-[500] text-base">investors complaints</h2>
                  <div className="flex gap-10 text-sm pillat-normal">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image src={phoneIcon} width={15} />
                      </div>
                      <div>+92 21 3534 0688 ext. 105</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div>
                        <Image src={mailIcon} width={15} />
                      </div>
                      <Link href={"mailto:complaints@symmetrygroup.biz"} target="_blank">
                      <div> complaints@symmetrygroup.biz </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-black">
                <h2 className="text-lg pillat-normal !font-extrabold mb-1">
                  follow us
                </h2>
                <div className="flex justify-center items-center gap-2">
                  <div className="border border-gray-400 rounded-md cursor-pointer">
                    <Link
                      href={"https://www.linkedin.com/company/symmetry-group/"}
                      target="blank"
                    >
                      <Image src={linkdinImg} width={30} />
                    </Link>
                  </div>
                  <div className="border border-gray-400 rounded-md">
                    <Link
                      href={"https://www.facebook.com/SymmetryGroup/"}
                      target="blank"
                    >
                      <Image src={fbImg} width={30} />
                    </Link>
                  </div>
                  <div className="border border-gray-400 rounded-md">
                    <Link
                      href={"https://twitter.com/SymmetryGroupHQ/"}
                      target="blank"
                    >
                      <Image src={xImg} width={30} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
