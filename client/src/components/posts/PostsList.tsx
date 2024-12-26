import PostSkeleton from "./postComponents/PostSkeleton";
import PostLayout from "./postComponents/PostLayout";
import useListPosts from "../../hooks/posts/useListPosts";
import useRemovePost from "../../hooks/posts/useRemovePost";
import { postDataTypes } from "../../types/posts/postTypes";
import { usePostsContext } from "../../context/PostsContext";
import { useEffect } from "react";
import useEditPost from "../../hooks/posts/useEditPost";

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

  const { editModeEnable, handleEditModeEnable } = useEditPost(postsData);

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
                deleteModeEnable={deleteModeEnable[index]} //enabling delete mode for specify post, by index
                handleDeleteModeEnable={handleDeleteModeEnable}
                handleDeletePost={handleDeletePost}
                editModeEnable={editModeEnable[index]}
                handleEditModeEnable={handleEditModeEnable}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default PostsList;
