import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { useCookieAcceptContext } from "../../context/CookieAcceptContext";
import ico from "../../assets/images/ico.png";

const PageContainer = ({ children }: { children: ReactNode }) => {
  const { isCookieAccept } = useCookieAcceptContext();

  return (
    <div
      className={`bg-black min-h-screen w-full 2xl:w-[1536px] flex flex-col ${
        !isCookieAccept && "mb-[300px] sm:mb-[100px]"
      }`}
    >
      <Helmet>
        <link rel="icon" href={ico} />
      </Helmet>
      {children}
    </div>
  );
};

export default PageContainer;
