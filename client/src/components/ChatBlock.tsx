import Block from "./BlockComponent";
import React, { useState } from "react";
import useTypingAnimation from "../hooks/useTypingAnimation";
import ChatContent from "../private/ChatContent";

const ChatBlock = () => {
  const [chatResponse, setChatResponse] = useState<string>(
    "Cześć! Jak mogę Ci pomóc?"
  );
  const [trigger, setTrigger] = useState<boolean>(false);
  const [question, setQuestion] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { content, cursor, isTyping } = useTypingAnimation(
    chatResponse,
    trigger,
    1000,
    500
  );

  const handleQuestionContent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setTrigger((prev) => !prev);
    setQuestion(e.currentTarget.value);
  };

  const handleChatResponseContent = () => {
    setChatResponse(ChatContent());
  };

  return (
    <>
      <Block
        name={"Morcin chat"}
        background={"bg-neutral-800"}
        content={
          <>
            <div className="w-full flex flex-col">
              <div className="flex w-full flex-col text-neutral-100 font-roboto space-y-5 px-3 mt-4 ">
                <div className="w-full flex justify-end">
                  <div
                    className={`bg-zinc-700 py-2 px-4 rounded-3xl ${
                      question === "" ? "hidden" : "visible"
                    } `}
                  >
                    <span>{question}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="w-11">
                    <div className="w-10 h-10 border-[2px] border-zinc-700 rounded-full overflow-hidden">
                      <img src="/ico.png" alt="ico" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span>
                      {content}
                      {cursor}
                    </span>
                  </div>
                </div>
                <div className="w-full flex justify-center h-10 mb-4">
                  <div className="bg-neutral-700 w-3/4 flex justify-between rounded-full text-neutral-200">
                    <input
                      disabled={isTyping}
                      type="text"
                      placeholder="Nie no zadoj pytanie"
                      className="bg-transparent px-4 outline-none flex-grow"
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        (handleQuestionContent(e),
                        setInputValue(""),
                        handleChatResponseContent())
                      }
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className="w-10 h-10 flex justify-center items-center ">
                      <div className="w-8 h-8 bg-neutral-800 rounded-full flex justify-center items-center">
                        <img
                          src="/icons/upArrow2.svg"
                          alt="send"
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      ></Block>
      ;
    </>
  );
};

export default ChatBlock;
