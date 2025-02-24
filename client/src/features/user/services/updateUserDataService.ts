import axios, { AxiosError } from "axios";
import handleResponseErrors from "../../../utils/handleResponseErrors";
const updateUserDataService = async (
  newUserDataForm: FormData,
  userId: number
) => {
  try {
    const response = await axios.post(
      `/user/updateData/${userId}`,
      newUserDataForm
    );

    return { username: response.data.UserData.username };
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default updateUserDataService;
