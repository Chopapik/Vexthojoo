import { useState, useEffect } from "react";
import cookies from "js-cookie";

const useAcceptCookie = () => {
  const [isCookieAccept, setIsCookieAccept] = useState<boolean>(false);
  const [showAcceptCookieBar, setShowAcceptCookieBar] =
    useState<boolean>(false);

  const handleAcceptCookie = () => {
    setIsCookieAccept(true);
    cookies.set("acceptCookie", "cookiesAccepted", { expires: 180 });
    setShowAcceptCookieBar(false);
  };

  useEffect(() => {
    const cookieValue = cookies.get("acceptCookie");

    if (!cookieValue) setShowAcceptCookieBar(true);
  }, []);

  useEffect(() => {
    const cookieValue = cookies.get("acceptCookie");
    if (cookieValue === "cookiesAccepted") {
      setIsCookieAccept(true);
    } else if (!cookieValue) {
      setIsCookieAccept(false);
    }
  }, []);

  return { handleAcceptCookie, isCookieAccept, showAcceptCookieBar };
};

export default useAcceptCookie;
