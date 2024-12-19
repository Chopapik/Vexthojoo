import { postTypes } from "../../types/posts/postTypes";

import defaultAvatar from "../../assets/images/defaultAvatar.png";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import yesIcon from "../../assets/icons/yes.svg";
import noIcon from "../../assets/icons/no.svg";

const Post = ({
  id,
  index,
  postData,
  postOpacity,
  enableOptions,
  deleteModeEnable,
  handleDeleteModeEnable,
  handleDeletePost,
}: postTypes) => {
  return (
    postData && (
      <>
        <div
          key={index}
          className={`w-full bg-neutral-900 p-5 space-y-4 border-l border-b border-neutral-700 ${
            deleteModeEnable && " border-red-700"
          } ${
            postOpacity[index] ? "opacity-100" : "opacity-0"
          } transition-all ease-linear duration-200`}
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
              <div className="flex h-7 space-x-2">
                {deleteModeEnable && (
                  <div className="h-7 w-auto px-3 flex justify-center items-center bg-neutral-700">
                    Czy na pewno usunąć post?
                    <div className="flex ml-3 space-x-1 w-[50px]">
                      <div className="flex justify-center items-center ">
                        <img
                          src={yesIcon}
                          alt="yes"
                          onClick={() => handleDeletePost(id, index)}
                          className="hover:brightness-50"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          src={noIcon}
                          alt="no"
                          onClick={() => handleDeleteModeEnable(index)}
                          className="hover:brightness-50"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="h-7 w-7 flex justify-center items-center bg-neutral-700 hover:bg-neutral-500 cursor-pointer">
                  <img src={editIcon} alt="edit post" />
                </div>

                <div
                  className="h-7 w-7 flex justify-center items-center bg-red-700 hover:bg-red-500 cursor-pointer"
                  onClick={() => handleDeleteModeEnable(index)}
                >
                  <img src={deleteIcon} alt="remove post" />
                </div>
              </div>
            )}
          </div>
          <p className="text-md">{postData.text}</p>
          {postData.imagePath ? (
            <img
              src={postData.imagePath}
              className="min-w-[25%] max-w-[55%] border-l border-b border-neutral-700"
            />
          ) : null}
        </div>
      </>
    )
  );
};

export default Post;
