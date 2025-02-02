import BlinkingButtonStyle from "./BlinkingButton.module.css";
import { buttonTypes } from "../../../../types/layout/buttonTypes";
import useBlinkingButtonAnimation from "../../../../hooks/buttons/useBlinkingButtonAnimation";
const BlinkingButton = ({
  disableButton,
  content,
  svgPath,
  onClick,
}: buttonTypes) => {
  const { currentColor, blockButtonOnClick, blinkingAnimation } =
    useBlinkingButtonAnimation();

  return disableButton ? null : (
    <button
      className={`${currentColor} ${BlinkingButtonStyle.BlinkingButton} flex items-center justify-center space-x-1`}
      onClick={() => {
        if (!blockButtonOnClick) {
          blinkingAnimation();
          onClick?.();
        }
      }}
    >
      <span>{content}</span>
      {svgPath && (
        <svg width="15px" height="15px" className="">
          {/* svg should use text color from currentColor */}
          {svgPath}
        </svg>
      )}
    </button>
  );
};

export default BlinkingButton;
