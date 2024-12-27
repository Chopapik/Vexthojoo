import { postTypes } from "../../../types/posts/postTypes";

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
  return (
    postData && (
      <>
        <div
          key={index}
          className={`w-full bg-neutral-900 p-5 space-y-4 border-l border-b border-neutral-700            
          ${deleteModeEnable && " border-red-700"}   
          ${updateModeEnable && " border-cyan-500"}    
          ${
            postOpacity[index] ? "opacity-100" : "opacity-0"
          } transition-all ease-linear duration-200 `}
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-2">
              <div className="w-14 h-14 border border-neutral-600">
                <a href={`/${postData.username}`}>
                  <img
                    src={
                      postData.avatarPath ? postData.avatarPath : defaultAvatar
                    }
                    alt="Avatar"
                    className="object-cover"
                  />
                </a>
              </div>
              <div>
                <p className="text-sm font-bold">{postData.username}</p>
                <p className="text-xs text-neutral-500">
                  {postData.whenUpload}
                </p>
                <p className="text-xs text-cyan-400">
                  Uploaded from {postData.whatDevice}
                </p>
              </div>
            </div>
            {enableOptions && (
              <PostOptionsButtons
                id={id}
                index={index}
                //post delete
                deleteModeEnable={deleteModeEnable}
                handleDeleteModeEnable={handleDeleteModeEnable}
                handleDeletePost={handleDeletePost}
                //post update
                updateModeEnable={updateModeEnable}
                toggleUpdateMode={toggleUpdateMode}
                handleUpdatePost={handleUpdatePost}
              />
            )}
          </div>
          <PostContent
            id={id}
            text={postData.text}
            imagePath={postData.imagePath}
            updateModeEnable={updateModeEnable}
            handleSetNewPostContentData={handleSetNewPostContentData}
          />
        </div>
      </>
    )
  );
};

export default PostLayout;
