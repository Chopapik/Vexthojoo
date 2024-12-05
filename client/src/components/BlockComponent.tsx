import React, { useState } from "react";

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
        className={`w-full py-1 sm:w-full lg:w-full xl:w-3/4 ${
          rotateButtonBlock2 ? "h-8" : "h-[550px]"
        } text-sm ${background} rounded-xl overflow-hidden flex flex-col justify-between transition-all ease-in-out duration-200`}
      >
        <div>
          <div className="text-neutral-600 font-bold flex justify-between px-2">
            <span>{name}</span>
            <img
              src="/icons/upArrrow.svg"
              className={`w-5 float-right cursor-pointer transition-transform ease-in duration-200 ${
                rotateButtonBlock2 ? "rotate-180" : ""
              }`}
              alt="Hide/Show"
              onClick={() => setRotateButtonBlock2((prev) => !prev)}
            />
          </div>
          {content}
        </div>
      </div>
      ;
    </>
  );
};

export default Block;
