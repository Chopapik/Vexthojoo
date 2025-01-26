import { useParams } from "react-router-dom";
import useHandleUserData from "../hooks/user/useHandleUserData";
import { Helmet } from "react-helmet";

import PostsList from "../components/posts/PostsList";
import PostSkeleton from "../components/posts/postComponents/PostSkeleton";
import UserProfileBar from "../components/user/UserProfileBar";
import UserProfileBarSkeleton from "../components/user/UserProfileBarSkeleton";

const UserPage = () => {
  const { username } = useParams();
  const { userData, loading, canEdit, queryError } = useHandleUserData(
    username || ""
  );

  return (
    <>
      <Helmet>
        <title>Vexthojoo - {username}</title>
      </Helmet>

      {!queryError ? (
        <div className="relative space-x-0 lg:space-x-5 space-y-5 flex flex-col lg:px-3 lg:flex-row lg:space-y-0  flex-1">
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
