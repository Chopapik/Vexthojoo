import axios, { AxiosError } from "axios";
import handleResponseErrors from "../../utils/handleResponseErrors";
const fetchUserDataService = async (username: string) => {
  try {
    const response = await axios(`/user/${username}`);

    return { userData: response.data.userData[0] };
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default fetchUserDataService;
