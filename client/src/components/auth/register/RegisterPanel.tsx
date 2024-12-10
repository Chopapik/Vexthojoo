import { useContext } from "react";
import Panel from "../../../shared/Panel";
import { registerPanelTypes } from "../../../types/auth/registerTypes";
import { PanelContext } from "../../../context/PanelContext";

const RegisterPanel = ({
  registerFunction,
  setRegisterData,
  registerData,
  registerError,
}: registerPanelTypes) => {
  const { visiblePanelId, closePanel } = useContext(PanelContext);

  return (
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
                  className={`input01 border-b-2 ${
                    registerError.usernameError
                      ? "border-red-600"
                      : "border-white"
                  }`}
                  placeholder=""
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      username: e.target.value,
                    });
                  }}
                />
                <label htmlFor="username" className="label01">
                  NAZWA
                </label>
                <span className="text-xs text-red-600 absolute right-0 top-10">
                  {registerError.usernameError}
                </span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  className={`input01 border-b-2 ${
                    registerError.passwordError
                      ? "border-red-600"
                      : "border-white"
                  }`}
                  placeholder=""
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    });
                  }}
                />
                <label htmlFor="username" className="label01">
                  HASŁO
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  className={`input01 border-b-2 ${
                    registerError.passwordError
                      ? "border-red-600"
                      : "border-white"
                  }`}
                  placeholder=""
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      rePassword: e.target.value,
                    });
                  }}
                />
                <label htmlFor="username" className="label01">
                  POWTÓRZ HASŁO
                </label>
                <span className="text-xs text-red-600 absolute right-0 top-10">
                  {registerError.passwordError}
                </span>
              </div>
            </div>
            <div className="text-xs flex flex-col items-center justify-between">
              <div className="space-x-1  h-11">
                <input
                  type="checkbox"
                  name="acceptTerm"
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      acceptTerm: e.target.checked,
                    });
                  }}
                />

                <label htmlFor="rulesAccept">Akceptuje regulamin</label>
              </div>
              <div className="w-full">
                <span className="relative flex justify-center text-red-600">
                  {registerError.acceptTermError}
                </span>
              </div>
            </div>
            <button
              type="submit"
              onClick={registerFunction}
              className="button01 bg-fuchsia-500 mb-5"
            >
              WŁAŹ
            </button>
          </div>
        </>
      }
      isVisible={visiblePanelId === "registerPanel"}
      closePanelFunction={closePanel}
    />
  );
};

export default RegisterPanel;
