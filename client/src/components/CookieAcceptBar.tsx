import Button01 from "./buttons/Button01";
import { useCookieAcceptContext } from "../context/CookieAcceptContext";
import cookieImage from "../assets/images/cookie.png";

const CookieAcceptBar = () => {
  const { handleAcceptCookie, showAcceptCookieBar } = useCookieAcceptContext();

  if (!showAcceptCookieBar) return null;

  return (
    <div className="fixed z-50 bottom-0 w-screen bg-neutral-900 p-5 md:p-1 border-y border-neutral-600 flex sm:space-y-0 justify-center">
      <div className="flex flex-col space-y-5 p-5 items-center sm:items-start sm:flex-row sm:space-x-8 sm:space-y-0 sm:max-w-[700px] xl:max-w-[700px] text-white">
        <div className="flex flex-col sm:h-full justify-center items-center">
          <img
            src={cookieImage}
            alt="cookie"
            className="w-[80px] sm:w-[150px]"
          />
        </div>
        <div className=" font-poppins text-xs text-center sm:text-left space-y-2">
          <p>
            Ta strona wykorzystuje pliki cookies do utrzymania sesji logowania
            oraz zapisywania preferencji dotyczących stylów i wyglądu strony.
          </p>
          <p>
            Klikając przycisk "Akceptuję", zgadzasz się na wykorzystywanie
            plików cookies.
          </p>
        </div>
        <div className="sm:h-full flex flex-col justify-center items-center ">
          <Button01
            content={"Akceptuję"}
            color={"bg-fuchsia-500"}
            border={"fuchsia"}
            onClick={handleAcceptCookie}
          />
        </div>
      </div>
    </div>
  );
};

export default CookieAcceptBar;
