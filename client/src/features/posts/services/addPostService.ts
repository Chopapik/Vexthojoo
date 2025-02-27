import axios, { AxiosError } from "axios";

import handleResponseErrors from "../../../utils/handleResponseErrors";

const addPostSerivce = async (postFormData: FormData) => {
  try {
    await axios.post("/posts/addPost", postFormData);
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default addPostSerivce;
