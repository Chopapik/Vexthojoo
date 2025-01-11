import { postContentToUpdateTypes } from "../../types/posts/postTypes";
import handleResponseErrors from "../../utils/handleResponseErrors";

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
    } catch (err) {
      if (err instanceof AxiosError) {
        const error = handleResponseErrors(err);
        console.log(error);
        return { error: error };
      }
    }
  }
};
export default updatePostService;
