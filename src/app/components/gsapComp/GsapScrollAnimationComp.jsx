import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateElement = (elementRef) => {
  gsap.to(elementRef.current, {
    scrollTrigger: {
      trigger: elementRef.current,
      toggleActions: "restart restart none none",
    },
    duration: 1.7,
    opacity: 1,
    y: "0px",
  });
};

const GsapScrollAnimationComp = () => {
  const gsapScrollRefs = {
    firstFadeInAnimation: useRef(),
    secondFadeInAnimation: useRef(),
    thirdFadeInAnimation: useRef(),
    fourthFadeInAnimation: useRef(),
    fifthFadeInAnimation: useRef(),
    sixthFadeInAnimation: useRef(),
    seventhFadeInAnimation: useRef(),
    eightFadeInAnimation: useRef(),
    ninthFadeInAnimation: useRef(),
    tenthFadeInAnimation: useRef(),
    eleventhFadeInAnimation: useRef(),
  };

  /* Ref names are unique so they are working */

  useEffect(() => {
    animateElement(gsapScrollRefs.firstFadeInAnimation);
    animateElement(gsapScrollRefs.secondFadeInAnimation);
    animateElement(gsapScrollRefs.thirdFadeInAnimation);
    animateElement(gsapScrollRefs.fourthFadeInAnimation);
    animateElement(gsapScrollRefs.fifthFadeInAnimation);
    animateElement(gsapScrollRefs.sixthFadeInAnimation);
    animateElement(gsapScrollRefs.seventhFadeInAnimation);
    animateElement(gsapScrollRefs.eightFadeInAnimation);
    animateElement(gsapScrollRefs.ninthFadeInAnimation);
    animateElement(gsapScrollRefs.tenthFadeInAnimation);
    animateElement(gsapScrollRefs.eleventhFadeInAnimation);
  }, []);

  return gsapScrollRefs;
};

export default GsapScrollAnimationComp;



/* The above code is shorten by chat gpt and below code works the same */



// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const GsapScrollAnimationComp = () => {
//   const gsapScrollRefs = {

//     /* Text Sliding Component Refs */
//     TextSlidingHeadingRef: useRef(),
//     TextSlidingSliderRef: useRef(),
//     TextSlidingSliderTextRef: useRef(),

//     /* Heading And Swipper Component Refs */
//     headingAndSwipperTitleRef : useRef(),
//     headingAndSwipperHeadingRef : useRef(),
//     headingAndSwipperRef : useRef(),
//   };

//   useEffect(() => {
//     gsap.to(gsapScrollRefs.TextSlidingHeadingRef.current, {
//       scrollTrigger: {
//         trigger: gsapScrollRefs.TextSlidingHeadingRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });

//     gsap.to(gsapScrollRefs.TextSlidingSliderRef.current, {
//       scrollTrigger: {
//         trigger: gsapScrollRefs.TextSlidingSliderRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });

//     gsap.to(gsapScrollRefs.TextSlidingSliderTextRef.current, {
//       scrollTrigger: {
//         trigger: gsapScrollRefs.TextSlidingSliderTextRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });

//     gsap.to(gsapScrollRefs.headingAndSwipperTitleRef.current, {
//       scrollTrigger: {
//         trigger: gsapScrollRefs.headingAndSwipperTitleRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });

//     gsap.to(gsapScrollRefs.headingAndSwipperHeadingRef.current, {
//       scrollTrigger: {
//         trigger: gsapScrollRefs.headingAndSwipperHeadingRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });

//     gsap.to(gsapScrollRefs.headingAndSwipperRef.current, {
//       scrollTrigger: {
//         trigger:gsapScrollRefs.headingAndSwipperRef.current,
//         toggleActions: "restart restart none none",
//       },
//       duration: 1.5,
//       opacity: 1,
//       y: 0,
//     });
//   }, []);

//   return gsapScrollRefs;
// };

// export default GsapScrollAnimationComp;
