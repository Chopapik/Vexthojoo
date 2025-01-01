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
  } catch (error) {
    if (error instanceof AxiosError)
      return {
        error: {
          status: error.response?.status,
          message: error.response?.data.message || "Nieznany błąd serwera",
        },
      };
  }
};

export default addPostSerivce;
