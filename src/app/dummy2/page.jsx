"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const Page = () => {
  const liRefs = {
    home: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const liItems = [
    {
      id: 0,
      item: "home",
      refID: "#homeRef",
    },
    {
      id: 1,
      item: "about",
      refID: "#aboutRef",
    },
    {
      id: 2,
      item: "contact",
      refID: "#contactRef",
    },
  ];

  useEffect(() => {
    liItems.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item.refID,
          start: "top center",
          end: "bottom center",
          markers : true,
          toggleActions: "play none none none",
          onEnter: () => {
            // Reset all list items to their initial color
            Object.values(liRefs).forEach((ref) => {
              gsap.to(ref.current, { color: "initial" });
            });

            // Set the color of the current list item to red
            gsap.to(liRefs[item.item].current, { color: "red" });
          },
          onEnterBack: () => {  
            // Reset all list items to their initial color
            Object.values(liRefs).forEach((ref) => {
              gsap.to(ref.current, { color: "initial" });
            });

            // Set the color of the current list item to red
            gsap.to(liRefs[item.item].current, { color: "red" });
          },
        },
      });

      return () => {
        tl.kill();
      };
    });
  }, [liRefs]);

  return (
    <>
      <div>
        <div className="bg-red-300 flex justify-center gap-40 h-20 items-center fixed w-full">
          {liItems.map((item) => (
            <div key={item.id} className="text-6xl" ref={liRefs[item.item]}>
              <div>{item.item}</div>
            </div>
          ))}
        </div>

        <div id="homeRef" className="bg-red-500 h-[100vh]">
          home
        </div>
        <div id="aboutRef" className="bg-blue-500 h-[100vh]">
          about
        </div>
        <div id="contactRef" className="bg-green-500 h-[100vh]">
          contact
        </div>
      </div>
    </>
  );
};

export default Page;
