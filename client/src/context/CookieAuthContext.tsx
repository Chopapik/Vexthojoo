import { createContext, ReactNode } from "react";
import { CookieAuthTypes } from "../types/auth/cookieAuthTypes";
import useCookieAuth from "../hooks/useCookieAuth";

interface CookieAuthContext {
  authData: CookieAuthTypes;
  getUser: () => void;
}

export const CookieAuthContext = createContext<CookieAuthContext>({
  authData: {
    isLoggedIn: false,
    userid: null,
    username: null,
    avatarPath: null,
  },
  getUser: async () => {},
});

export const CookieAuthProvider = ({ children }: { children: ReactNode }) => {
  const { getUser, authData } = useCookieAuth();

  return (
    <CookieAuthContext.Provider value={{ authData, getUser }}>
      {children};
    </CookieAuthContext.Provider>
  );
};
