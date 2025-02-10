import { useParams } from "react-router-dom";
import useHandleUserData from "../hooks/user/useHandleUserData";
import { Helmet } from "react-helmet";

import PostsList from "../components/posts/PostsList";
import PostSkeleton from "../components/shared/post/PostSkeleton";
import UserProfileBar from "../components/user/UserProfileBar";
import UserProfileBarSkeleton from "../components/user/UserProfileBarSkeleton";
import { usePostsContext } from "../context/PostsContext";
import BlinkingButtonsMenu from "../components/shared/buttons/DropDownButton/BlinkingButtonsMenu";

const UserPage = () => {
  const { username } = useParams();
  const { userData, loading, canEdit, queryError } = useHandleUserData(
    username || ""
  );

  const { postsData } = usePostsContext();

  return (
    <>
      <Helmet>
        <title>Vexthojoo - {username}</title>
      </Helmet>

      {!queryError ? (
        <div className="space-y-4 lg:space-y-0 flex flex-col items-center lg:flex-row w-full max-w-[1440px] lg:items-start lg:space-x-5 px-5">
          <div className="w-full flex justify-center lg:w-fit lg:sticky top-[70px]">
            {loading ? (
              <UserProfileBarSkeleton />
            ) : (
              <UserProfileBar userData={userData} canEdit={canEdit} />
            )}
          </div>
          <div className="lg:flex-grow flex flex-col items-center ">
            {loading ? (
              <PostSkeleton />
            ) : (
              <PostsList displayByUser={username} enableOptions={canEdit} />
            )}
          </div>
          <div className="w-[150px] lg:sticky top-[70px]">
            {postsData.length !== 0 && (
              <BlinkingButtonsMenu
                options={[
                  {
                    optionName: "według daty",
                    optionSvg: (
                      <path
                        d="M6.56701 3.18313C6.4498 3.06596 6.29086 3.00014 6.12513 3.00014C5.9594 3.00014 5.80046 3.06596 5.68326 3.18313L3.18326 5.68313C3.06941 5.80101 3.00641 5.95888 3.00784 6.12275C3.00926 6.28663 3.07499 6.44339 3.19087 6.55927C3.30675 6.67515 3.46351 6.74088 3.62738 6.7423C3.79125 6.74372 3.94913 6.68073 4.06701 6.56688L5.50013 5.13375V9.625C5.50013 10.5201 5.85571 11.3786 6.48865 12.0115C7.12158 12.6444 7.98003 13 8.87513 13H12.3751C12.5409 13 12.6999 12.9342 12.8171 12.8169C12.9343 12.6997 13.0001 12.5408 13.0001 12.375C13.0001 12.2092 12.9343 12.0503 12.8171 11.9331C12.6999 11.8159 12.5409 11.75 12.3751 11.75H8.87513C8.31155 11.75 7.77105 11.5261 7.37253 11.1276C6.97402 10.7291 6.75013 10.1886 6.75013 9.625V5.13375L8.18326 6.56688C8.30113 6.68073 8.45901 6.74372 8.62288 6.7423C8.78676 6.74088 8.94351 6.67515 9.05939 6.55927C9.17527 6.44339 9.241 6.28663 9.24243 6.12275C9.24385 5.95888 9.18086 5.80101 9.06701 5.68313L6.56701 3.18313Z"
                        fill="currentColor"
                      />
                    ),
                    onClick: () =>
                      console.log("wykonam funckje tego przycisku"),
                  },
                  {
                    optionName: "według daty",
                    optionSvg: (
                      <path
                        d="M6.75013 5.875C6.75013 5.59594 6.8051 5.31961 6.91189 5.0618C7.01868 4.80398 7.17521 4.56972 7.37253 4.3724C7.77105 3.97388 8.31155 3.75 8.87513 3.75H12.3751C12.5409 3.75 12.6999 3.68415 12.8171 3.56694C12.9343 3.44973 13.0001 3.29076 13.0001 3.125C13.0001 2.95924 12.9343 2.80027 12.8171 2.68306C12.6999 2.56585 12.5409 2.5 12.3751 2.5H8.87513C7.98003 2.5 7.12158 2.85558 6.48865 3.48851C5.85571 4.12145 5.50013 4.97989 5.50013 5.875V10.3663L4.06701 8.93313C3.94913 8.81928 3.79125 8.75628 3.62738 8.7577C3.46351 8.75913 3.30675 8.82486 3.19087 8.94074C3.07499 9.05662 3.00926 9.21338 3.00784 9.37725C3.00641 9.54112 3.06941 9.699 3.18326 9.81687L5.68326 12.3169C5.80046 12.434 5.9594 12.4999 6.12513 12.4999C6.29086 12.4999 6.4498 12.434 6.56701 12.3169L9.06701 9.81687C9.18086 9.699 9.24385 9.54112 9.24243 9.37725C9.241 9.21338 9.17527 9.05662 9.05939 8.94074C8.94351 8.82486 8.78676 8.75913 8.62288 8.7577C8.45901 8.75628 8.30113 8.81928 8.18326 8.93313L6.75013 10.3663V5.875Z"
                        fill="currentColor"
                      />
                    ),
                    onClick: () =>
                      console.log("wykonam funckje tego przycisku"),
                  },
                ]}
              />
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
