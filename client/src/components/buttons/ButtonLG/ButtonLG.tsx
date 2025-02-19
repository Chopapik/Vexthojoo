import { buttonTypes } from "../../../types/buttonTypes";
import buttonStyle from "./ButtonLG.module.css";

export const ButtonFuchsiaLg = ({
  disableButton,
  content,
  onClick,
}: buttonTypes) => {
  return disableButton ? (
    <div className={`${buttonStyle.buttonLg} ${buttonStyle.ButtonLgBlocked}`}>
      {content}
    </div>
  ) : (
    <button
      className={`${buttonStyle.buttonLg} ${buttonStyle.buttonLgFuchsia}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export const ButtonFuchsiaLgEmpty = ({
  disableButton,
  content,
  onClick,
}: buttonTypes) => {
  return disableButton ? (
    <div className={`${buttonStyle.buttonLg} ${buttonStyle.ButtonLgBlocked}`}>
      <div>{content}</div>
    </div>
  ) : (
    <button
      className={`${buttonStyle.buttonLg} ${buttonStyle.buttonLgFuchsia} `}
      onClick={onClick}
    >
      <div className="bg-black w-[126px] h-[26px] rounded-full flex justify-center items-center pt-[1px] mb-[1px]">
        {content}
      </div>
    </button>
  );
};

export const ButtonRedLg = ({
  disableButton,
  content,
  onClick,
}: buttonTypes) => {
  return disableButton ? (
    <div className={`${buttonStyle.buttonLg} ${buttonStyle.ButtonLgBlocked}`}>
      {content}
    </div>
  ) : (
    <button
      className={`${buttonStyle.buttonLg} ${buttonStyle.buttonLgRed}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export const ButtonRedLgEmpty = ({
  disableButton,
  content,
  onClick,
}: buttonTypes) => {
  return disableButton ? (
    <div className={`${buttonStyle.buttonLg} ${buttonStyle.ButtonLgBlocked}`}>
      <div>{content}</div>
    </div>
  ) : (
    <button
      className={`${buttonStyle.buttonLg} ${buttonStyle.buttonLgRed} `}
      onClick={onClick}
    >
      <div className="bg-black w-[126px] h-[26px] rounded-full flex justify-center items-center pt-[1px] mb-[1px]">
        {content}
      </div>
    </button>
  );
};

export const ButtonNeutralLg = ({
  disableButton,
  content,
  onClick,
}: buttonTypes) => {
  return disableButton ? (
    <div className={`${buttonStyle.buttonLg} ${buttonStyle.ButtonLgBlocked}`}>
      {content}
    </div>
  ) : (
    <button
      className={`${buttonStyle.buttonLg} ${buttonStyle.buttonLgNeutral}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export const ButtonNeutralLgEmpty = ({
  disableButton,
  content,
  onClick,
}: buttonTypes) => {
  return disableButton ? (
    <div className={`${buttonStyle.buttonLg} ${buttonStyle.ButtonLgBlocked}`}>
      <div>{content}</div>
    </div>
  ) : (
    <button
      className={`${buttonStyle.buttonLg} ${buttonStyle.buttonLgNeutral} `}
      onClick={onClick}
    >
      <div className="bg-black w-[126px] h-[26px] rounded-full flex justify-center items-center pt-[1px] mb-[1px]">
        {content}
      </div>
    </button>
  );
};
