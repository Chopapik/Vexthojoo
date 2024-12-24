import { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 5);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showFooter && (
        <footer className="flex flex-col relative bottom-0 left-0 w-full text-xs bg-black items-center h-[8rem] justify-end">
          <div className="w-3/4 flex flex-col items-center space-y-2">
            <div className="w-full flex">
              <hr className="border-1 border-neutral-700 my-2 flex-1" />
              <div className="w-4 h-4 bg-cyan-500 flex justify-center items-center">
                <div className="w-2 h-2 bg-black"></div>
              </div>
              <hr className="border-1 border-neutral-700 my-2 flex-1" />
            </div>
            <span className="text-cyan-500">
              <strong>Chopapik</strong> &copy; 2024
            </span>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
