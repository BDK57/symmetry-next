"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Rive from "@rive-app/react-canvas";
import startingAnimation from "../../../../public/symmetryAnimations/starting-animation.riv";
// import startingAnimation from "../../public/symmetryAnimations/starting-animation.riv";

const GsapTopAnimation = () => {
    const homeStartAnimRef = useRef(null);
    const homeRiveAnimRef = useRef(null);

    useEffect(() => {
        // Scroll to the top of the page when unmount / refresh
        window.scrollTo(0, 0);
    
        /* the word "the" before animationRef is used to get a reference to animationRef. to be styled below in code. 
           refs cannot be stlyled directly but after making a reference, we can style them.*/
        const theHomeStartAnimRef = homeStartAnimRef.current;
        const body = document.body;
    
        gsap.to(homeStartAnimRef.current, {
          y: "990px",
          delay: 1.2,
          duration: 0.5,
          // ease: "power1.inOut",
          onComplete: () => {
            theHomeStartAnimRef.style.display = "none";
            body.style.overflow = "visible";
          },
        });
    
        /* inside animation is the Rive animation being rendered in black animation */
    
        const insideAnimation = gsap.timeline({
          repeat: 1,
          repeatDelay: 0,
          yoyo: true,
        });
    
        insideAnimation.from(homeRiveAnimRef.current, {
          duration: 0.9,
          opacity: 0,
        });
    
        insideAnimation.to(homeRiveAnimRef.current, {
          duration: 0.9,
          opacity: 0,
        });
      }, []);

  return (
      <div
        ref={homeStartAnimRef}
        className="bg-black absolute w-full h-[120vh] z-50"
      >
        <div
          className="bg-black flex justify-center items-center h-[100vh]"
          // style={{ transform: "translateY(700px)" }}
        >
          <div ref={homeRiveAnimRef} className="opacity-0 w-96 h-96">
            <Rive
              src={startingAnimation}
              loop
              play
              // style={{ width: 350, height: 350 }}
            />
          </div>
        </div>
      </div>
  );
};

export default GsapTopAnimation;
