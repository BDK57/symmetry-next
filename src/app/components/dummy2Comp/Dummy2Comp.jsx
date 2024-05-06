"use client"
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

const Dummy2Comp = () => {
  const scrollRef = useRef(null);
  
 

  useEffect(() => {
    gsap.to(window, {
      duration: 3,
      scrollTo: { y: scrollRef.current, offsetY: 70 },
    });
  }, []);

  const navbarItems = [
    {
      id : 0,
      name : "sec1",
      ref : "#sec1Ref"
    },
    {
      id : 1,
      name : "sec2",
      ref : "#sec2Ref"
    },
    {
      id : 3,
      name : "sec3",
      ref : "#sec3Ref"
    },
    {
      id : 4,
      name : "sec4",
      ref : "#sec4Ref"
    },
  ]

  return (
    <>
      <div className="flex fixed gap-20 bg-black">
        {navbarItems.map((item , index)=>(
          <>
            <span onClick={() => gsap.to(window, { duration: 1, scrollTo: { y: item.ref, offsetY: 70 } })} >{item.name}</span>
          </>
        ))}
      </div>
    
    </>
  );
};

export default Dummy2Comp;
