import axios, { AxiosError } from "axios";

import handleResponseErrors from "../../../utils/handleResponseErrors";
import { passwordUpdateDataType } from "../types/passwordsTypes";

const updateUserPasswordService = async (
  passwordUpdateData: passwordUpdateDataType
) => {
  try {
    await axios.post("/user/updateUserPassword", passwordUpdateData);
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default updateUserPasswordService;
