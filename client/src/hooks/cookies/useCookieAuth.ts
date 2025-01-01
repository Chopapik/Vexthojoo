import cookieAuthService from "../../services/auth/cookieAuthService";
import { useState } from "react";
import { CookieAuthTypes } from "../../types/auth/cookieAuthTypes";
import useHandleQueryError from "../useHandleQueryError";

const useCookieAuth = () => {
  const [authData, setAuthData] = useState<CookieAuthTypes>({
    isLoggedIn: false,
    userid: null,
    username: null,
    avatarPath: null,
  });

  const { handleQueryError, queryError } = useHandleQueryError();

  const getUser = async () => {
    const response = await cookieAuthService();

    if (response?.error) {
      handleQueryError(response.error);
    }

    if (response && response.userData) {
      setAuthData({
        isLoggedIn: true,
        userid: response.userData.userid,
        username: response.userData.username,
        avatarPath: response.userData.avatarPath,
      });
    }
  };

  const resetAuthData = () => {
    setAuthData({
      isLoggedIn: false,
      userid: null,
      username: null,
      avatarPath: null,
    });
  };

  return { getUser, authData, resetAuthData, queryError };
};
export default useCookieAuth;
