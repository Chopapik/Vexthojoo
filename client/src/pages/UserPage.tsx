import { useParams } from "react-router-dom";
import useDisplayUserData from "../hooks/user/useDisplayUserData";
import { Helmet } from "react-helmet";

import PostsList from "../components/posts/PostsList";
import PostSkeleton from "../components/posts/postComponents/PostSkeleton";
import UserProfileBar from "../components/user/UserProfileBar";
import UserProfileBarSkeleton from "../components/user/UserProfileBarSkeleton";

const UserPage = () => {
  const { username } = useParams();
  const { userData, loading, canEdit, queryError } = useDisplayUserData(
    username || ""
  );

  return (
    <>
      <Helmet>
        <title>Vexthojoo - {username}</title>
      </Helmet>

      {!queryError ? (
        <div className="relative space-x-0 lg:space-x-5 space-y-5 flex flex-col lg:px-3 lg:flex-row lg:space-y-0 2xl:w-[1536px] flex-1">
          <div className="w-full lg:w-1/6">
            {loading ? (
              <UserProfileBarSkeleton />
            ) : (
              <UserProfileBar userData={userData} canEdit={canEdit} />
            )}
          </div>
          <div className="w-full lg:w-5/6 ">
            {loading ? (
              <PostSkeleton />
            ) : (
              <PostsList displayByUser={username} enableOptions={canEdit} />
            )}
          </div>
        </div>
      ) : (
        <div className="text-white w-full h-[50vh] mb-[30vh] flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-red-600">Błąd {queryError.status}</p>
            <p>{queryError.message}:</p>
            <p className="text-xl font-bold italic">{username}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPage;

// <div className="lg:sticky lg:top-[4rem] lg:max-h-[92dvh]  text-white flex flex-col items-center bg-neutral-900 p-5 space-y-5 sm:flex-row sm:justify-around sm:space-y-0 lg:flex-col lg:w-1/6  lg:min-h-[700px] lg:justify-normal  border-l-2 border-b-2 border-neutral-800 lg:space-y-14"></div>

// <div className="w-5/6 bg-red-900 md:ml-6 md:mt-0 mt-6 space-y-5 text-white">
