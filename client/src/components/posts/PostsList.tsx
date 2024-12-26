import PostSkeleton from "./postComponents/PostSkeleton";
import Post from "./postComponents/Post";
import useListPosts from "../../hooks/posts/useListPosts";
import useRemovePost from "../../hooks/posts/useRemovePost";
import { postDataTypes } from "../../types/posts/postTypes";
import { usePostsContext } from "../../context/PostsContext";
import { useEffect } from "react";

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
              <Post
                id={postData.id}
                key={index}
                index={index}
                postData={postData}
                postOpacity={postOpacity}
                enableOptions={enableOptions}
                deleteModeEnable={deleteModeEnable[index]} //enabling delete mode for specify post, by index
                handleDeleteModeEnable={handleDeleteModeEnable}
                handleDeletePost={handleDeletePost}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default PostsList;
