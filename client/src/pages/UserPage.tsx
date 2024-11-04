import { useState } from "react";

const UserPage = () => {
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

  const [userpageAvatar, setUserpageAvatar] = useState(
    "../../public/defaultAvatar.png"
  );

  return (
    <>
      {/* userpage div */}
      <div className="flex flex-col space-y-5 p-3 lg:flex-row lg:space-y-0">
        <main className="w-full lg:w-1/5 text-white space-y-4 bg-neutral-950 min-h-screen">
          <div className="flex flex-col items-center mt-2 space-y-10 h-full">
            <div className="w-full flex flex-col items-center">
              <p
                id="username"
                className="text-white font-arial inline-block font-bold text-2xl italic mb-2"
              >
                username
              </p>
              <img src={userpageAvatar} alt="avatar" className="w-32 h-32" />

              <button
                id="openEditUserPanel"
                type="submit"
                className="button01 w-[150px] mt-10 font-xs bg-gray-600 "
              >
                Edycja profilu
              </button>
            </div>

            <div className="flex flex-col items-center w-full">
              <form method="POST" action="/auth/logout" className="mt-[100px]">
                <button
                  type="submit"
                  className="button01 font-light w-[150px] bg-gray-600"
                >
                  Wyloguj się
                </button>
              </form>
              <button
                id="openUserDeletePanel"
                type="submit"
                className="button01 w-[150px] bg-red-600 mt-2"
              >
                Usuń konto
              </button>

              <div className="mt-10 text-neutral-700 text-sm flex flex-col items-center w-full h-[100px]">
                <p>Ostatnio online:</p>
                <p className="font-bold"> whenLastLogged </p>
                <p className="mt-2">Data rejestracji:</p>
                <p className="font-bold"> whenRegist </p>
              </div>
            </div>
          </div>
        </main>
        <aside className="w-full lg:w-4/5 2xl:1/3 p-11">
          {posts.map((post, index) => (
            <div
              key={index}
              className=" bg-neutral-900 p-5 space-y-4 w-2/3 text-white"
            >
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
        </aside>
      </div>
    </>
  );
};

export default UserPage;
