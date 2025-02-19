import axios, { AxiosError } from "axios";
import handleResponseErrors from "../../../utils/handleResponseErrors";

const deleteUserAcountService = async (userIdToRemove: number) => {
  try {
    await axios.delete(`/user/removeUser/${userIdToRemove}`);
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};
export default deleteUserAcountService;
