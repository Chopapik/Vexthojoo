import axios from "axios";
import { AxiosError } from "axios";

import { loginDataTypes } from "../types/loginTypes";
import handleResponseErrors from "../../../utils/handleResponseErrors";

const loginService = async (loginData: loginDataTypes) => {
  try {
    await axios.post("/auth/login", loginData);
    return { message: "zalogowano" };
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default loginService;
