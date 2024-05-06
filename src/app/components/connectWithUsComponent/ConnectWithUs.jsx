import React from "react";

const ConnectWithUs = ({ bgColor, textColor, connectText }) => {
  return (
    <div className="mt-10 mb-16">
      <div
        className={`${textColor} ${bgColor}  flex  justify-center items-center h-20 md:h-24 lg:h-28 text-center`}
        // style={{ background: `${bgColor || "black"}` }}
      >
        <div className="md:w-[55%] lg:w-[100%]">
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl leading-[20px] pillat-normal">
          {connectText || "connect with us today to transform your business"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
