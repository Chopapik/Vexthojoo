import axios, { AxiosError } from "axios";

const updateUserDataService = async (newUserDataForm: FormData) => {
  console.log(newUserDataForm);
  try {
    const response = await axios.post("/user/updateData", newUserDataForm);
    if (response.data && response.data.UserData.username) {
      return { username: response.data.UserData.username };
    } else {
      return { errorMessage: "Nieoczekiwany błąd serwera" };
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return { errorMessage: error.response.data.errorMessage };
    }
    return { errorMessage: error };
  }
};

export default updateUserDataService;
