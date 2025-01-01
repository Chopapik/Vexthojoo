import { useState } from "react";
import { postDataTypes } from "../../types/posts/postTypes";
import removePostService from "../../services/posts/removePostService";
import { usePostsContext } from "../../context/PostsContext";
import useHandleQueryError from "../useHandleQueryError";

const useRemovePost = (postsData: postDataTypes[]) => {
  //postsData is an array of objects, each object contains data for one post
  //length of postsData array is equal to the number of posts in the list
  //deleteModeEnable is an array of boolean values, each value is used to control delete mode for one post
  const [deleteModeEnable, setDeleteModeEnable] = useState<boolean[]>(
    new Array(postsData.length).fill(false)
  );

  const { handleFetchingPosts } = usePostsContext();

  const { handleQueryError, queryError } = useHandleQueryError();

  const handleDeleteModeEnable = (index: number) => {
    setDeleteModeEnable((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleDeletePost = async (
    id: number,
    index: number,
    fetchPostsUsername: string
  ) => {
    const response = await removePostService(id);

    if (response?.error) {
      handleQueryError(response.error);
    }

    //After post remove, post delete mode will be reset to false
    setDeleteModeEnable((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    handleFetchingPosts(fetchPostsUsername);
  };

  return {
    deleteModeEnable,
    handleDeleteModeEnable,
    handleDeletePost,
    queryError,
  };
};

export default useRemovePost;
