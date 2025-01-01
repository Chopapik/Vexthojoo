import { AxiosError } from "axios";
import axios from "axios";
import { registerDataTypes } from "../../types/auth/registerTypes";

const registerService = async (registerData: registerDataTypes) => {
  try {
    await axios.post("/auth/register", registerData);
    return { message: `zarejestrowano użytkownika ${registerData.username}` };
  } catch (error) {
    if (error instanceof AxiosError)
      return {
        error: {
          status: error.response?.status,
          message: error.response?.data.message || "Nieznany błąd serwera",
          field: error.response?.data.field,
        },
      };
  }
};

export default registerService;
