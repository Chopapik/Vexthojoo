import axios, { AxiosError } from "axios";

const chatAiResponseService = async () => {
  try {
    const response = await axios.get("/chatAi/chatGetResponse");

    return { chatResponse: response.data.response };
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

export default chatAiResponseService;
