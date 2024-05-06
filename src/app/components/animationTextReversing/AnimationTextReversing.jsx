import React from "react";

const AnimationTextReversing = ({ children, flexDirection }) => {
  // console.log(flexDirection, "flex checking");
  return (
    <>
      <div className="mx-3 md:mx-12 mt-10">
        <div className={`lg:flex justify-between ${flexDirection}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default AnimationTextReversing;
