import React, { useEffect, useState } from "react";
import Panel from "./Panel";
import axios from "axios";

const RegisterPanel = ({
  visiblePanelId,
  closePanelFunction,
}: {
  visiblePanelId: string | null;
  closePanelFunction: () => void;
}) => {
  //User data required for registratio
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    rePassword: "",
  });

  //password&username error changes input style to red if detect an error
  const [passwordError, setPasswordError] = useState({
    errMess: "",
    errStyle: "",
  });
  const [usernameError, setUsernameError] = useState({
    errMess: "",
    errStyle: "border-red-600",
  });

  useEffect(() => {
    //
    if (
      registerData.password !== registerData.rePassword &&
      registerData.password !== "" &&
      registerData.rePassword !== ""
    ) {
      setPasswordError({
        errMess: "Hasła się nie zgadzają",
        errStyle: "border-red-600",
      });
    } else {
      setPasswordError({
        errMess: "",
        errStyle: "",
      });
    }
  }, [registerData.password, registerData.rePassword, registerData.username]);

  //register function checks if inputs isn't empty otherwise sends user data to backend
  const register = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      registerData.username !== "" &&
      registerData.password !== "" &&
      registerData.rePassword !== "" &&
      registerData.password === registerData.rePassword
    ) {
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/register",
          registerData
        );
        setUsernameError({ ...usernameError, errMess: response.data.message });
        console.log(response.data.message);
      } catch (err) {
        console.log(`response err:${err}`);
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
                      setRegisterData((prevData) => ({
                        ...prevData,
                        username: e.target.value,
                      }));
                      // checkUsernameAvailability(e.target.value);
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
                  <input type="checkbox" name="rulesAccept" />
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
