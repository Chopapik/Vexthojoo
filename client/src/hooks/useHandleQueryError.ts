import { useState } from "react";
import { ErrorType } from "../types/ErrorType";
import useHandleFatalError from "./errors/useHandleFatalError";

const useHandleQueryError = () => {
  const [queryError, setQueryError] = useState<ErrorType | undefined>(
    undefined
  );

  const { handleFatalErrorData } = useHandleFatalError();

  const handleQueryError = (error: ErrorType) => {
    if (error.status === 500) {
      handleFatalErrorData({
        message: error.message,
        status: error.status,
      });
    } else {
      if (error) {
        setQueryError({
          status: error.status,
          message: error.message,
          field: error.field,
        });
      } else {
        setQueryError({
          status: 500,
          message: "Brak odpowiedzi serwera",
        });
      }
    }
  };

  return { handleQueryError, queryError };
};

export default useHandleQueryError;
