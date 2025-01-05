import { postTypes } from "../../../types/posts/postTypes";
import { useState } from "react";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";
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
          className={`w-full bg-neutral-900 p-5 space-y-4 border-l border-b border-neutral-700            
          ${deleteModeEnable && " border-red-700"}   
          ${updateModeEnable && " border-customCyan-default"}    
          ${
            postOpacity[index] ? "opacity-100" : "opacity-0"
          } transition-all ease-linear duration-200 `}
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-2">
              <a href={`/${postData.username}`}>
                <div className="w-14 h-14 border border-neutral-600">
                  <img
                    src={
                      postData.avatarPath ? postData.avatarPath : defaultAvatar
                    }
                    alt="Avatar"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </a>

              <div>
                <p className="text-sm font-bold">{postData.username}</p>
                <p className="text-xs text-neutral-500">
                  {postData.whenUpload}
                </p>
                <p className="text-xs text-customCyan-default">
                  Uploaded from {postData.whatDevice}
                </p>
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
          {postData.isEdited ? (
            <div className="my-10 text-neutral-600 font-bold text-xs">
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
