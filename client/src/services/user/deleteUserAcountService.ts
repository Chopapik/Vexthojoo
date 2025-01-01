import axios, { AxiosError } from "axios";

const deleteUserAcountService = async (userIdToRemove: number) => {
  try {
    await axios.delete(`/user/removeUser/${userIdToRemove}`);
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
export default deleteUserAcountService;
