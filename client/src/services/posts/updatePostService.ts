import { postContentToUpdateTypes } from "../../types/posts/postTypes";

import axios, { AxiosError } from "axios";

const updatePostService = async (
  postId: number,
  { newText, newImage }: postContentToUpdateTypes
) => {
  const formData = new FormData();
  if (newText) {
    formData.append("newText", newText);
  }
  if (newImage) {
    formData.append("newImage", newImage);
  }
  if (!(!newText && !newImage)) {
    try {
      await axios.put(`posts/updatePost/${postId}`, formData);
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response?.data;
      }
    }
  }
};

export default updatePostService;
