import axios, { AxiosError } from "axios";
const fetchUserDataService = async (username: string) => {
  try {
    const response = await axios(`/user/${username}`);

    return { userData: response.data.userData[0] };
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

export default fetchUserDataService;
