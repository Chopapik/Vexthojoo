import axios, { AxiosError } from "axios";

const updateUserDataService = async (newUserDataForm: FormData) => {
  try {
    const response = await axios.post("/user/updateData", newUserDataForm);

    return { username: response.data.UserData.username };
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

export default updateUserDataService;
