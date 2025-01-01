import axios from "axios";
import { AxiosError } from "axios";

const logoutService = async () => {
  try {
    await axios.get("/cookieAuth/removeAuthCookie");
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

export default logoutService;
