import Button01 from "./buttons/Button01";
import { useCookieAcceptContext } from "../context/CookieAcceptContext";

const CookieAcceptBar = () => {
  const { handleAcceptCookie, showAcceptCookieBar } = useCookieAcceptContext();

  if (!showAcceptCookieBar) return null;

  return (
    <>
      <div className="fixed bg-black w-full h-full opacity-80 z-50"></div>
      <div className="w-screen h-screen fixed flex flex-col items-center justify-end z-50">
        <div className="bg-neutral-900 w-4/5 p-5 border border-neutral-600 space-y-8 flex flex-col sm:flex-row sm:space-y-0 sm:p-7 mb-10">
          <div className="text-white flex flex-col space-y-1 sm:flex">
            <span className="italic font-bold text-xl text-center mb-4 sm:mb-0 sm:text-left">
              UŻYTKOWNIKU
            </span>
            <span>Ta strona korzysta z ciasteczek</span>
            <span className="text-xs">
              Ciasteczka są wykorzystywane do utrzymania sesji logowania oraz
              przechowywania ustawień stylów i wyglądu strony.
            </span>
            <span className="text-xs">Zaleca się akceptację ciasteczek.</span>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-1/2 sm:w-[150px] space-y-2 sm:h-full flex flex-col justify-center items-center">
              <Button01
                content={"AKCEPTUJĘ"}
                color={"bg-cyan-500"}
                border={"border-green-600"}
                onClick={() => handleAcceptCookie(true)}
              />
              <Button01
                content={"Ń AKCEPTUJĘ"}
                color={"bg-cyan-700"}
                border={"border-red-600"}
                onClick={() => handleAcceptCookie(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieAcceptBar;
