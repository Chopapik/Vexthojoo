import { usePanelContext } from "../context/PanelContext";
import { Helmet } from "react-helmet";
import PostsList from "../components/posts/PostsList";
import ChatAiBlock from "../components/blocks/chatAi/ChatAiBlock";
import avatarNull from "../assets/images/avatar_null.png";
import { useCookieAuthContext } from "../context/CookieAuthContext";
import defaultAvatar from "../assets/images/defaultAvatar.png";
import forwardIcon from "../assets/icons/forwardIcon.svg";

const Home = () => {
  const { showPanel } = usePanelContext();

  const { authData } = useCookieAuthContext();

  return (
    <>
      <Helmet>
        <title>Vexthojoo - strona główna</title>
      </Helmet>

      <div className="w-full flex flex-col items-center max-w-[650px] lg:max-w-[1440px] lg:flex-row lg:items-start">
        <main className="w-full lg:w-2/3 space-y-4">
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

            <hr className="w-[90%] border-neutral-700" />
          </div>
          <PostsList enableOptions={false} />
        </main>

        <aside className="w-full md:w-1/3 h-[calc(100vh-70px)] pt-3 lg:sticky lg:top-[70px] flex flex-col items-center px-5 ">
          <hr className="w-full lg:w-0 border-neutral-700" />
          <ChatAiBlock />
          <footer className="mt-auto h-fit flex text-xs flex-col px-5 py-3 items-center space-y-2 w-full font-roboto font-bold">
            <div className="text-neutral-300 space-x-2 flex justify-center items-center">
              <a href="/listaUzytkownikow" className="hover:underline">
                Lista użytkowników
              </a>
              <span className="w-1 h-1 rounded-full bg-neutral-300 inline-block"></span>
              <a href="/coNowego" className="hover:underline">
                Co nowego
              </a>
            </div>
            <hr className="w-full border-neutral-700 " />
            <span className="text-neutral-700 font-extrabold">
              &copy;Chopapik 2024-2025
            </span>
          </footer>
        </aside>
      </div>
    </>
  );
};

export default Home;
