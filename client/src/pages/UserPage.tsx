import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CookieAuthContext } from "../context/CookieAuthContext";
import { PanelContext } from "../context/PanelContext";
import { Helmet } from "react-helmet";

const UserPage = () => {
  interface PostTypes {
    id: number;
    username: string;
    avatar: string;
    whenUpload: string;
    whatDevice: string;
    TEXT: string;
    imagePath: string | null;
  }

  const { closePanel, showPanel } = useContext(PanelContext);
  interface UserDataTypes {
    username: string;
    avatar: string;
    whenLastLogged: string;
    whenRegist: string;
  }

  const cookieAuthContext = useContext(CookieAuthContext);
  const { authData } = cookieAuthContext; //cookie data

  const [loading, setLoading] = useState(true);

  const [getUserErr, setGetUserErr] = useState(false);
  const [postOpacity, setPostOpacity] = useState<boolean[]>([]);

  const [getUserErrMessage, setGetUserErrMessage] = useState(
    <>
      <div></div>
    </>
  );

  const [posts, setPosts] = useState<PostTypes[]>([]);

  const [showDeletePostMessage, setShowDeletePostMessage] = useState<boolean[]>(
    []
  );
  const [showEditPostMessage, setShowEditPostMessage] = useState<boolean[]>([]);

  const [userData, setUserData] = useState<UserDataTypes>(() => ({
    username: "",
    avatar: "",
    whenLastLogged: "",
    whenRegist: "",
  }));

  const [refreshPost, setRefreshPost] = useState(false); //refresh posts after post has been removed

  const { username } = useParams();

  useEffect(() => {
    const showPost = async (index: number) => {
      setTimeout(() => {
        setPostOpacity((prevState) => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      }, (index + 10) * 20);
    };

    posts.forEach((_, index) => {
      showPost(index);
    });
  }, [posts]);

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
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios(`/user/${username}`);

        const { posts, userData } = response.data;

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

        setPosts(posts);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setGetUserErrMessage(
          <>
            <div className="flex flex-col items-center">
              <p className="text-red-600">Błąd {err.response.status}</p>
              <p>Nie znaleziono użytkonika:</p>
              <p className="text-xl font-bold italic">
                {err.response.data.notFoundUser}
              </p>
            </div>
          </>
        );
        // setGetUserErrMessage(`${err.response.data.message} ${err.status}`);
        setGetUserErr(true);
        setLoading(false);
      }
    };
    getUserData();
  }, [username, refreshPost, closePanel]);

  const [canEdit, setCanEdit] = useState<boolean>(false);

  useEffect(() => {
    if (authData.username === userData.username) {
      setCanEdit(true);
      setShowDeletePostMessage(new Array(posts.length).fill(false));
      setShowEditPostMessage(new Array(posts.length).fill(false));
    } else {
      setCanEdit(false);
    }
  }, [loading]);

  const handleShowEditPostMessage = (index: number) => {
    setShowEditPostMessage((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    setShowDeletePostMessage((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };
  const handleShowDeletePostMessage = (index: number) => {
    setShowDeletePostMessage((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    setShowEditPostMessage((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };
  return (
    <>
      <div>
        <Helmet>
          <title>Vexthojoo - {userData.username}</title>
        </Helmet>
      </div>
      {!getUserErr ? (
        <>
          {/* userpage div */}
          <div className="flex flex-col space-y-5 p-3 lg:flex-row lg:space-y-0 2xl:w-[1536px]">
            <main className="text-white w-full flex flex-col items-center bg-neutral-900 p-5 space-y-5 sm:flex-row sm:justify-between sm:space-y-0 lg:flex-col lg:w-1/5 lg:min-h-[700px] lg:justify-normal lg:space-y-14">
              {loading ? (
                <>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="h-8 w-[100px] bg-neutral-950"> </div>
                    <div className="w-32 h-32 bg-neutral-950" />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center space-y-3">
                    <p
                      id="username"
                      className="text-white font-arial items-center font-bold text-2xl italic"
                    >
                      {userData.username}
                    </p>
                    <img
                      src={
                        userData.avatar
                          ? userData.avatar
                          : "./defaultAvatar.png"
                      }
                      alt="avatar"
                      className="w-32 h-32 object-cover"
                    />
                  </div>
                  {canEdit && (
                    <>
                      <div>
                        <div className="sm:h-auto mb-2 lg:h-[100px]">
                          <button
                            type="submit"
                            className="button01 w-[150px] font-xs bg-gray-600 hover:shadow-button01 hover:shadow-gray-500"
                            onClick={() => showPanel("editUserPanel")}
                          >
                            Edycja profilu
                          </button>
                        </div>

                        <div className="flex flex-col items-center">
                          <button
                            type="submit"
                            className="button01 font-light w-[150px] bg-gray-600 hover:shadow-button01 hover:shadow-gray-500"
                          >
                            Wyloguj się
                          </button>
                          <button
                            id="openUserDeletePanel"
                            type="submit"
                            className="button01 w-[150px] bg-red-600 mt-2 hover:shadow-button01 hover:shadow-red-500"
                          >
                            Usuń konto
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="text-neutral-700 text-sm flex flex-col lg:flex-grow lg:justify-end">
                    <p>Ostatnio online:</p>
                    <p className="font-bold"> {userData.whenLastLogged} </p>
                    <p className="mt-2">Data rejestracji:</p>
                    <p className="font-bold"> {userData.whenRegist} </p>
                  </div>
                </>
              )}
            </main>

            <aside className="w-full p-11 space-y-5 text-white">
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
                //  posts
                <>
                  {posts.map((post, index) => {
                    return (
                      <div
                        key={index}
                        className={`relative w-full bg-neutral-900 p-5 space-y-4 ${
                          postOpacity[index] ? "opacity-100" : "opacity-0"
                        } transition-all ease-linear duration-200`}
                      >
                        {canEdit && (
                          <>
                            <div className="absolute flex right-0 top-0 space-x-2 p-2">
                              {showEditPostMessage[index] && (
                                <>
                                  <div className="p-0.5 bg-neutral-700 cursor-pointer flex space-x-3 ">
                                    <span className="ml-2">Zapisać post?</span>
                                    <div className="flex">
                                      <img
                                        src="/icons/yes.svg"
                                        alt="tak"
                                        className="hover:brightness-50"
                                      />
                                      <img
                                        src="/icons/no.svg"
                                        alt="nie"
                                        onClick={() =>
                                          handleShowEditPostMessage(index)
                                        }
                                        className="hover:brightness-50"
                                      />
                                    </div>
                                  </div>
                                </>
                              )}
                              {showDeletePostMessage[index] && (
                                <>
                                  <div className="p-0.5 bg-neutral-700 cursor-pointer flex space-x-3 ">
                                    <span className="ml-2">Usunąć post?</span>
                                    <div className="flex">
                                      <img
                                        src="/icons/yes.svg"
                                        alt="tak"
                                        className="hover:brightness-50"
                                        onClick={() => {
                                          deletePost(post.id);
                                          handleShowDeletePostMessage(index);
                                        }}
                                      />
                                      <img
                                        src="/icons/no.svg"
                                        alt="nie"
                                        onClick={() =>
                                          handleShowDeletePostMessage(index)
                                        }
                                        className="hover:brightness-50"
                                      />
                                    </div>
                                  </div>
                                </>
                              )}

                              <div className="p-0.5 bg-neutral-700 cursor-pointer">
                                <img
                                  src="/icons/edit.svg"
                                  alt="edit post"
                                  onClick={() =>
                                    handleShowEditPostMessage(index)
                                  }
                                />
                              </div>
                              <div className="p-0.5 bg-red-700 cursor-pointer">
                                <img
                                  src="/icons/delete.svg"
                                  alt="remove post"
                                  onClick={() =>
                                    handleShowDeletePostMessage(index)
                                  }
                                />
                              </div>
                            </div>
                          </>
                        )}

                        <div className="flex flex-row space-x-2">
                          <div className=" w-14 h-14 border border-neutral-600 ">
                            <img
                              src={
                                post.avatar
                                  ? post.avatar
                                  : "./defaultAvatar.png"
                              }
                              alt="Avatar"
                              className="w-14 h-14 object-cover"
                            />
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
                        {post.imagePath ? (
                          <img
                            src={post.imagePath}
                            className="min-w-[25%] max-w-[30%]"
                          ></img>
                        ) : null}
                      </div>
                    );
                  })}
                </>
              )}
            </aside>
          </div>
        </>
      ) : (
        <>
          <div className="text-white w-full h-[50vh] flex justify-center items-center">
            <span>{getUserErrMessage}</span>
          </div>
        </>
      )}
    </>
  );
};

export default UserPage;
