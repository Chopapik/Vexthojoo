import { useContext } from "react";
import { PanelContext } from "../context/PanelContext";
import { Helmet } from "react-helmet";
import PostsList from "../components/posts/PostsList";
import ChatAiBlock from "../components/blocks/chatAi/ChatAiBlock";

const Home = () => {
  const { showPanel } = useContext(PanelContext);

  return (
    <>
      <div>
        <Helmet>
          <title>Vexthojoo - strona główna</title>
        </Helmet>
      </div>
      {/* home div */}
      <div className="flex flex-col space-y-5 p-3 md:flex-row md:space-y-0 w-full 2xl:w-[1536px]">
        <main className="w-full lg:w-1/2 2xl:w-2/3 text-white space-y-4 flex flex-col items-center">
          <div
            className="w-1/2 border px-6 py-2 rounded-full my-5 font-poppins cursor-pointer"
            onClick={() => {
              showPanel("addPostPanel");
            }}
          >
            Dodaj post głupcze
          </div>
          <PostsList />
        </main>
        <aside className="w-full lg:w-1/2 2xl:1/3 md:p-11 space-y-11 flex flex-col items-center">
          {/* block1 */}
          <a href="/thomas">
            <div className="w-full cursor-pointer flex flex-col space-y-3 items-center">
              <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-5 sm:ml-8">
                <img src="./thomas.png" className="" alt="Thomas" />
                <p className="text-center text-fuchsia-900 w-4/5 text-xs sm:text-start sm:w-[250px]">
                  Die beste Katzenwebsite, die es in der Slowakei gibt. Ich
                  hoffe, dass es gut übersetzt ist und nicht irgendein Mist.
                </p>
              </div>
              <div className="w-full flex flex-col items-center sm:flex-row">
                <div>
                  <p className="text-fuchsia-500 font-bold ">THOMAS STYKALEI</p>
                  <p className="text-fuchsia-700 font-bold ">THOMAS STYKALEI</p>
                  <p className="text-fuchsia-900 font-bold ">THOMAS STYKALEI</p>
                </div>
              </div>
            </div>
          </a>
          {/* block2 */}
          <ChatAiBlock />
        </aside>
      </div>
    </>
  );
};

export default Home;
