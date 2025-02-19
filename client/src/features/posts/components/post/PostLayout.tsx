import { postTypes } from "../../types/postTypes";
import { useState } from "react";
import defaultAvatar from "../../../../assets/images/defaultAvatar.png";
import PostOptionsButtons from "./PostOptionsButtons";
import PostContent from "./PostContent";

const PostLayout = ({
  id,
  index,
  postData,
  postOpacity,
  enableOptions,
  //post delete
  deleteModeEnable,
  handleDeleteModeEnable,
  handleDeletePost,
  //post update
  updateModeEnable,
  toggleUpdateMode,
  handleSetNewPostContentData,
  handleUpdatePost,
}: postTypes) => {
  const [blockUpdate, setBlockUpdate] = useState<boolean>(true);

  return (
    postData && (
      <>
        <div
          key={index}
          className={`w-full max-w-[910px] bg-neutral-900 rounded-xl p-5 border-t border-neutral-700 space-y-2 font-roboto
          ${deleteModeEnable && " border-red-700"}   
          ${updateModeEnable && " border-customCyan-default"}    
          ${
            postOpacity[index] ? "opacity-100" : "opacity-0"
          } transition-all ease-linear duration-200 `}
        >
          <div className="flex flex-row justify-between">
            <div className="flex space-x-2.5 ">
              <a href={`/${postData.username}`} className="relative">
                <div className="w-full h-full bg-white hover:opacity-5 opacity-0 absolute rounded-xl" />
                <img
                  src={
                    postData.avatarPath ? postData.avatarPath : defaultAvatar
                  }
                  alt="Avatar"
                  className="w-[50px] h-[50px] border-t border-neutral-700 rounded-xl"
                  loading="lazy"
                />
              </a>

              <div className="flex flex-col space-y-1 leading-none ">
                <span className="text-base leading-none font-bold">
                  {postData.username}
                </span>
                <span className="text-neutral-500 text-[11px]">
                  {postData.whenUpload}
                </span>
                <span className="text-neutral-500 text-[11px]">
                  Uploaded from {postData.whatDevice}
                </span>
              </div>
            </div>
            {enableOptions && (
              <PostOptionsButtons
                id={id}
                index={index}
                fetchPostsUsername={postData.username} //Variable is used to fetch only user's posts after post deletion
                //post delete
                deleteModeEnable={deleteModeEnable}
                handleDeleteModeEnable={handleDeleteModeEnable}
                handleDeletePost={handleDeletePost}
                //post update
                updateModeEnable={updateModeEnable}
                toggleUpdateMode={toggleUpdateMode}
                handleUpdatePost={handleUpdatePost}
                blockUpdate={blockUpdate}
              />
            )}
          </div>
          <hr className="w-4/5 xs:w-1/2 border-neutral-700" />

          {postData.isEdited ? (
            <div className="my-10 text-neutral-700 font-bold text-xs bg-neutral-950 w-fit px-3 py-1 rounded-xl">
              post edytowany
            </div>
          ) : undefined}
          <PostContent
            id={id}
            text={postData.text}
            imagePath={postData.imagePath}
            updateModeEnable={updateModeEnable}
            handleSetNewPostContentData={handleSetNewPostContentData}
            setBlockUpdate={setBlockUpdate}
            blockUpdate={blockUpdate}
          />
        </div>
      </>
    )
  );
};

export default PostLayout;
