import { useState } from "react";
import { errorType } from "../../types/errorType";
import useHandleFatalError from "./useHandleFatalError";
const useHandleQueryError = () => {
  const [queryError, setQueryError] = useState<errorType | undefined>(
    undefined
  );

  const { handleFatalErrorData } = useHandleFatalError();

  const handleQueryError = (error: errorType) => {
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
