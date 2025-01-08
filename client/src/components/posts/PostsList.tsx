import PostSkeleton from "./postComponents/PostSkeleton";
import PostLayout from "./postComponents/PostLayout";
import useListPosts from "../../hooks/posts/useListPosts";
import useRemovePost from "../../hooks/posts/useRemovePost";
import { postDataTypes } from "../../types/posts/postTypes";
import { usePostsContext } from "../../context/PostsContext";
import { useEffect } from "react";
import useUpdatePost from "../../hooks/posts/useUpdatePost";

const PostsList = ({
  displayByUser,
  enableOptions,
}: {
  displayByUser?: string;
  enableOptions: boolean;
}) => {
  const { loading, postsData, postOpacity, queryError } = useListPosts();

  const { deleteModeEnable, handleDeletePost, handleDeleteModeEnable } =
    useRemovePost(postsData);

  const {
    updateModeEnable,
    toggleUpdateMode,
    handleSetNewPostContentData,
    handleUpdatePost,
  } = useUpdatePost(postsData);

  const { handleFetchingPosts } = usePostsContext();

  useEffect(() => {
    handleFetchingPosts(displayByUser);
  }, [displayByUser]);

  return (
    <>
      {loading ? (
        <PostSkeleton />
      ) : queryError ? (
        <>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center">
              <span className="text-red-600">
                {queryError.status ? `Błąd ${queryError.status}` : "Error"}
              </span>
              <span className="text-neutral-500 text-xs">
                {queryError.message}
              </span>
            </div>

            <span>Nie udało się załadować postów</span>
          </div>
        </>
      ) : (
        <>
          {postsData.map((postData: postDataTypes, index: number) => (
            <PostLayout
              id={postData.id}
              key={index}
              index={index}
              postData={postData}
              postOpacity={postOpacity}
              enableOptions={enableOptions}
              //post delete
              deleteModeEnable={deleteModeEnable[index]} //enabling delete mode for specified post, by index
              handleDeleteModeEnable={handleDeleteModeEnable}
              handleDeletePost={handleDeletePost}
              //post update
              updateModeEnable={updateModeEnable[index]} //enabling edit mode for specified post, by index
              toggleUpdateMode={toggleUpdateMode}
              handleSetNewPostContentData={handleSetNewPostContentData}
              handleUpdatePost={handleUpdatePost}
            />
          ))}
        </>
      )}
    </>
  );
};

export default PostsList;
