import { useState } from "react";

const useDroppingDownButtonsMenuAnimation = () => {
  const [buttonHeight, setButtonHeight] = useState<string>("h-[60px]");

  const [optionsListOpacity, setOptionsListOpacity] =
    useState<string>("opacity-0");

  const changeButtonHeight = () => {
    if (buttonHeight === "h-[110px]") {
      setTimeout(() => {
        setButtonHeight("h-[60px]");
      }, 200);
      setOptionsListOpacity("opacity-0");
    } else {
      setTimeout(() => {
        setOptionsListOpacity("opacity-100");
      }, 200);
      setButtonHeight("h-[110px]");
    }
  };

  return { buttonHeight, changeButtonHeight, optionsListOpacity };
};

export default useDroppingDownButtonsMenuAnimation;
