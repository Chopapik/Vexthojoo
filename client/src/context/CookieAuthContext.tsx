//This context
import axios from "axios";
import { createContext, ReactNode, useState } from "react";

interface CookieAuthTypes {
  isLoggedIn: boolean;
  userid: number | null;
  username: string | null;
  avatar: string | null;
}

export const CookieAuthContext = createContext<{
  authData: CookieAuthTypes;
  getUser: () => void;
}>({
  authData: {
    isLoggedIn: false,
    userid: null,
    username: null,
    avatar: null,
  },
  getUser: async () => {},
});

export const CookieAuthProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<CookieAuthTypes>({
    isLoggedIn: false,
    userid: null,
    username: null,
    avatar: null,
  });

  const getUser = async () => {
    try {
      const response = await axios.get("/cookieAuth/cookieLogin", {
        withCredentials: true,
      });
      setAuthData({
        isLoggedIn: true,
        userid: response.data.userid,
        username: response.data.username,
        avatar: response.data.avatar,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(`Cookie login err: ${err.response.data.message}`);
    }
  };

  return (
    <CookieAuthContext.Provider value={{ authData, getUser }}>
      {children};
    </CookieAuthContext.Provider>
  );
};
