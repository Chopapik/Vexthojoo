import axios, { AxiosError } from "axios";
import handleResponseErrors from "../../utils/handleResponseErrors";

const removePostService = async (postId: number) => {
  try {
    await axios.delete(`posts/removePost/${postId}`);
    return { message: "Dodano post" };
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default removePostService;
