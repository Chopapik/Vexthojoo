import { usePanelContext } from "../context/PanelContext";
import { Helmet } from "react-helmet";
import PostsList from "../components/posts/PostsList";
import ChatAiBlock from "../components/blocks/chatAi/ChatAiBlock";
import Footer from "../components/layout/Footer";

import thomasIcon from "../assets/images/thomas.png";
import iconFrowardIcon from "../assets/icons/forwardIcon.svg";
const Home = () => {
  const { showPanel } = usePanelContext();

  return (
    <>
      <div>
        <Helmet>
          <title>Vexthojoo - strona główna</title>
        </Helmet>
      </div>
      {/* home div */}
      <div className="flex flex-col space-y-5 p-3 md:flex-row md:space-y-0 w-full flex-1 space-x-0 md:space-x-6 ">
        <main className="w-full md:w-2/3 text-neutral-300 space-y-4 flex flex-col items-center">
          <hr className="w-full xs:w-3/4 border-neutral-700 md:w-0" />

          <div className="w-full xs:w-3/4 lg:w-3/5 border-b border-customCyan-default mb-10">
            <div
              className=" bg-neutral-900 px-5 border-l-8  border-neutral-800  py-4 font-poppins cursor-pointer hover:border-customCyan-light box-border transition-colors ease-in-out duration-300"
              onClick={() => {
                showPanel("addPostPanel");
              }}
            >
              <div className="flex w-full justify-between items-center">
                Dodaj post głupcze
                <img src={iconFrowardIcon} alt="forwardIcon" />
              </div>
            </div>
          </div>
          <div className="space-y-4 w-full">
            <PostsList enableOptions={false} />
          </div>
        </main>
        <aside className="flex-1 space-y-11 flex flex-col items-center  sticky top-[7.5rem] max-h-[90dvh]">
          <hr className="w-full xs:w-3/4 border-neutral-700 md:w-0" />
          {/* block1 */}
          <a href="/thomas">
            <div className="w-full cursor-pointer flex flex-col space-y-3 items-center">
              <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-5 sm:ml-8">
                <img src={thomasIcon} className="" alt="Thomas" />
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
          <hr className="w-full xs:w-3/4 border-neutral-700 md:w-full" />
          {/* block2 */}
          <div className="w-full xs:w-3/4 md:w-full xl:w-4/5">
            <ChatAiBlock />
          </div>
          <Footer />
        </aside>
      </div>
    </>
  );
};

export default Home;
