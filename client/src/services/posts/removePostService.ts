import axios, { AxiosError } from "axios";

const removePostService = async (postId: number) => {
  try {
    await axios.delete(`posts/removePost/${postId}`);
    return { message: "Dodano post" };
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

export default removePostService;
