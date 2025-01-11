import { AxiosError } from "axios";
import axios from "axios";
import { registerDataTypes } from "../../types/auth/registerTypes";
import handleResponseErrors from "../../utils/handleResponseErrors";

const registerService = async (registerData: registerDataTypes) => {
  try {
    await axios.post("/auth/register", registerData);
    return { message: `zarejestrowano użytkownika ${registerData.username}` };
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default registerService;
