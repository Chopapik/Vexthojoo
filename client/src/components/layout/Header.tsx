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
    <div className="flex flex-col items-center space-y-8 p-4 lg:flex-row lg:justify-between lg:space-y-0">
      <div className="space-y-1">
        <a href="/">
          <img src={logo} alt="VEXTHOJOO" />
        </a>
        <hr className="w-3/4 border-fuchsia-500 border sm:w-[125%]" />
      </div>
      <div className="min-h-[90px]">
        {!loading &&
          (authData.isLoggedIn ? (
            <div className="p-4 flex space-x-3 ">
              <div className="flex flex-col justify-center">
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
                <a href={`/${authData.username}`}>
                  <img
                    src={
                      authData.avatarPath ? authData.avatarPath : defaultAvatar
                    }
                    alt="Avatar"
                    className="object-fill"
                  />
                </a>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-3 text-white xs:flex-row xs:space-y-0 xs:space-x-4 h-[90px] items-center mr-5">
              <Button01
                color="bg-fuchsia-500"
                shadowColor="fuchsia"
                onClick={() => showPanel("loginPanel")}
                content="LOGOWANIE"
              />
              <Button01
                color="bg-black"
                shadowColor="fuchsia"
                border="border-2 border-fuchsia-600"
                onClick={() => showPanel("registerPanel")}
                content="REJESTRACA"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
