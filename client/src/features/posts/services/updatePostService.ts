import handleResponseErrors from "../../../utils/handleResponseErrors";

import axios, { AxiosError } from "axios";

const updatePostService = async (postId: number, formData: FormData) => {
  try {
    await axios.put(`posts/updatePost/${postId}`, formData);
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default updatePostService;
