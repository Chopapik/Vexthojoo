import { useEffect } from "react";

import PostSkeleton from "./post/postLayout/PostSkeleton";
import Post from "./post/postLayout/Post";
import useListPosts from "../hooks/useListPosts";
// import useRemovePost from "../hooks/useDeletePost";
import { postDataTypes } from "../types/postTypes";
import { usePostsContext } from "../../../context/PostsContext";
// import useUpdatePost from "../hooks/useUpdatePost";

const PostsList = ({
  displayByUser,
  enableOptions,
}: {
  displayByUser?: string;
  enableOptions?: boolean;
}) => {
  const { loading, postsData, queryError } = useListPosts();

  const { handleFetchingPosts } = usePostsContext();

  useEffect(() => {
    handleFetchingPosts(displayByUser);
  }, [displayByUser]);

  return (
    <div className="w-full flex flex-col items-center space-y-3 ">
      {loading ? (
        <PostSkeleton />
      ) : queryError ? (
        <div className="flex flex-col items-center">
          <span className="text-red-600">
            {queryError.status ? `Błąd ${queryError.status}` : "Error"}
          </span>
          <span className="text-neutral-500 text-xs">{queryError.message}</span>

          <span>Nie udało się załadować postów</span>
        </div>
      ) : (
        <>
          {postsData.map((postData: postDataTypes) => (
            <Post postData={postData} enableOptions={enableOptions} />
          ))}
        </>
      )}
    </div>
  );
};

export default PostsList;
