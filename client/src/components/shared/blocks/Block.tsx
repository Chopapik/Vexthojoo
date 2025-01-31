import React, { useEffect, useState } from "react";
import arrowIcon from "../../../assets/icons/upArrrow.svg";
import cookie from "js-cookie";
import { useCookieAcceptContext } from "../../../context/CookieAcceptContext";

const Block = ({
  content,
  name,
  background,
}: {
  content: React.ReactNode;
  name: string;
  background: string;
}) => {
  const { isCookieAccept } = useCookieAcceptContext();

  const [hideBlock, setHideBlock] = useState<boolean>(
    cookie.get(`${name}State`) === "hidden"
  );

  const handleBlockState = () => {
    setHideBlock((prev) => {
      const newState = !prev;
      if (isCookieAccept)
        cookie.set(`${name}State`, newState ? "hidden" : "visible", {
          expires: 365 * 10, // Set cookie to expire in 10 years
        });

      return newState;
    });
  };

  useEffect(() => {
    const cookieState = cookie.get(`${name}State`);
    if (cookieState === "hidden") {
      setHideBlock(true);
    } else {
      setHideBlock(false);
    }
  }, []);

  return (
    <>
      <div
        className={`w-full py-1 ${
          hideBlock ? "h-8" : "h-[400px]"
        } text-sm ${background} rounded-xl  max-w-[350px] overflow-hidden flex flex-col justify-between transition-all ease-in-out duration-200`}
      >
        <div>
          <div className="text-neutral-600 text-xs font-bold flex justify-between px-3">
            <span>{name}</span>
            <img
              src={arrowIcon}
              className={`w-5 float-right cursor-pointer transition-transform ease-in duration-200 ${
                hideBlock ? "rotate-180" : ""
              }`}
              alt="Hide/Show"
              onClick={handleBlockState}
            />
          </div>
        </div>
        <div className="h-full ">{content}</div>
      </div>
    </>
  );
};

export default Block;
