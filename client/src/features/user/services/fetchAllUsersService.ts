import axios, { AxiosError } from "axios";
import handleResponseErrors from "../../../utils/handleResponseErrors";

const fetchAllUsersService = async () => {
  try {
    const response = await axios.get("/user/allUsers");

    return { usersList: response.data.allUsers };
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default fetchAllUsersService;
