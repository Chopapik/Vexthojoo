import { postContentDataTypes } from "../../types/posts/postTypes";
import axios, { AxiosError } from "axios";

const addPostSerivce = async (postContentData: postContentDataTypes) => {
  try {
    const formData = new FormData();

    if (postContentData.text) {
      formData.append("text", postContentData.text);
    }

    if (postContentData.image) {
      formData.append("image", postContentData.image);
    }

    await axios.post("/posts/addPost", formData);
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response) {
        const errorMessage = err.response.data.message;
        return errorMessage;
      }
    }
  }
};

export default addPostSerivce;
