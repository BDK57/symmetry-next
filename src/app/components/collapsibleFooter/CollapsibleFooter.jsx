// "use client"
import React from "react";
import Collapsible from "react-collapsible";
import pdfImg from "../../../../public/pdf-img.png";
import Image from "next/image";

const CollapsibleFooter = ({ dataArr , textColor, setGetLink }) => {
  
  return (
    <>
      {dataArr.map((item, index) => (
        <>
        {/* {console.log(item.link , "footer links")} */}
        <Collapsible key={item.id} trigger={item.title} className="pillat-normal">
          <div className="max-w-[1000px] ">
            {[
              "companyInformation",
              "governance",
              "financialReports",
              "corporateBriefings",
              "noticesAnnouncements",
              "importantDocuments",
              "investorContacts",
              "transformation",
              "interactiveMarketing",
              "commerce",
              "mobility",
              "symmetryDigital",
              "irisDigital",
              "symmetryTrade",
              "coral",
              "coralPerformance",
              "appabilities",
              "survit",
              "mobits",
              "telecom",
              "bankingFinance",
              "fmcg",
              "realEstate",
              "pharmaceutical",
              "others",
            ].map(
              (quarter, quarterIndex) =>
                item[quarter] && (
                  <>
                    <div className="ml-2">
                      <div
                        key={quarterIndex}
                        className=""
                      >
                        <div className="">
                          <p className={`text-base mt-1 ${textColor} pillat-normal`}>{item[quarter]}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )
            )}
          </div>
        </Collapsible>
        </>
      ))}
    </>
  );
};

export default CollapsibleFooter;

// onClick={()=> {console.log(item.link , "footer link clicked")}}