import { useEffect, useState } from "react";
import { usePanelContext } from "../../context/PanelContext";
import { useCookieAuthContext } from "../../context/CookieAuthContext";
import logo from "../../assets/images/logo_beta.png";
import { ButtonFuchsiaSm, ButtonFuchsiaSmEmpty } from "../buttons/Button01";

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
    <div className="w-full h-fit flex flex-col items-center space-y-4 py-3 sm:sticky sm:top-0 bg-black sm:space-y-0 sm:flex-row sm:justify-between sm:px-4 z-[41] lg:h-[70px]">
      <a href="/" className="h-fit w-[310px] space-y-1">
        <img src={logo} alt="VEXTHOJOO" className="h-auto w-[310px]" />
        <div className="h-0.5 w-full bg-fuchsia-500 border-t border-fuchsia-300"></div>
      </a>
      <div className="flex space-x-5 h-fit w-fit ">
        <ButtonFuchsiaSm
          content="logowanie"
          onClick={() => showPanel("loginPanel")}
        />
        <ButtonFuchsiaSmEmpty
          content="rejestracja"
          onClick={() => showPanel("registerPanel")}
        />
      </div>
    </div>
  );
};

export default Header;
