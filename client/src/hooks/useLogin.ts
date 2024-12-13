import { useState, useContext } from "react";

import loginService from "../services/auth/loginService";
import { PanelContext } from "../context/PanelContext";
import { loginDataTypes } from "../types/auth/loginTypes";
import { CookieAuthContext } from "../context/CookieAuthContext";

const useLogin = () => {
  const { closePanel } = useContext(PanelContext);
  const { getUser } = useContext(CookieAuthContext);

  const [loginData, setLoginData] = useState<loginDataTypes>({
    username: "",
    password: "",
    noLogout: false,
  });

  const handleSetUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, username: e.target.value });
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, password: e.target.value });
  };

  const handleSetNoLogout = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, noLogout: e.target.checked });
  };

  const [loginError, setLoginError] = useState<string>("");

  const handleLogin = async () => {
    const response = await loginService(loginData);

    setLoginError(response?.errorMessage);

    if (response?.errorMessage === undefined) {
      closePanel();
      getUser();
    }
  };
  return {
    handleLogin,
    setLoginData,
    loginData,
    loginError,
    handleSetUsername,
    handleSetPassword,
    handleSetNoLogout,
  };
};

export default useLogin;
