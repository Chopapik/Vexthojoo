import { useState } from "react";

import { postDataTypes } from "../types/postTypes";
import { postContentToUpdateTypes } from "../types/postTypes";
import updatePostService from "../services/updatePostService";
import { usePostsContext } from "../../../context/PostsContext";
import useHandleQueryError from "../../../hooks/errors/useHandleQueryError";

const useUpdatePost = (postData: postDataTypes) => {
  const { handleFetchingPosts } = usePostsContext();
  const { handleQueryError, queryError } = useHandleQueryError();

  const [newPostContentData, setNewPostContentData] =
    useState<postContentToUpdateTypes>({
      newText: undefined,
      newImage: undefined,
    });

  const handleSetNewPostContentData = async ({
    newText,
    newImage,
  }: postContentToUpdateTypes) => {
    if (newText) {
      await setNewPostContentData((prevState) => ({
        ...prevState,
        newText: newText,
      }));
    }
    if (newImage) {
      await setNewPostContentData((prevState) => ({
        ...prevState,
        newImage: newImage,
      }));
    }
  };

  const updatePost = async () => {
    //Sending newText,newImage useState data to service
    const response = await updatePostService(postData.id, newPostContentData);

    if (response?.error) {
      handleQueryError(response.error);
    } else {
      handleFetchingPosts(postData.username);
    }
  };

  return { updatePost, queryError, handleSetNewPostContentData };
};

export default useUpdatePost;
