import axios from "axios";
import { AxiosError } from "axios";
import { loginDataTypes } from "../../types/auth/loginTypes";

const loginService = async (loginData: loginDataTypes) => {
  try {
    await axios.post("/auth/login", loginData);
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response) {
        return { errorMessage: err.response.data.message };
      }
    }
  }
};

export default loginService;
