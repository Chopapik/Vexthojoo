import axios from "axios";
import { AxiosError } from "axios";
import { loginDataTypes } from "../../types/auth/loginTypes";

const loginService = async (loginData: loginDataTypes) => {
  try {
    await axios.post("/auth/login", loginData);
    return { message: "zalogowano" };
  } catch (error) {
    if (error instanceof AxiosError)
      return {
        error: {
          status: error.response?.status,
          message: error.response?.data.message || "Nieznany błąd serwera",
        },
      };
  }
};

export default loginService;
