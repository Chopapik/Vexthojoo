import { AxiosError } from "axios";
import axios from "axios";
import { registerDataTypes } from "../../types/auth/registerTypes";

const registerService = async (registerData: registerDataTypes) => {
  console.log(registerData);
  try {
    await axios.post("/auth/register", registerData);
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response) {
        console.log(err.response.data.field);

        console.log(`err:${err.response.data.message}`);

        return {
          errorMessage: err.response.data.message,
          errorField: err.response.data.field,
          errorStatus: err.response.status,
        };
      }
      //imeplement to server global errors:
      if (err.request) {
        return { error: "Błąd odpowiedzi serwera" };
      }
    }
  }
};

export default registerService;
