import axios from "axios";
import { AxiosError } from "axios";
import handleResponseErrors from "../../../utils/handleResponseErrors";

const logoutService = async () => {
  try {
    await axios.get("/cookieAuth/removeAuthCookie");
    return { message: "zalogowano" };
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};
export default logoutService;
