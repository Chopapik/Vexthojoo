import axios, { AxiosError } from "axios";
import handleResponseErrors from "../../utils/handleResponseErrors";

const chatAiResponseService = async () => {
  try {
    const response = await axios.get("/chatAi/chatGetResponse");

    return { chatResponse: response.data.response };
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default chatAiResponseService;
