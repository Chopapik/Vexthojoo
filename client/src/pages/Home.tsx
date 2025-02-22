import { usePanelContext } from "../context/PanelContext";
import { Helmet } from "react-helmet";
import PostsList from "../features/posts/components/PostsList";
import { useCookieAuthContext } from "../context/CookieAuthContext";

import avatarNull from "../assets/images/avatarNull.png";
import defaultAvatar from "../assets/images/defaultAvatar.png";
import forwardIcon from "../assets/icons/forwardIcon.svg";

import MobileNavigator from "../components/layout/MobileNavigator";
import useMobileNavigation from "../hooks/mobileNavigator/useMobileNavigation";

const Home = () => {
  const { showPanel } = usePanelContext();

  const { authData } = useCookieAuthContext();

  const { scrollToTop, toggleAside, isAsideVisible } = useMobileNavigation();

  return (
    <>
      <Helmet>
        <title>Vexthojoo - strona główna</title>
      </Helmet>

      <div
        id="content"
        className="w-full flex flex-col items-center max-w-[650px] lg:max-w-[1440px] lg:flex-row lg:items-start lg:space-x-3"
      >
        <main className="w-full lg:flex-1 flex flex-col items-center space-y-4 z-[995]">
          {/* add post input */}
          <div className="w-auto p-1 space-y-3 flex flex-col items-center">
            <div
              id="test"
              className="group flex p-[5px] space-x-[10px] w-[320px] lg:w-[570px] h-[60px] hover:bg-neutral-900 transition-all duration-150 ease-out rounded-full items-center justify-center"
              onClick={() => showPanel("addPostPanel")}
            >
              <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-neutral-900 border-t border-neutral-700 group-hover:bg-neutral-800 transition-all duration-150 ease-out ">
                <img
                  src={
                    authData.isLoggedIn
                      ? authData.avatarPath || defaultAvatar
                      : avatarNull
                  }
                  alt="avatar"
                  className="w-[35px] h-[35px] rounded-full"
                />
              </div>
              <div className="w-[250px] lg:w-[500px] h-[50px] rounded-full bg-neutral-900 border-t border-neutral-700 flex items-center px-6 group-hover:bg-neutral-800 transition-all duration-150 ease-out">
                <div className="flex w-full justify-between items-center font-poppins text-sm">
                  <span>Dodaj post głubcze</span>
                  <img src={forwardIcon} alt="forward arrow" />
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full max-w-[910px] border-neutral-700" />

          <PostsList enableOptions={false} />
          <MobileNavigator
            upButtonFunction={scrollToTop}
            moreButtonFunction={toggleAside}
          />
        </main>

        <aside
          className={`
              rounded-xl z-[997] bg-[#0B0B0B] fixed max-w-[400px] lg:sticky flex justify-between
              w-[calc(100vw-12px-12px)] 
              h-[calc(100vh-12px-12px-12px-37px)]
              top-3
              lg:top-[calc(12px+70px+12px)]
              lg:h-[calc(100vh-12px-70px-12px-12px)]
              transition-all ease-in-out duration-500

              ${isAsideVisible ? "right-3" : "-right-[100vw]"}

            
            `}
        >
          test
          <footer className="mt-auto h-fit flex flex-col items-center space-y-2 w-full px-5 py-3 text-xs font-roboto font-bold">
            <div className="flex items-center justify-center space-x-2 text-neutral-300">
              <a href="/listaUzytkownikow" className="hover:underline">
                Lista użytkowników
              </a>
              <span className="inline-block h-1 w-1 rounded-full bg-neutral-300"></span>
              <a href="/coNowego" className="hover:underline">
                Co nowego
              </a>
            </div>
            <hr className="w-full border-neutral-700" />
            <span className="font-extrabold text-neutral-700">
              &copy; Chopapik 2024-2025
            </span>
          </footer>
        </aside>
      </div>
    </>
  );
};

export default Home;
