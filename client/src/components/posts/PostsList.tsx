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
  const { loading, postsData, postOpacity } = useListPosts();

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
      ) : (
        <>
          {postsData.map((postData: postDataTypes, index: number) => {
            return (
              <PostLayout
                id={postData.id}
                key={index}
                index={index}
                postData={postData}
                postOpacity={postOpacity}
                enableOptions={enableOptions}
                //post delete
                deleteModeEnable={deleteModeEnable[index]} //enabling delete mode for specify post, by index
                handleDeleteModeEnable={handleDeleteModeEnable}
                handleDeletePost={handleDeletePost}
                //post update
                updateModeEnable={updateModeEnable[index]} //enabling edit mode for specify post, by index
                toggleUpdateMode={toggleUpdateMode}
                handleSetNewPostContentData={handleSetNewPostContentData}
                handleUpdatePost={handleUpdatePost}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default PostsList;
