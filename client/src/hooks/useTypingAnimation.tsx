import { useState, useEffect } from "react";

const useTypingAnimation = (
  inputContent: string,
  trigger: boolean,
  startTypingDelay: number,
  cursorBlinkingDelay: number
) => {
  const [cursor, setCursor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);
  //cursor animation
  useEffect(() => {
    console.log(inputContent);
    const interval = setInterval(() => {
      setCursor((prevCursor) => (prevCursor === "" ? "▌" : ""));
    }, cursorBlinkingDelay);
    return () => clearInterval(interval);
  }, []);
  //typing animation
  useEffect(() => {
    setContent("");
    setIsTyping(true);

    setTimeout(() => {
      for (let i = 0; i <= inputContent.length; i++) {
        setTimeout(() => {
          setContent((prev) => prev + inputContent.charAt(i));
          if (i === inputContent.length - 1) {
            setIsTyping(false);
          }
        }, 20 * i);
      }
    }, startTypingDelay);
  }, [trigger, inputContent, startTypingDelay]);

  return { content, cursor, isTyping };
};

export default useTypingAnimation;
