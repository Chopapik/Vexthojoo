import PostSkeleton from "./PostSkeleton";
import Post from "./Post";
import useListPosts from "../../hooks/useListPosts";
import useRemovePost from "../../hooks/useRemovePost";

import { postDataTypes } from "../../types/posts/postTypes";

const PostsList = ({
  displayByUser,
  enableOptions,
}: {
  displayByUser?: string;
  enableOptions: boolean;
}) => {
  const { loading, postsData, postOpacity, handleFetchingPosts } =
    useListPosts(displayByUser);

  const { deleteModeEnable, handleDeletePost, handleDeleteModeEnable } =
    useRemovePost(postsData, handleFetchingPosts);

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
