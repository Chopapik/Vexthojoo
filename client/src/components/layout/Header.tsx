import { useEffect, useState } from "react";
import { usePanelContext } from "../../context/PanelContext";
import Button01 from "../buttons/Button01";
import { useCookieAuthContext } from "../../context/CookieAuthContext";

import logo from "../../assets/images/logo.png";
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
    <div className="sm:sticky sm:top-0 bg-black flex flex-col items-center space-y-8 p-4 lg:flex-row lg:justify-between lg:space-y-0 ">
      <div className="space-y-1">
        <a href="/">
          <img src={logo} alt="VEXTHOJOO" />
        </a>
        <hr className="w-3/4 border-fuchsia-500 border sm:w-[125%]" />
      </div>
      {!loading &&
        (authData.isLoggedIn ? (
          <div>
            <a href={`/${authData.username}`}>
              <div className="flex space-x-3 hover:bg-neutral-900 px-6 py-3 border-black hover:border-neutral-600 border-l border-b transition-all ease-in-out duration-200">
                <div className="flex flex-col justify-center ">
                  <span
                    id="loggedUserUsername"
                    className="text-neutral-600 text-xs"
                  >
                    o siema
                  </span>
                  <span className="text-white font-bold">
                    {authData.username}
                  </span>
                </div>

                <div className="w-11 h-11 border border-neutral-600">
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
          </div>
        ) : (
          <div className="flex flex-col space-y-3 text-white xs:flex-row xs:space-y-0 space-x-0 xs:space-x-4 h-[90px] xs:h-0 items-center md:mr-5">
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
