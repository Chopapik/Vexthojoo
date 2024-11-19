import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CookieAuthContext } from "../context/CookieAuthContext";

const UserPage = () => {
  interface PostTypes {
    id: number;
    username: string;
    avatar: string;
    whenUpload: string;
    whatDevice: string;
    TEXT: string;
    image: string | null;
  }

  interface UserDataTypes {
    username: string;
    avatar: string;
    whenLastLogged: string;
    whenRegist: string;
  }

  const cookieAuthContext = useContext(CookieAuthContext);
  const { authData } = cookieAuthContext; //cookie data

  const [postsData, setPostsData] = useState<PostTypes[]>([
    {
      id: 0,
      username: "USER",
      avatar: "./defaultAvatar.png",
      whenUpload: "DD-MM-YYYY HH:MM",
      whatDevice: "Windows",
      TEXT: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: null,
    },
  ]);

  const [userData, setUserData] = useState<UserDataTypes>({
    username: "USER",
    avatar: "./defaultAvatar.png",
    whenLastLogged: "DD-MM-YYYY HH:MM",
    whenRegist: "DD-MM-YYYY HH:MM",
  });

  const [refreshPost, setRefreshPost] = useState(false); //refresh posts after post has been removed

  const { username } = useParams();

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

  const deletePost = async (postid: number) => {
    await axios.delete(`posts/removePost/${postid}`);

    setRefreshPost((prev) => !prev);
    console.log(refreshPost);
  };

  useEffect(() => {
    const getUserData = async () => {
      const response = await axios(`/user/${username}`);

      const { posts, userData } = response.data;

      console.log(userData[0]);

      setUserData(userData[0]);

      //Formating date:
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      posts.forEach((post: any) => {
        post.whenUpload = DateTimeFormat(post.whenUpload);
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userData.forEach((user: any) => {
        user.whenLastLogged = DateTimeFormat(user.whenLastLogged);
        user.whenRegist = DateTimeFormat(user.whenRegist);
      });

      setPostsData(posts);
    };
    getUserData();
  }, [username, refreshPost]);

  const [canEdit, setCanEdit] = useState<boolean>(false);

  useEffect(() => {
    if (authData.username === userData.username) {
      setCanEdit(true);
    } else {
      setCanEdit(false);
    }
  });

  return (
    <>
      {/* userpage div */}
      <div className="flex flex-col space-y-5 p-3 lg:flex-row lg:space-y-0 ">
        <main className="text-white w-full flex flex-col items-center bg-neutral-900 p-5 space-y-5 sm:flex-row sm:justify-around sm:space-y-0 lg:flex-col lg:w-1/5 lg:min-h-[700px]">
          <div>
            <p
              id="username"
              className="text-white font-arial mb-3 flex flex-col items-center font-bold text-2xl italic"
            >
              {userData.username}
            </p>
            <img
              src={userData.avatar ? userData.avatar : "./defaultAvatar.png"}
              alt="avatar"
              className="w-32 h-32"
            />
          </div>

          {canEdit && (
            <>
              <div>
                <div className="sm:h-auto mb-2 lg:h-[200px]">
                  <button
                    id="openEditUserPanel"
                    type="submit"
                    className="button01 w-[150px] font-xs bg-gray-600 "
                  >
                    Edycja profilu
                  </button>
                </div>

                <div className="flex flex-col items-center">
                  <button
                    type="submit"
                    className="button01 font-light w-[150px] bg-gray-600"
                  >
                    Wyloguj się
                  </button>
                  <button
                    id="openUserDeletePanel"
                    type="submit"
                    className="button01 w-[150px] bg-red-600 mt-2"
                  >
                    Usuń konto
                  </button>
                </div>
              </div>
            </>
          )}

          <div className="text-neutral-700 text-sm flex flex-col">
            <p>Ostatnio online:</p>
            <p className="font-bold"> {userData.whenLastLogged} </p>
            <p className="mt-2">Data rejestracji:</p>
            <p className="font-bold"> {userData.whenRegist} </p>
          </div>
        </main>

        <aside className="w-full p-11 space-y-5">
          {/* posts: */}
          {postsData.map((post) => (
            <div
              key={post.id}
              className="relative bg-neutral-900 p-5 space-y-4  text-white"
            >
              <div className="absolute top-1 right-1 bg-red-600 w-5 h-5">
                <img
                  src="/icons/delete.svg"
                  alt="DELETE"
                  onClick={() => deletePost(post.id)}
                />
              </div>
              <div className="flex flex-row space-x-2">
                <div className=" w-14 h-14 border border-neutral-600 ">
                  <img
                    src={post.avatar ? post.avatar : "./defaultAvatar.png"}
                    alt="Avatar"
                  />
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
