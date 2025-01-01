import { useState } from "react";

import useTypingAnimation from "./useTypingAnimation";
import useHandleQueryError from "./useHandleQueryError";
import chatAiResponseService from "../services/chatAi/chatAiResponseService";

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
    const response = await chatAiResponseService();

    if (response?.error) {
      handleQueryError(response.error);
    } else {
      setChatResponse(response?.chatResponse);
    }
    setTrigger((prev) => !prev);
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
