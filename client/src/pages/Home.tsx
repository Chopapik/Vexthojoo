import { useEffect, useState } from "react";

const Home = () => {
  interface Post {
    username: string;
    avatar: string;
    whenUpload: string;
    whatDevice: string;
    TEXT: string;
    image: string | null;
  }

  const [posts, setPosts] = useState<Post[]>([
    {
      username: "USER ",
      avatar: "./defaultAvatar.png",
      whenUpload: "DD-MM-YYYY HH:MM",
      whatDevice: "Windows",
      TEXT: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: null,
    },
  ]);

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
    const fetchData = async () => {
      try {
        const response = await fetch("/test");
        const data = await response.json();

        data.forEach((post: Post) => {
          post.whenUpload = DateTimeFormat(post.whenUpload);
        });

        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* home div */}
      <div className="flex flex-col space-y-5 p-3">
        {/* posts: */}
        <main className="w-full lg:w-1/2 2xl:w-2/3 text-white space-y-4 flex flex-col items-center">
          <div
            className="w-1/2 border px-6 py-2 rounded-full my-5 font-poppins cursor-pointer"
            onClick={() => {
              // showPanel("addPostPanel");
            }}
          >
            Dodaj post głupcze
          </div>
          {posts.map((post, index) => (
            <div key={index} className="w-full bg-neutral-900 p-5 space-y-4">
              <div className="flex flex-row space-x-2">
                <div className=" w-14 h-14 border border-neutral-600 ">
                  <img src={post.avatar} alt="Avatar" />
                </div>
                <div>
                  <p className="text-sm font-bold">{post.username}</p>
                  <p className="text-xs text-neutral-500">{post.whenUpload}</p>
                  <p className="text-xs text-cyan-400">
                    Uploaded from {post.whatDevice}
                  </p>
                </div>
              </div>
              <p className="text-md">{post.TEXT}</p>
              {post.image ? <img src={post.image}></img> : null}
            </div>
          ))}
        </main>
        <aside className="w-full lg:w-1/2 2xl:1/3"></aside>
      </div>
    </>
  );
};

export default Home;
