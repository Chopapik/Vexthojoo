import { useState } from "react";

import loginService from "../../services/auth/loginService";
import { usePanelContext } from "../../context/PanelContext";
import { loginDataTypes } from "../../types/auth/loginTypes";
import { useCookieAuthContext } from "../../context/CookieAuthContext";
import useHandleQueryError from "../useHandleQueryError";

const useLogin = () => {
  const { closePanel } = usePanelContext();
  const { getUser } = useCookieAuthContext();

  const { queryError, handleQueryError } = useHandleQueryError();

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

  const handleLogin = async () => {
    const response = await loginService(loginData);

    if (response?.error) {
      handleQueryError(response.error);
    } else {
      closePanel();
      getUser();
    }
  };
  return {
    handleLogin,
    setLoginData,
    loginData,
    queryError,
    handleSetUsername,
    handleSetPassword,
    handleSetNoLogout,
  };
};

export default useLogin;
