import { createContext, ReactNode, useContext } from "react";
import { CookieAuthTypes } from "../types/auth/cookieAuthTypes";
import useCookieAuth from "../hooks/cookies/useCookieAuth";

interface CookieAuthContext {
  authData: CookieAuthTypes;
  getUser: () => Promise<void>;
}
const CookieAuthContext = createContext<CookieAuthContext | undefined>(
  undefined
);

export const useCookieAuthContext = () => {
  const context = useContext(CookieAuthContext);
  if (!context) {
    throw new Error("CookieAuthContext must be used within CookieAuthProvider");
  }

  return context;
};

export const CookieAuthProvider = ({ children }: { children: ReactNode }) => {
  const { getUser, authData } = useCookieAuth();

  return (
    <CookieAuthContext.Provider value={{ authData, getUser }}>
      {children};
    </CookieAuthContext.Provider>
  );
};
