import { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 5);
    return () => clearTimeout(timer);
  }, []);

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  return (
    <>
      {showFooter && (
        <footer className="flex flex-col bg-black items-center font-poppins text-center">
          <div className="w-full flex flex-col items-center">
            <div className="space-x-4 flex items-end justify-center space-y-2 text-neutral-400 text-[0.7rem]">
              <a href="/coNowego" className=" hover:brightness-50">
                <div className="flex">
                  <span>co nowego</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
              </a>
              <a href="/oStronie" className="hover:brightness-50">
                o stronie
              </a>
              <a href="/listaUzytkownikow" className="hover:brightness-50">
                lista użytkowników
              </a>
            </div>
            <div className="w-full flex">
              <hr className="border-1 border-neutral-700 my-2 flex-1" />
            </div>
            <div className="w-full flex px-1  justify-center">
              <div className="text-customCyan-default text-[0.6rem]">
                <strong>Chopapik</strong>
                <span> &copy; 2024 - {currentYear}</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

// <div className="space-x-4 flex flex-col items-end justify-center space-y-2 md:space-y-0 md:flex-row">
