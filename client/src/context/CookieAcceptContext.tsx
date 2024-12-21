import { createContext, ReactNode, useContext } from "react";
import useAcceptCookie from "../hooks/useAcceptCookie";

interface CookieAcceptContextTypes {
  handleAcceptCookie: (isUserAcceptedCookies: boolean) => void;
  isCookieAccept: boolean;
  showAcceptCookieBar: boolean;
}

export const CookieAcceptContext = createContext<
  CookieAcceptContextTypes | undefined
>(undefined);

export const useCookieAcceptContext = () => {
  const cookieAcceptContext = useContext<CookieAcceptContextTypes | undefined>(
    CookieAcceptContext
  );

  if (!cookieAcceptContext) {
    throw new Error(
      "useCookieAcceptContext must be used with CookieAcceptContext"
    );
  }
  const { isCookieAccept, handleAcceptCookie, showAcceptCookieBar } =
    cookieAcceptContext;

  return { isCookieAccept, handleAcceptCookie, showAcceptCookieBar };
};

export const CookieAcceptProvider = ({ children }: { children: ReactNode }) => {
  const { handleAcceptCookie, isCookieAccept, showAcceptCookieBar } =
    useAcceptCookie();

  return (
    <CookieAcceptContext.Provider
      value={{ handleAcceptCookie, isCookieAccept, showAcceptCookieBar }}
    >
      {children}
    </CookieAcceptContext.Provider>
  );
};
