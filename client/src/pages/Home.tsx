import { usePanelContext } from "../context/PanelContext";
import { Helmet } from "react-helmet";
import PostsList from "../components/posts/PostsList";
import ChatAiBlock from "../components/blocks/chatAi/ChatAiBlock";
// import Footer from "../components/layout/Footer";

import iconFrowardIcon from "../assets/icons/forwardIcon.svg";

const Home = () => {
  const { showPanel } = usePanelContext();

  return (
    <>
      <Helmet>
        <title>Vexthojoo - strona główna</title>
      </Helmet>
      <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
        <main className="w-full lg:w-2/3 flex flex-col items-center">
          <div className="md:p-3 py-4 space-y-3 w-full sm:w-[640px] md:max-w-none flex flex-col items-center">
            <div
              className=" bg-neutral-900 px-5 border-l-8 w-3/4 border-neutral-800 py-3 font-poppins cursor-pointer hover:border-customCyan-light box-border transition-colors ease-in-out duration-300"
              onClick={() => {
                showPanel("addPostPanel");
              }}
            >
              <div className="flex w-full justify-between items-center text-xs">
                Dodaj post głupcze
                <img
                  src={iconFrowardIcon}
                  alt="forwardIcon"
                  className="w-4 h-4"
                />
              </div>
            </div>
            <hr className="w-full border-neutral-700" />

            <PostsList enableOptions={false} />
          </div>
        </main>
        <aside className="w-full lg:w-1/3 max-h-[75vh] lg:sticky lg:top-[70px] flex flex-col items-center px-5 space-y-10 max-w-[400px] ">
          <hr className="w-full lg:w-0 border-neutral-700" />
          <ChatAiBlock />
          <hr className="w-full border-neutral-700 " />
        </aside>
      </div>
    </>
  );
};

export default Home;
