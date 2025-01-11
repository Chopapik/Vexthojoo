import { AxiosError } from "axios";
import { ErrorType } from "../types/ErrorType";

interface ResponseErrorData {
  message?: string;
  field?: string;
}

const handleResponseErrors = (
  responseError: AxiosError<ResponseErrorData>
): ErrorType => {
  if (responseError.response) {
    const { message, field } = responseError.response.data || {};
    return {
      status: responseError.response.status,
      message: message || "Nieznany błąd serwera",
      field: field,
    };
  } else {
    return {
      status: 500,
      message: "Brak połączenia z serwerem",
    };
  }
};

export default handleResponseErrors;
