"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

const GsapBottomAnimation = ({getLink}) => {
  const router = useRouter();

  const toTransformationBlackRef = useRef(null);

  useEffect(() => {
    const theToTransformationBlack = toTransformationBlackRef.current;
    const body = document.body;

    gsap.from(toTransformationBlackRef.current, {
      y: "800px",
      onStart: () => {
        theToTransformationBlack.style.display = "block";
        body.style.overflow = "hidden";
      },
    });

    gsap.to(toTransformationBlackRef.current, {
      y: "-420px",
      duration: 0.5,
      onComplete: () => {
        router.push(getLink || "transformation");
      },
    });
  }, []);

  return (
    <div className="relative">
      <div
        ref={toTransformationBlackRef}
        className="bg-black w-full h-[200vh] absolute z-50 top-0 hidden"
        style={{ transform: "translateY(800px)" }}
      ></div>
    </div>
  );
};

export default GsapBottomAnimation;
