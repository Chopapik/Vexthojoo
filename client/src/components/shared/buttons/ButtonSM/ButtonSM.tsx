import { buttonTypes } from "../../../../types/layout/buttonTypes";
import buttonStyle from "./ButtonSM.module.css";

export const ButtonFuchsiaSm = ({
  disableButton,
  content,
  onClick,
}: buttonTypes) => {
  return disableButton ? (
    <div className={`${buttonStyle.buttonSm} ${buttonStyle.ButtonSmBlocked}`}>
      {content}
    </div>
  ) : (
    <button
      className={`${buttonStyle.buttonSm} bg-fuchsia-500`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export const ButtonFuchsiaSmEmpty = ({
  disableButton,
  content,
  onClick,
}: buttonTypes) => {
  return disableButton ? (
    <div className={`${buttonStyle.buttonSm} ${buttonStyle.ButtonSmBlocked}`}>
      <div>{content}</div>
    </div>
  ) : (
    <button
      className={`${buttonStyle.buttonSm} bg-fuchsia-500`}
      onClick={onClick}
    >
      <div className="bg-black w-[126px] h-[26px] rounded-full flex justify-center items-center pt-[1px] mb-[1px]">
        {content}
      </div>
    </button>
  );
};
