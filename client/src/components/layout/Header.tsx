import { useEffect, useState } from "react";
import { usePanelContext } from "../../context/PanelContext";
import { useCookieAuthContext } from "../../context/CookieAuthContext";
import logo from "../../assets/images/logo_beta.png";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import {
  ButtonFuchsiaSm,
  ButtonFuchsiaSmEmpty,
} from "../buttons/ButtonSM/ButtonSM";

const Header = () => {
  const [loading, setLoading] = useState(true);

  const { getUser, authData } = useCookieAuthContext();
  const { showPanel } = usePanelContext();

  useEffect(() => {
    const checkUser = async () => {
      await getUser();
      setLoading(false);
    };
    checkUser();
  }, []);

  return (
    <div className="w-full h-fit flex flex-col items-center space-y-4 py-3 lg:sticky sm:top-3 sm:space-y-0 sm:flex-row sm:justify-between sm:px-4 z-[996] lg:h-[70px] bg-[#080808] border-t border-[#171717] rounded-xl">
      <a href="/" className="h-fit w-[310px] space-y-1 ">
        <img src={logo} alt="VEXTHOJOO" className="h-auto w-[310px]" />
        <div className="h-0.5 w-full bg-fuchsia-500 border-t border-fuchsia-300"></div>
      </a>
      {loading ? (
        <></> //add here loading animation
      ) : !authData.isLoggedIn ? (
        <div className="flex space-x-5 h-fit w-fit">
          <ButtonFuchsiaSm
            content="logowanie"
            onClick={() => showPanel("loginPanel")}
          />
          <ButtonFuchsiaSmEmpty
            content="rejestracja"
            onClick={() => showPanel("registerPanel")}
          />
        </div>
      ) : (
        <a href={authData?.username || "/"}>
          <div className="w-auto hover:bg-neutral-900 bg-neutral-950 h-12 space-x-3 flex items-center justify-center px-4 rounded-xl border-t border-neutral-950 hover:border-neutral-700 transition-all divide-neutral-100 ease-in">
            <div className="flex flex-col">
              <span className="leading-none text-xs text-neutral-500 ">
                o siema
              </span>
              <span className="leading-none text-base font-bold">
                {authData.username}
              </span>
            </div>
            <img
              src={authData.avatarPath || defaultAvatar}
              alt="User avatar"
              className="w-10 h-10 rounded-xl shadow-sm"
            />
          </div>
        </a>
      )}
    </div>
  );
};

export default Header;
