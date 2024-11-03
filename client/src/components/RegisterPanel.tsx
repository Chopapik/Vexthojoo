import React, { useState } from "react";
import Panel from "./Panel";
import axios from "axios";

const RegisterPanel = ({
  visiblePanelId,
  closePanelFunction,
}: {
  visiblePanelId: string | null;
  closePanelFunction: () => void;
}) => {
  //error states:
  const [usernameError, setUsernameError] = useState({
    errStyle: "",
    errMess: "",
  });

  const [passwordError, setPasswordError] = useState({
    errStyle: "",
    errMess: "",
  });

  //register data to send:

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    rePassword: "",
    acceptTerm: false,
  });

  const register = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      setUsernameError({ errStyle: "", errMess: "" });
      setPasswordError({ errStyle: "", errMess: "" });

      await axios.post("/auth/register", registerData);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const { field, message } = err.response.data;

      if (field === "passwordErr") {
        setPasswordError({ errStyle: "border-red-600", errMess: message });
      }

      if (field === "usernameErr") {
        setUsernameError({ errStyle: "border-red-600", errMess: message });
      }
    }
  };

  return (
    <Panel
      content={
        <>
          <form onSubmit={register}>
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
                    className={`input01 border-b-2 border-white ${usernameError.errStyle}`}
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
                    {usernameError.errMess}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className={`input01 border-b-2 border-white ${passwordError.errStyle}`}
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
                    className={`input01 border-b-2 border-white ${passwordError.errStyle}`}
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
                    {passwordError.errMess}
                  </span>
                </div>
              </div>
              <div className="text-xs flex flex-row items-center justify-between">
                <div className="space-x-1">
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
              </div>
              <button type="submit" className="button01 bg-fuchsia-500">
                WŁAŹ
              </button>
            </div>
          </form>
        </>
      }
      isVisible={visiblePanelId === "registerPanel"}
      closePanelFunction={closePanelFunction}
    />
  );
};

export default RegisterPanel;
