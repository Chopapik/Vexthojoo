import { useState } from "react";

const useBlinkingButtonAnimation = () => {
  const [currentColor, setCurrentColor] = useState(
    "text-white hover:text-neutral-700"
  );

  const [blockButtonOnClick, setBlockButtonOnClick] = useState<boolean>(false);

  const blinkingAnimation = async () => {
    setBlockButtonOnClick(true);
    for (let i: number = 0; i < 2; i++) {
      await new Promise<void>((resolve) =>
        setTimeout(() => {
          setCurrentColor("text-neutral-500 hover:text-neutral-700");
          resolve();
        }, 60)
      );

      await new Promise<void>((resolve) =>
        setTimeout(() => {
          setCurrentColor("text-white-500 hover:text-white-700");
          resolve();
        }, 60)
      );
    }

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        setCurrentColor("text-white hover:text-neutral-700");
        resolve();
      }, 60)
    );
    setBlockButtonOnClick(false);
  };

  return { blinkingAnimation, currentColor, blockButtonOnClick };
};

export default useBlinkingButtonAnimation;
