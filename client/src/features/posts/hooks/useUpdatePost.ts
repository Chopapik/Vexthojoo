import { useState } from "react";

import { postDataTypes } from "../types/postTypes";
import updatePostService from "../services/updatePostService";
import { usePostsContext } from "../../../context/PostsContext";
import useHandleQueryError from "../../../hooks/errors/useHandleQueryError";
import { postContentDataTypes } from "../types/postTypes";

const useUpdatePost = (postData: postDataTypes) => {
  const { handleFetchingPosts } = usePostsContext();
  const { handleQueryError, queryError } = useHandleQueryError();

  const [newPostContentData, setNewPostContentData] =
    useState<postContentDataTypes>({
      text: "",
      ascii: "",
      ytVideoLink: "",
    });

  const setNewPostData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: "text" | "ascii" | "ytVideoLink"
  ) => {
    setNewPostContentData({ ...setNewPostContentData, [name]: e.target.value });
  };

  const updatePost = async () => {
    const formData = new FormData();

    const { text, ascii, ytVideoLink } = newPostContentData;
    console.log(newPostContentData);

    if (text) formData.append("text", text);
    if (ascii) formData.append("ascii", ascii);
    if (ytVideoLink) formData.append("ytVideoLink", ytVideoLink);
    // if (imageFile) formData.append("image", imageFile);

    const response = await updatePostService(postData.id, formData);

    if (response?.error) {
      handleQueryError(response.error);
    } else {
      handleFetchingPosts(postData.username);
    }
  };

  return { updatePost, queryError, setNewPostData };
};

export default useUpdatePost;
