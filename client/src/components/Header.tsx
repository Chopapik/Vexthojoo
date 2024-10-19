import { useEffect, useState } from "react";

const Header = () => {
  const [logoSrc, setLogoSrc] = useState("/logosm.png");
  const [loggedUserAvatar, setloggedUserAvatar] =
    useState("/defaultAvatar.png");
  const [loggedUserUsername, setloggedUserUsername] = useState("UŻYTKOWNIK");

  useEffect(() => {
    const changeLogo = () => {
      window.innerWidth > 640
        ? setLogoSrc("/logo.png")
        : setLogoSrc("/logosm.png");
    };
    changeLogo();

    window.addEventListener("resize", changeLogo);
    return () => {
      window.removeEventListener("resize", changeLogo);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-8 p-4 lg:flex-row lg:justify-between lg:space-y-0">
        <div className="space-y-1">
          <img src={logoSrc} alt="VEXTHOOJOO" />
          <hr className="w-3/4 border-fuchsia-500 border sm:w-[125%]" />
        </div>
        {/* if not logged: */}
        {/* <div className="flex flex-col space-y-3 text-white xs:flex-row xs:space-y-0 xs:space-x-4">
          <button className="button01 bg-fuchsia-500">LOGOWANIE</button>
          <button className="button01 bg-black border-2 border-fuchsia-600">
            REJESTRACJA
          </button>
        </div> */}
        {/* if logged: */}
        <div className="p-4 flex space-x-3">
          <div className="flex flex-col justify-center">
            <span id="loggedUserUsername" className="text-neutral-600 text-xs">
              o siema
            </span>
            <span className="text-white font-bold">{loggedUserUsername}</span>
          </div>
          <div>
            <div className="w-11 h-11 border border-neutral-600">
              {/* If user doesn't have an avatar, default.jpg will be loaded: */}
              <img src={loggedUserAvatar} alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
