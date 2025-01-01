import { useState } from "react";
import { ErrorType } from "../types/ErrorType";

const useHandleQueryError = () => {
  const [queryError, setQueryError] = useState<ErrorType | undefined>(
    undefined
  );

  const handleQueryError = (error: ErrorType) => {
    if (error) {
      setQueryError({
        status: error.status,
        message: error.message,
        field: error.field,
      });
    } else {
      setQueryError({
        status: undefined,
        message: "Brak połączenia z serwerem",
      });
    }
  };
  return { handleQueryError, queryError };
};

export default useHandleQueryError;
