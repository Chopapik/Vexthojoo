import { useState } from "react";
import { chatAiBlockTypes } from "../../../types/blocks/chatAiTypes";
import Block from "../Block";

import chatIcon from "../../../assets/images/ico.png";
import sendIcon from "../../../assets/icons/upArrow2.svg";

const ChatAiBlock = ({
  setUserQuestionInput,
  chatAiColumn,
  handleChatResponse,
  isTyping,
}: chatAiBlockTypes) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      <Block
        name={"Morcin chat"}
        background={"bg-neutral-800"}
        content={
          <>
            <div className="min-h-full flex flex-col justify-between ">
              <div className="w-full flex-grow ">
                <div className="w-full flex flex-col ">
                  <div className="flex w-full flex-col text-neutral-100 font-roboto space-y-5 px-3 mt-4 ">
                    <div className="w-full flex justify-end ">
                      <div
                        className={`bg-zinc-700 py-2 px-4 rounded-3xl ${
                          chatAiColumn.question === "" ? "hidden" : "visible"
                        } `}
                      >
                        <span>{chatAiColumn.question}</span>
                      </div>
                    </div>
                    <div className="flex space-x-3 overflow-hidden">
                      <div className="w-11">
                        <div className="w-10 h-10 border-[2px] border-zinc-700 rounded-full overflow-hidden">
                          <img src={chatIcon} alt="ico" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <span>{chatAiColumn.response}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-10 mb-5">
                <div className=" flex justify-center h-10 mb-4">
                  <div className="bg-neutral-700 w-3/4 flex justify-between rounded-full text-neutral-200">
                    <input
                      disabled={isTyping}
                      type="text"
                      placeholder="Nie no zadoj pytanie"
                      className="bg-transparent px-4 outline-none flex-grow"
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && inputValue !== "") {
                          handleChatResponse();
                          const target = e.target as HTMLInputElement;
                          setUserQuestionInput(target.value);
                          setInputValue("");
                        }
                      }}
                    />
                    <div className="w-10 h-10 flex justify-center items-center ">
                      <div className="w-8 h-8 bg-neutral-800 rounded-full flex justify-center items-center">
                        <img src={sendIcon} alt="send" className="w-4" />
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

export default ChatAiBlock;
