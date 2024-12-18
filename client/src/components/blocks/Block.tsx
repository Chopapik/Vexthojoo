import React, { useState } from "react";
import arrowIcon from "../../assets/icons/upArrrow.svg";

const Block = ({
  content,
  name,
  background,
}: {
  content: React.ReactNode;
  name: string;
  background: string;
}) => {
  const [rotateButtonBlock2, setRotateButtonBlock2] = useState(false);

  return (
    <>
      <div
        className={`w-full py-1 xs:w-3/4 md:w-3/4 lg:w-full xl:w-3/4 ${
          rotateButtonBlock2 ? "h-8" : "h-[550px]"
        } text-sm ${background} rounded-xl overflow-hidden flex flex-col justify-between transition-all ease-in-out duration-200`}
      >
        <div>
          <div className="text-neutral-600 font-bold flex justify-between px-3">
            <span>{name}</span>
            <img
              src={arrowIcon}
              className={`w-5 float-right cursor-pointer transition-transform ease-in duration-200 ${
                rotateButtonBlock2 ? "rotate-180" : ""
              }`}
              alt="Hide/Show"
              onClick={() => setRotateButtonBlock2((prev) => !prev)}
            />
          </div>
        </div>
        <div className="h-full ">{content}</div>
      </div>
      ;
    </>
  );
};

export default Block;
