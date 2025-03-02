import { postDataTypes } from "../../../types/postTypes";
import PostOptionsButtons from "./PostOptionsButtons";

import defaultAvatar from "../../../../../assets/images/defaultAvatar.png";

const postHeader = ({
  postData,
  isEditModeActive,
  isDeleteModeActive,
  toggleEditMode,
  toggleDeleteMode,
  // enableEditMode,
  disableEditMode,
  // enableDeleteMode,
  disableDeleteMode,
  deletePost,
  updatePost,
  enableOptions,
}: {
  postData: postDataTypes;
  isEditModeActive: boolean;
  isDeleteModeActive: boolean;
  toggleEditMode: () => void;
  toggleDeleteMode: () => void;
  // enableEditMode: () => void;
  disableEditMode: () => void;
  // enableDeleteMode: () => void;
  disableDeleteMode: () => void;
  deletePost: () => void;
  updatePost: () => void;
  enableOptions?: boolean;
}) => {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex space-x-2.5 ">
        <a href={`/${postData.username}`} className="relative">
          <div className="w-full h-full bg-white hover:opacity-5 opacity-0 absolute rounded-xl" />
          <img
            src={postData.avatarPath ? postData.avatarPath : defaultAvatar}
            alt="Avatar"
            className="w-[50px] h-[50px] border-t border-neutral-700 rounded-xl"
            loading="lazy"
          />
        </a>
        <div className="flex flex-col space-y-1 leading-none justify-center">
          <span className="text-base leading-none font-bold">
            {postData.username}
          </span>
          <div className="flex flex-col xs:flex-row xs:space-x-1 xs:items-center">
            <span className="text-neutral-500 text-[11px]">
              {postData.whenUpload}
            </span>
            <div className="bg-neutral-500 w-1 h-1 rounded-full hidden xs:block"></div>
            <span className="text-neutral-500 text-[11px]">
              Uploaded from {postData.whatDevice}
            </span>
          </div>
        </div>
      </div>
      {enableOptions && (
        <PostOptionsButtons
          isEditModeActive={isEditModeActive}
          isDeleteModeActive={isDeleteModeActive}
          toggleEditMode={toggleEditMode}
          toggleDeleteMode={toggleDeleteMode}
          // enableEditMode={enableEditMode}
          disableEditMode={disableEditMode}
          // enableDeleteMode={enableDeleteMode}
          disableDeleteMode={disableDeleteMode}
          deletePost={deletePost}
          updatePost={updatePost}
        />
      )}
    </div>
  );
};

export default postHeader;
