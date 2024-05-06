"use client"
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

const Dummy3Comp = () => {
  const scrollSec1 = useRef(null);
  const scrollSec2 = useRef(null);
  const scrollSec3 = useRef(null);
  const scrollSec4 = useRef(null);
  return (
    <>
      <div ref={scrollSec1} id="sec1Ref" className="bg-red-500 h-[500px]">
        section 1
      </div>
      <div ref={scrollSec2} id="sec2Ref" className="bg-orange-500 h-[200px]">
        {/* <button onClick={() => gsap.to(window, { duration: 3, scrollTo: { y: scrollRef.current, offsetY: 70 } })}>
          go to section 4
        </button> */}
      </div>
      <div ref={scrollSec3} id="sec3Ref" className="bg-blue-500 h-[1000px]">
        section 3
      </div>
      <div ref={scrollSec4} id="sec4Ref" className="bg-purple-500 h-[1000px]">
        section 4
      </div>
    </>
  );
};

export default Dummy3Comp;
