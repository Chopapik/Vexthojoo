import React from "react";

export interface chatAiColumnTypes {
  question: string;
  response: JSX.Element;
}

export interface chatAiBlockTypes {
  setUserQuestionInput: React.Dispatch<React.SetStateAction<string>>;
  chatAiColumn: chatAiColumnTypes;
  handleChatResponse: () => void;
  isTyping: boolean;
}
