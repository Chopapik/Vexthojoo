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
        <div className="w-full flex justify-center h-10 mb-4">
          <div className="bg-neutral-700 w-3/4 flex justify-between rounded-full text-neutral-200">
            <input
              type="text"
              placeholder="Nie no zadoj pytanie"
              className="bg-transparent px-4 outline-none flex-grow"
            />
            <div className="w-10 h-10 flex justify-center items-center ">
              <div className="w-8 h-8 bg-neutral-800 rounded-full flex justify-center items-center">
                <img src="/icons/upArrow2.svg" alt="send" className="w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Block;
