import { postDataTypes } from "../types/postTypes";
import removePostService from "../services/removePostService";
import { usePostsContext } from "../../../context/PostsContext";
import useHandleQueryError from "../../../hooks/errors/useHandleQueryError";

const useDeletePost = (postData: postDataTypes) => {
  const { handleFetchingPosts } = usePostsContext();
  const { handleQueryError, queryError } = useHandleQueryError();

  const deletePost = async () => {
    const response = await removePostService(postData.id);

    if (response?.error) {
      handleQueryError(response.error);
    }

    handleFetchingPosts(postData.username);
  };

  return { deletePost, queryError };
};
export default useDeletePost;
