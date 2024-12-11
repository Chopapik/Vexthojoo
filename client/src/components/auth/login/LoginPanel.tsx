import { useContext } from "react";
import Panel from "../../../shared/Panel";
import { loginPanelTypes } from "../../../types/auth/loginTypes";
import { PanelContext } from "../../../context/PanelContext";

const LoginPanel = ({
  loginFunction,
  setLoginData,
  loginData,
  loginError,
}: loginPanelTypes) => {
  const { visiblePanelId, closePanel } = useContext(PanelContext);

  return (
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
            <button
              className="button01 bg-fuchsia-500 hover:shadow-button01 hover:shadow-fuchsia-500"
              type="submit"
              onClick={loginFunction}
            >
              WŁAŹ
            </button>
          </div>
        </>
      }
      isVisible={visiblePanelId === "loginPanel"}
      closePanelFunction={closePanel}
    />
  );
};

export default LoginPanel;