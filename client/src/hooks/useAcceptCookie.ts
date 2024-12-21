import { useState, useEffect } from "react";
import cookies from "js-cookie";

const useAcceptCookie = () => {
  const [isCookieAccept, setIsCookieAccept] = useState<boolean>(false);
  const [showAcceptCookieBar, setShowAcceptCookieBar] =
    useState<boolean>(false);

  const handleAcceptCookie = (isUserAcceptedCookies: boolean) => {
    setIsCookieAccept(isUserAcceptedCookies);
    cookies.set(
      "acceptCookie",
      isUserAcceptedCookies ? "cookiesAccepted" : "cookiesNotAccepted"
    );
    setShowAcceptCookieBar(false);
  };

  useEffect(() => {
    const showCookieAcceptBar = () => {
      const cookieValue = cookies.get("acceptCookie");

      if (!cookieValue) {
        setTimeout(() => {
          setShowAcceptCookieBar(true);
        }, 3000);
      }
    };

    showCookieAcceptBar();
  }, [showAcceptCookieBar]);

  useEffect(() => {
    const cookieValue = cookies.get("acceptCookie");
    if (cookieValue === "cookiesAccepted") {
      setIsCookieAccept(true);
    } else if (cookieValue === "cookiesNotAccepted") {
      setIsCookieAccept(false);
    }
  }, []);

  return { handleAcceptCookie, isCookieAccept, showAcceptCookieBar };
};

export default useAcceptCookie;
