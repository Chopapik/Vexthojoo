import { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showFooter && (
        <footer className="relative bottom-0 left-0 w-full text-xs py-1 bg-black flex justify-center items-center">
          <span className="text-cyan-500">
            <strong>Chopapik</strong> &copy; 2024
          </span>
        </footer>
      )}
    </>
  );
};

export default Footer;
