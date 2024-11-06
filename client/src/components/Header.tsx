import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [logoSrc, setLogoSrc] = useState("/logosm.png");
  interface cookieLogUserTypes {
    avatar: string;
    username: string | null;
  }
  const [cookieLogUser, setCookieLogUser] = useState<cookieLogUserTypes>({
    avatar: "./defaultAvatar.png",
    username: null,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
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

  //Function logs user automatically if cookie token is correct
  const cookieUserLogin = async () => {
    try {
      const response = await axios.post("/cookieAuth/cookieLogin");
      setCookieLogUser({ ...cookieLogUser, username: response.data.username });
      console.log(`${response.data.message}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(`Cookie login err: ${err.response.data.message}`);
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useState(() => {
    cookieUserLogin();
  });
  return (
    <>
      <div className="flex flex-col items-center space-y-8 p-4 lg:flex-row lg:justify-between lg:space-y-0">
        <div className="space-y-1">
          <img src={logoSrc} alt="VEXTHOJOO" />
          <hr className="w-3/4 border-fuchsia-500 border sm:w-[125%]" />
        </div>

        {/* If user is logged in (the token from the cookie is valid), the page will render the user's username and avatar; otherwise, it will render only the login and register buttons. */}
        {cookieLogUser.username ? (
          <div className="p-4 flex space-x-3">
            <div className="flex flex-col justify-center">
              <span
                id="loggedUserUsername"
                className="text-neutral-600 text-xs"
              >
                o siema
              </span>
              <span className="text-white font-bold">
                {cookieLogUser.username}
              </span>
            </div>
            <div>
              <div className="w-11 h-11 border border-neutral-600">
                <img src={cookieLogUser.avatar} alt="Avatar" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-3 text-white xs:flex-row xs:space-y-0 xs:space-x-4">
            <button
              className="button01 bg-fuchsia-500"
              // onClick={() => showPanel("loginPanel")}
            >
              LOGOWANIE
            </button>
            <button
              className="button01 bg-black border-2 border-fuchsia-600"
              // onClick={() => showPanel("registerPanel")}
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
