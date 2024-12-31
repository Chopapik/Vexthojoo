import { useState } from "react";

import useTypingAnimation from "./useTypingAnimation";
import axios, { AxiosError } from "axios";
import useHandleQueryError from "./useHandleQueryError";

const useChatAiReponse = () => {
  const [chatResponse, setChatResponse] = useState<string>(
    "Cześć! Jak mogę Ci pomóc?"
  );
  const [trigger, setTrigger] = useState<boolean>(true);
  const { content, isTyping } = useTypingAnimation(
    chatResponse,
    trigger,
    1000,
    500
  );
  const [userQuestionInput, setUserQuestionInput] = useState<string>("");

  const { handleQueryError, queryError } = useHandleQueryError();

  const handleChatResponse = async () => {
    try {
      const response = await axios.get("/chatAi/chatGetResponse");

      setChatResponse(response.data.response);
      setTrigger((prev) => !prev);
    } catch (error) {
      if (error instanceof AxiosError) {
        handleQueryError(error);
      }
    }
  };

  const chatAiColumn = {
    question: userQuestionInput,
    response: content,
  };

  return {
    setUserQuestionInput,
    chatAiColumn,
    handleChatResponse,
    isTyping,
    queryError,
  };
};

export default useChatAiReponse;
