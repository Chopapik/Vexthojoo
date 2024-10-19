import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      username: "USER ",
      avatar: "./defaultAvatar.png",
      whenUpload: "DD-MM-YYYY HH:MM",
      whatDevice: "Windows",
      TEXT: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: null,
    },
  ]);

  return (
    <>
      <div className="flex flex-col space-y-5 p-3">
        <main className="w-full lg:w-1/2 2xl:w-2/3 text-white space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="w-full bg-neutral-900 p-5">
              <div className="flex flex-row space-x-2">
                <div className=" w-14 h-14 border border-neutral-600 ">
                  {/* If user doesn't have an avatar, default.jpg will be loaded: */}
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
              <span className="text-sm">{post.TEXT}</span>
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
