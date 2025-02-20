import { postDataTypes } from "../../../types/postTypes";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";

import usePostEditMode from "../../../hooks/usePostEditMode";
import usePostDeleteMode from "../../../hooks/usePostDeleteMode";
import useDeletePost from "../../../hooks/useDeletePost";
import useUpdatePost from "../../../hooks/useUpdatePost";

const Post = ({
  postData,
  enableOptions,
}: {
  postData: postDataTypes;
  enableOptions?: boolean;
}) => {
  const {
    isEditModeActive,
    toggleEditMode,
    // enableEditMode,
    disableEditMode,
  } = usePostEditMode();
  const {
    isDeleteModeActive,
    toggleDeleteMode,
    // enableDeleteMode,
    disableDeleteMode,
  } = usePostDeleteMode();
  const { deletePost } = useDeletePost(postData);
  const { updatePost, handleSetNewPostContentData } = useUpdatePost(postData);

  return (
    <>
      <div className="relative w-full max-w-[910px] bg-neutral-900 rounded-xl p-5 border-t border-neutral-700 space-y-2 font-roboto">
        <PostHeader
          postData={postData}
          isEditModeActive={isEditModeActive}
          isDeleteModeActive={isDeleteModeActive}
          toggleDeleteMode={toggleDeleteMode}
          toggleEditMode={toggleEditMode}
          // enableEditMode={enableEditMode}
          disableEditMode={disableEditMode}
          // enableDeleteMode={enableDeleteMode}
          disableDeleteMode={disableDeleteMode}
          deletePost={deletePost}
          updatePost={updatePost}
          enableOptions={enableOptions}
        />
        <hr className="w-4/5 xs:w-1/2 border-neutral-700" />

        {postData.isEdited ? (
          <div className="my-10 text-neutral-700 font-bold text-xs bg-neutral-950 w-fit px-3 py-1 rounded-xl">
            post edytowany
          </div>
        ) : undefined}
        <PostContent
          text={postData.text}
          imagePath={postData.imagePath}
          isEditModeActive={isEditModeActive}
          handleSetNewPostContentData={handleSetNewPostContentData}
        />
      </div>
    </>
  );
};

export default Post;
