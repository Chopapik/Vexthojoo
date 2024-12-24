import cookieAuthService from "../../services/auth/cookieAuthService";
import { useState } from "react";
import { CookieAuthTypes } from "../../types/auth/cookieAuthTypes";

const useCookieAuth = () => {
  const [authData, setAuthData] = useState<CookieAuthTypes>({
    isLoggedIn: false,
    userid: null,
    username: null,
    avatarPath: null,
  });

  const getUser = async () => {
    const response = await cookieAuthService();

    if (response) {
      setAuthData({
        isLoggedIn: true,
        userid: response.userData.userid,
        username: response.userData.username,
        avatarPath: response.userData.avatarPath,
      });
    }
  };

  return { getUser, authData };
};
export default useCookieAuth;
