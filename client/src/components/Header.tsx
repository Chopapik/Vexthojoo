import { useContext, useEffect, useState } from "react";
import { PanelContext } from "../context/PanelContext";
import { CookieAuthContext } from "../context/CookieAuthContext";

const Header = () => {
  const [loading, setLoading] = useState(true);

  const panelContext = useContext(PanelContext);
  const cookieAuthContext = useContext(CookieAuthContext);

  const { showPanel } = panelContext;
  const { authData, getUser } = cookieAuthContext;

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
          <img src="/logo.png" alt="VEXTHOJOO" />
        </a>
        <hr className="w-3/4 border-fuchsia-500 border sm:w-[125%]" />
      </div>

      {!loading &&
        (authData.isLoggedIn ? (
          <div className="p-4 flex space-x-3">
            <div className="flex flex-col justify-center">
              <span
                id="loggedUserUsername"
                className="text-neutral-600 text-xs"
              >
                o siema
              </span>
              <span className="text-white font-bold">{authData.username}</span>
            </div>
            <div>
              <div className="w-11 h-11 border border-neutral-600">
                <a href={`/${authData.username}`}>
                  <img
                    src={
                      authData.avatar ? authData.avatar : "./defaultAvatar.png"
                    }
                    alt="Avatar"
                  />
                </a>
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
        ))}
    </div>
  );
};

export default Header;
