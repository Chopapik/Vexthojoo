import { ReactNode } from "react";
import { useCookieAcceptContext } from "../../context/CookieAcceptContext";

const PageContainer = ({ children }: { children: ReactNode }) => {
  const { isCookieAccept } = useCookieAcceptContext();

  return (
    <div
      className={`bg-black min-h-screen ${
        !isCookieAccept && "mb-[300px] sm:mb-[100px]"
      }`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
