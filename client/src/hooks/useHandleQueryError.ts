import { AxiosError } from "axios";
import { useState } from "react";

const useHandleQueryError = () => {
  interface ErrorType {
    status: number;
    message: string;
  }

  const [queryError, setQueryError] = useState<ErrorType | undefined>(
    undefined
  );

  const handleQueryError = (error: AxiosError) => {
    if (error.response) {
      const errorData = error.response.data as { message: string };

      setQueryError({
        status: error.response.status,
        message: errorData.message,
      });
    }
  };
  return { handleQueryError, queryError };
};

export default useHandleQueryError;
