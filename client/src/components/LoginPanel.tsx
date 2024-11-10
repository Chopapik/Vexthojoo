import Panel from "./Panel";
import { useState, useContext } from "react";
import axios from "axios";
import { CookieAuthContext } from "../context/CookieAuthContext";

const LoginPanel = ({
  visiblePanelId,
  closePanelFunction,
}: {
  visiblePanelId: string | null;
  closePanelFunction: () => void;
}) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    noLogout: false,
  });
  const [loginError, setLoginError] = useState("");

  const cookieAuthContext = useContext(CookieAuthContext);

  const { getUser } = cookieAuthContext;

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/auth/login", loginData);

      setLoginError("");
      closePanelFunction();
      getUser();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response) {
        const { message } = err.response.data;

        setLoginError(message);
      }
    }
  };

  return (
    <Panel
      content={
        <>
          <form onSubmit={login}>
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
                    className="input01 border-b-2 border-white"
                    name="username"
                    placeholder=""
                    onChange={(e) => {
                      setLoginData({ ...loginData, username: e.target.value });
                    }}
                  />
                  <label htmlFor="username" className="label01 ">
                    NAZWA
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="input01  border-b-2 border-white"
                    name="password"
                    placeholder=""
                    onChange={(e) => {
                      setLoginData({ ...loginData, password: e.target.value });
                    }}
                  />
                  <label htmlFor="username" className="label01">
                    HASŁO
                  </label>
                  <span className="text-xs text-red-600 absolute right-0 top-10">
                    {loginError}
                  </span>
                </div>
              </div>
              <div className="text-xs flex flex-row items-center justify-between">
                <div className="space-x-1">
                  <input
                    type="checkbox"
                    name="noLogout"
                    onChange={(e) => {
                      setLoginData({
                        ...loginData,
                        noLogout: e.target.checked,
                      });
                    }}
                  />
                  <label htmlFor="noLogout">Nie wylogowywuj mnie</label>
                </div>
              </div>
              <button className="button01 bg-fuchsia-500" type="submit">
                WŁAŹ
              </button>
            </div>
          </form>
        </>
      }
      isVisible={visiblePanelId === "loginPanel"}
      closePanelFunction={closePanelFunction}
    />
  );
};

export default LoginPanel;
