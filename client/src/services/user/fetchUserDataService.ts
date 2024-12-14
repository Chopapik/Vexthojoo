import axios, { AxiosError } from "axios";
const fetchUserDataService = async (username: string) => {
  try {
    const response = await axios(`/user/${username}`);
    const userData = response.data.userData[0];

    return { fetchUserData: userData };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        return {
          fetchUserError: {
            message: error.response.data.message,
            notFoundUsername: error.response.data.notFoundUsername,
            status: error.response.status,
          },
        };
      }
    }
  }
};

export default fetchUserDataService;
