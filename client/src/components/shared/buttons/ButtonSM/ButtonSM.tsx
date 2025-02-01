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
      className={`${buttonStyle.buttonSm} ${buttonStyle.buttonSmFuchsia}`}
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
      className={`${buttonStyle.buttonSm} ${buttonStyle.buttonSmFuchsia} `}
      onClick={onClick}
    >
      <div className="bg-black w-[126px] h-[26px] rounded-full flex justify-center items-center pt-[1px] mb-[1px]">
        {content}
      </div>
    </button>
  );
};

export const ButtonRedSm = ({
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
      className={`${buttonStyle.buttonSm} ${buttonStyle.buttonSmRed}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export const ButtonRedSmEmpty = ({
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
      className={`${buttonStyle.buttonSm} ${buttonStyle.buttonSmRed} `}
      onClick={onClick}
    >
      <div className="bg-black w-[126px] h-[26px] rounded-full flex justify-center items-center pt-[1px] mb-[1px]">
        {content}
      </div>
    </button>
  );
};

export const ButtonNeutralSm = ({
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
      className={`${buttonStyle.buttonSm} ${buttonStyle.buttonSmNeutral}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export const ButtonNeutralSmEmpty = ({
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
      className={`${buttonStyle.buttonSm} ${buttonStyle.buttonSmNeutral} `}
      onClick={onClick}
    >
      <div className="bg-black w-[126px] h-[26px] rounded-full flex justify-center items-center pt-[1px] mb-[1px]">
        {content}
      </div>
    </button>
  );
};
