import React from "react";

const InteractiveMarketing = () => {
  return (
    <div>
      <div className="mx-3 mb-10 mt-10 md:mx-12">
        <div className="mt-5">
          <div className="border-b border-green-500 pt-6">
            <p className="text-3xl lg:text-5xl mb-2 text-gray-800 font-[200] lg:font-normal">
              interactive Marketing
            </p>
          </div>
          <div className=" w-full mt-2">
            <span className="text-[#13a772] text-4xl sm:text-6xl md:text-5xl lg:text-6xl  ">
              <span className="">
                enhancing customer <br></br>
                relationships
              </span>
            </span>
            <span className="border-l border-gray-400 text-black text-sm pl-4 ml-3 w-[50%]  xl:max-w-[600px] leading-5 mt-3 lg:inline-block hidden ">
              <span className="w-[100%] ">
                Our unrivaled insights, innovative thinking, strategic approach,
                content services and technology solutions can help you create
                meaningful and lasting relationships with your customers.{" "}
                <span className="font-bold">know more --</span>
              </span>
            </span>

            <span className="w-[100%] lg:hidden block text-black text-xs sm:text-sm mt-2">
              we are reimagining the way business is done and product is
              consumed. we have committed ourselves to transforming business
              into an experience driven by data, technology, creativity and
              innovation
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center my-20">
          <h2 className="text-5xl md:text-6xl  text-[#13a772]">Swipper Here</h2>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMarketing;
