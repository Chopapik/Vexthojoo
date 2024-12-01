import { useEffect, useState, useContext } from "react";
import { PanelContext } from "../context/PanelContext";
import axios from "axios";

const Home = () => {
  interface postTypes {
    username: string;
    avatar: string;
    whenUpload: string;
    whatDevice: string;
    TEXT: string;
    image: string | null;
  }
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<postTypes[]>([]);

  //posts date formatter:
  const DateTimeFormat = (date: string | Date) => {
    date = new Date(date);

    if (date) {
      const formattedDate = date.toLocaleDateString("pl-PL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      const formattedTime = date.toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
      });

      return `${formattedDate} ${formattedTime}`;
    } else {
      return "n/a";
    }
  };

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("/posts/printAllPosts");

      response.data.forEach((post: { whenUpload: string }) => {
        post.whenUpload = DateTimeFormat(post.whenUpload);
      });

      setPosts(response.data);
      setLoading(false);
    };

    getPosts();
  }, []);

  const panelContext = useContext(PanelContext);

  if (!panelContext) {
    return <div className="text-red-600">CONTEXT ERR</div>;
  }

  const { showPanel } = panelContext;

  return (
    <>
      {/* home div */}
      {/* posts: */}
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
          {loading ? (
            <div className="w-full bg-neutral-900 p-5 space-y-4">
              <div className="flex flex-row space-x-2">
                <div className=" w-14 h-14 border border-neutral-950 bg-neutral-950" />
                <div className="space-y-1">
                  <div className="w-[120px] h-3 bg-neutral-950"></div>
                  <div className="w-[70px] h-3 bg-neutral-950"></div>
                  <div className="w-[70px] h-3 bg-neutral-950"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="w-1/4 h-3 bg-neutral-950"></div>
                <div className="w-1/3 h-3 bg-neutral-950"></div>
                <div className="w-1/5 h-3 bg-neutral-950"></div>
              </div>
            </div>
          ) : (
            <>
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="w-full bg-neutral-900 p-5 space-y-4"
                >
                  <div className="flex flex-row space-x-2">
                    <div className=" w-14 h-14 border border-neutral-600 ">
                      <a href={`/${post.username}`}>
                        <img
                          src={
                            post.avatar ? post.avatar : "./defaultAvatar.png"
                          }
                          alt="Avatar"
                        />
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-bold">{post.username}</p>
                      <p className="text-xs text-neutral-500">
                        {post.whenUpload}
                      </p>
                      <p className="text-xs text-cyan-400">
                        Uploaded from {post.whatDevice}
                      </p>
                    </div>
                  </div>
                  <p className="text-md">{post.TEXT}</p>
                  {post.image ? <img src={post.image}></img> : null}
                </div>
              ))}
            </>
          )}
        </main>
        <aside className="w-full lg:w-1/2 2xl:1/3 md:p-11 space-y-11 flex flex-col items-center">
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
        </aside>
      </div>
    </>
  );
};

export default Home;
