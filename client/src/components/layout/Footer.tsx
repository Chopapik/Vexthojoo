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
        <footer className="flex flex-col relative bottom-0 left-0 w-full text-xs bg-black items-center h-[8rem] justify-end font-poppins">
          <div className="w-3/4 flex flex-col items-center space-y-2">
            <div className="w-full flex">
              <hr className="border-1 border-neutral-700 my-2 flex-1" />
            </div>
            <div className="w-full flex justify-between px-1">
              <span className="text-cyan-500">
                <strong>Chopapik</strong> &copy; 2024 - {currentYear}
              </span>
              <div className="space-x-4">
                <a href="/oStronie" className="text-white hover:brightness-50">
                  o stronie
                </a>
                <a
                  href="/listaUzytkownikow"
                  className="text-white hover:brightness-50"
                >
                  lista użytkowników
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
