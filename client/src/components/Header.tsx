import { useEffect, useState } from "react";

const Header = () => {
  const [logoSrc, setLogoSrc] = useState("/logosm.png");

  useEffect(() => {
    window.innerWidth > 460
      ? setLogoSrc("/logo.png")
      : setLogoSrc("/logosm.png");
  });

  return (
    <>
      <div className="p-2 w-full flex justify-center">
        <img src={logoSrc} alt="logo" />
      </div>
      <hr className="bg-fuchsia-600 border-none h-1 w-3/4" />
    </>
  );
};
export default Header;
