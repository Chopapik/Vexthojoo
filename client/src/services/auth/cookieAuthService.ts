import axios, { AxiosError } from "axios";

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

export default cookieAuthService;
