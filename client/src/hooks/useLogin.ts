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

  const [loginError, setLoginError] = useState<string>("");

  const handleLogin = async () => {
    const response = await loginService(loginData);

    setLoginError(response?.errorMessage);

    if (response?.errorMessage === undefined) {
      closePanel();
      getUser();
    }
  };
  return { handleLogin, setLoginData, loginData, loginError };
};

export default useLogin;
