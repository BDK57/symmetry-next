"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.webp";
import hamburger from "../../../../public/hamburger-icon-3.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import "../navbar/Navbar.css"
gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const Navbar2 = () => {
  const navRef = useRef();

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="bg-black w-full " ref={navRef}>
        <div className="py-5 mx-2 md:mx-12">
          <div className="flex justify-between items-center gap-3">
            <Link href="/">
              <div className="ml-1">
                <Image
                  src={logo}
                  alt="logo"
                  className="w-[45vw] md:w-[30vw] lg:w-[25vw]"
                />
              </div>  
            </Link>

            {/* <div className="ss pillat-thin lg:block hidden">
              <ul className="flex gap-3 xl:gap-5 text-[1.2vw] 2xl:text-xl rainbow-text cursor-pointer">
                <li>our heritage</li>
                <li>business divisions</li>
                <li>brands & products</li>
                <li>clients</li>
                <li>affiliations & partnerships</li>
              </ul>
            </div> */}
            <div>
              <Image
                src={hamburger}
                alt="hamburger"
                className="w-[10vw] lg:w-[6vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
