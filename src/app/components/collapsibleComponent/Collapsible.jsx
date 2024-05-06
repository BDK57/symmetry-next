// "use client"
import React from "react";
import Collapsible from "react-collapsible";
import pdfImg from "../../../../public/pdf-img.png";
import Image from "next/image";

const CollapsibleComp = ({ dataArr }) => {
  // const [openId, setOpenId] = useState();

  // const opening = (id) => {
  //   setOpenId(id)
  // };

  // console.log(openId , "openId")

  return (
    <>
      {dataArr.map((item, index) => (
        <Collapsible key={item.id} trigger={item.title} className="pillat-normal">
          <div className="grid grid-cols-2 sm:grid-cols-3 max-w-[1000px] ">
            {[
              "annualReport",
              "firstQuarter",
              "secondQuarter",
              "thirdQuarter",
              "briefing",
              "agm",
              "boardMeeting",
              "financialResults",
              "disclosureInterest",
              "materialInfo",
              "materialInfo2",
            ].map(
              (quarter, quarterIndex) =>
                item[quarter] && (
                  <>
                    <div className=" mx-auto my-10 flex justify-center">
                      <div
                        key={quarterIndex}
                        className="text-center min-w-[130px]"
                      >
                        <div className="border border-green-400 flex flex-col justify-center items-center rounded-md py-5">
                          <div>
                            <Image src={pdfImg} className="w-16 sm:w-20" />
                          </div>
                        </div>
                        <div className="w-36">
                          <p className="text-sm !leading-[20px] mt-3 text-gray-600 lg:text-lg text-center pillat-normal">{item[quarter]}</p>
                          {/* {console.log(item.id, "collapsed id")} */}
                        </div>
                      </div>
                    </div>
                  </>
                )
            )}
          </div>
        </Collapsible>
      ))}
    </>
  );
};

export default CollapsibleComp;
