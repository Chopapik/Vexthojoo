import { useState } from "react";
import ChatAiBlock from "./ChatAiBlock";
import useTypingAnimation from "../../../hooks/useTypingAnimation";
import ChatContent from "../../../private/ChatContent";

const ChatAiContainer = () => {
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

  return (
    <ChatAiBlock
      setUserQuestionInput={setUserQuestionInput}
      chatAiColumn={{ question: userQuestionInput, response: content }}
      handleChatResponse={handleChatResponse}
      isTyping={isTyping}
    />
  );
};

//   return <span className="text-white">{content}</span>;
// };
export default ChatAiContainer;
