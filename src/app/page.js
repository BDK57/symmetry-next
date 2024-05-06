"use client";
import { useEffect, useRef } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./homeComponents/AboutUs";
import BrandsProducts from "./homeComponents/BrandsProducts";
import BusinessDivision from "./homeComponents/BusinessDivision";
import DeliveringSection from "./homeComponents/DeliveringSection";
import HeritageSection from "./homeComponents/HeritageSection";
import InteractiveMarketing from "./homeComponents/InteractiveMarketing";
import startingAnimation from "../../public/symmetryAnimations/starting-animation.riv";
import { gsap } from "gsap";
import Lottie from "react-lottie-player";
import RootLayout from "./layout";
import Rive from "@rive-app/react-canvas";
import GsapTopAnimation from "./components/gsapComponent/GsapTopAnimation";

export default function Home() {
  const homeStartAnimRef = useRef(null);
  const homeRiveAnimRef = useRef(null);

  return (
    <>
      <div className="">
        {/* Starting Animation */}
        <GsapTopAnimation />

        <Navbar className="" />
        <DeliveringSection />
        <div id="heritageHomeScrollRef">
          <HeritageSection />
        </div>
        <div className="md:pt-[300px]">
          <BusinessDivision />
        </div>
        {/* <InteractiveMarketing /> */}
        <BrandsProducts />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}
