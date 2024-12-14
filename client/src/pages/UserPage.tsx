import { useParams } from "react-router-dom";
import useDisplayUserData from "../hooks/useDisplayUserData";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

import PostsList from "../components/posts/PostsList";
import PostSkeleton from "../components/posts/PostSkeleton";
import UserProfileBar from "../components/user/UserProfileBar";
import UserProfileBarSkeleton from "../components/user/UserProfileBarSkeleton";

const UserPage = () => {
  const { username } = useParams();
  const { userData, loading, canEdit, error, errorContent } =
    useDisplayUserData(username || "");

  useEffect(() => {
    console.log(errorContent);
  });

  return (
    <>
      <Helmet>
        <title>Vexthojoo - {username}</title>
      </Helmet>

      {!error ? (
        <div className="flex flex-col space-y-5 p-3 lg:flex-row lg:space-y-0 2xl:w-[1536px]">
          <div className="text-white w-full flex flex-col items-center bg-neutral-900 p-5 space-y-5 sm:flex-row sm:justify-between sm:space-y-0 lg:flex-col lg:w-1/5 lg:min-h-[700px] lg:justify-normal lg:space-y-14">
            {loading ? (
              <UserProfileBarSkeleton />
            ) : (
              <UserProfileBar userData={userData} canEdit={canEdit} />
            )}
          </div>
          <div className="w-full p-11 space-y-5 text-white">
            {loading ? (
              <PostSkeleton />
            ) : (
              <PostsList displayByUser={username} />
            )}
          </div>
        </div>
      ) : (
        <div className="text-white w-full h-[50vh] flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-red-600">Błąd {errorContent.status}</p>
            <p>Nie znaleziono użytkownika:</p>
            <p className="text-xl font-bold italic">
              {errorContent.notFoundUsername}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPage;
