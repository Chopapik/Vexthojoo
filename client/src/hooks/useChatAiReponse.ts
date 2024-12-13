import { useState } from "react";

import useTypingAnimation from "./useTypingAnimation";
import ChatContent from "../private/ChatContent";

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

  const handleChatResponse = () => {
    setChatResponse(ChatContent());
    setTrigger((prev) => !prev);
  };

  const chatAiColumn = {
    question: userQuestionInput,
    response: content,
  };

  return { setUserQuestionInput, chatAiColumn, handleChatResponse, isTyping };
};

export default useChatAiReponse;
