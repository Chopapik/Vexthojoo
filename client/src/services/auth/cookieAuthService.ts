import axios, { AxiosError } from "axios";
import handleResponseErrors from "../../utils/handleResponseErrors";

const cookieAuthService = async () => {
  try {
    const response = await axios.get("/cookieAuth/cookieLogin", {
      withCredentials: true,
    });

    const userData = {
      isLoggedIn: true,
      userid: response.data.userid,
      username: response.data.username,
      avatarPath: response.data.avatarPath,
    };

    return { userData };
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default cookieAuthService;
