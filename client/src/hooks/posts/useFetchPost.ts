import { useState } from "react";
import fetchPostsService from "../../services/posts/fetchPostsService";
import useHandleQueryError from "../../hooks/useHandleQueryError";
import { postDataTypes } from "../../types/posts/postTypes";

const useFetchPost = () => {
  const { handleQueryError, queryError } = useHandleQueryError();

  const [loading, setLoading] = useState(true);
  const [postsData, setPostsData] = useState<postDataTypes[]>([]);

  const handleFetchingPosts = async (displayByUser?: string) => {
    const response = await fetchPostsService();

    if (response) {
      const { posts, error } = response;

      if (posts) {
        if (displayByUser) {
          const postsByUser = posts.filter(
            (post: postDataTypes) => post.username === displayByUser
          );
          setPostsData(postsByUser);
        } else {
          setPostsData(posts);
        }
      } else if (error) {
        handleQueryError(error);
      }
    }

    setLoading(false);
  };

  return { handleFetchingPosts, loading, postsData, queryError };
};

export default useFetchPost;
