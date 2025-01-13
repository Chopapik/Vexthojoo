import { useEffect, useState } from "react";
import { usePanelContext } from "../../context/PanelContext";
import Button01 from "../buttons/Button01";
import { useCookieAuthContext } from "../../context/CookieAuthContext";

import logo from "../../assets/images/logo_beta.png";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
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
    <div className="md:sticky top-0 bg-black h-[60px] flex flex-col items-center p-2 space-y-4 md:flex-row md:space-y-0 md:justify-between z-49">
      <a href="/">
        <div className="w-fit px-2 space-y-1">
          <img src={logo} alt="VEXTHOJOO" className="w-[270px]" />
          <hr className="w-3/4 border-fuchsia-500 border md:w-[125%]" />
        </div>
      </a>
      {!loading &&
        (authData.isLoggedIn ? (
          <a href={`/${authData.username}`}>
            <div className="w-fit flex space-x-3">
              <div className="flex flex-col">
                <span className="text-neutral-600 text-[0.6rem]">o siema</span>
                <span className="font-bold  text-xs">{authData.username}</span>
              </div>
              <div className="w-9 h-9 border border-neutral-800">
                <img
                  src={
                    authData.avatarPath ? authData.avatarPath : defaultAvatar
                  }
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </a>
        ) : (
          <div className="flex space-x-4">
            <Button01
              color="fuchsia"
              shadowColor="fuchsia"
              onClick={() => showPanel("loginPanel")}
              content="LOGOWANIE"
            />
            <Button01
              color="black"
              shadowColor="fuchsia"
              border="border-2 border-fuchsia-600"
              onClick={() => showPanel("registerPanel")}
              content="REJESTRACA"
            />
          </div>
        ))}
    </div>
  );
};

export default Header;
