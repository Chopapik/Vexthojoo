import { useEffect, useState } from "react";
import Panel from "./Panel";
import PanelVisibility from "../hooks/PanelVisibility";

const Header = () => {
  const [logoSrc, setLogoSrc] = useState("/logosm.png");

  const { showPanel, closePanel, visiblePanelId } = PanelVisibility();

  const [loggedUser, setLoggedUser] = useState({
    avatar: "./defaultAvatar.png",
    username: null,
  });

  useEffect(() => {
    const changeLogo = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
      {/* login panel:' */}
      <Panel
        content={
          <>
            <div className="flex flex-col items-center space-y-[60px]">
              <div className="w-full">
                <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
                  LOGOWANIE
                </span>
                <hr className="border-neutral-500 w-3/4" />
              </div>

              <div className="flex flex-col space-y-11 w-3/4">
                <div className="relative">
                  <input
                    type="text"
                    className="input01"
                    name="username"
                    placeholder=""
                  />
                  <label for="username" className="label01">
                    NAZWA
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="input01"
                    name="username"
                    placeholder=""
                  />
                  <label for="username" className="label01">
                    HASŁO
                  </label>
                </div>
              </div>
              <div className="text-xs flex flex-col items-center space-y-10 md:flex-row md:space-y-0 px-2  w-3/4 justify-between">
                <div className="space-x-1">
                  <input type="checkbox" name="noLogout" />
                  <label for="noLogout" className=" mb-[2px]">
                    Nie wylogowuj mnie
                  </label>
                </div>
                <a href="cos" className="underline cursor-pointer">
                  Przypomnij hasło
                </a>
              </div>
              <button className="button01 bg-fuchsia-500">WŁAŹ</button>
            </div>
          </>
        }
        isVisible={visiblePanelId === "loginPanel"}
        closePanel={closePanel}
      />

      {/* register panel:' */}
      <Panel
        content={
          <>
            <div className="flex flex-col items-center space-y-[60px]">
              <div className="w-full">
                <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
                  REJESTRACJA
                </span>
                <hr className="border-neutral-500 w-3/4" />
              </div>

              <div className="flex flex-col space-y-11 w-3/4">
                <div className="relative">
                  <input
                    type="text"
                    className="input01"
                    typeof="text"
                    name="username"
                    placeholder=""
                  />
                  <label for="username" className="label01">
                    NAZWA
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="input01"
                    typeof="text"
                    name="username"
                    placeholder=""
                  />
                  <label for="username" className="label01">
                    HASŁO
                  </label>
                </div>
              </div>
              <div className="text-xs flex flex-row items-center justify-between">
                <div className="space-x-1">
                  <input type="checkbox" name="noLogout" />
                  <label for="noLogout">Akceptuje regulamin</label>
                </div>
              </div>
              <button className="button01 bg-fuchsia-500">WŁAŹ</button>
            </div>
          </>
        }
        isVisible={visiblePanelId === "registerPanel"}
        closePanel={closePanel}
      />

      <div className="flex flex-col items-center space-y-8 p-4 lg:flex-row lg:justify-between lg:space-y-0">
        <div className="space-y-1">
          <img src={logoSrc} alt="VEXTHOJOO" />
          <hr className="w-3/4 border-fuchsia-500 border sm:w-[125%]" />
        </div>

        {/* If user is logged in (the token from the cookie is valid), the page will render the user's username and avatar; otherwise, it will render only the login and register buttons. */}
        {loggedUser.username ? (
          <div className="p-4 flex space-x-3">
            <div className="flex flex-col justify-center">
              <span
                id="loggedUserUsername"
                className="text-neutral-600 text-xs"
              >
                o siema
              </span>
              <span className="text-white font-bold">
                {loggedUser.username}
              </span>
            </div>
            <div>
              <div className="w-11 h-11 border border-neutral-600">
                <img src={loggedUser.avatar} alt="Avatar" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-3 text-white xs:flex-row xs:space-y-0 xs:space-x-4">
            <button
              className="button01 bg-fuchsia-500"
              onClick={() => showPanel("loginPanel")}
            >
              LOGOWANIE
            </button>
            <button
              className="button01 bg-black border-2 border-fuchsia-600"
              onClick={() => showPanel("registerPanel")}
            >
              REJESTRACJA
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
