import axios, { AxiosError } from "axios";

import { postContentDataTypes } from "../types/postTypes";
import handleResponseErrors from "../../../utils/handleResponseErrors";

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
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default addPostSerivce;
