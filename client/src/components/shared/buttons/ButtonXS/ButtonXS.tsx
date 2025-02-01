import { buttonTypes } from "../../../../types/layout/buttonTypes";
import buttonStyle from "./ButtonXs.module.css";

const DisableButtonXS = ({
  content,
  img,
}: {
  content?: string;
  img?: React.ReactNode;
}) => {
  return (
    <div className={`${buttonStyle.buttonXs} ${buttonStyle.ButtonSmBlocked}`}>
      {content || null}
      {img || null}
    </div>
  );
};

export const ButtonNeutralXs = ({
  disableButton,
  content,
  onClick,
  img,
}: buttonTypes) => {
  return disableButton ? (
    <DisableButtonXS content={content} img={img} />
  ) : (
    <button
      className={`${buttonStyle.buttonXsNeutral} ${buttonStyle.buttonXs}`}
      onClick={onClick}
    >
      {content || null}
      {img || null}
    </button>
  );
};

export const ButtonRedXs = ({
  disableButton,
  content,
  onClick,
  img,
}: buttonTypes) => {
  return disableButton ? (
    <DisableButtonXS content={content} img={img} />
  ) : (
    <button
      className={`${buttonStyle.buttonXsRed} ${buttonStyle.buttonXs}`}
      onClick={onClick}
    >
      {content || null}
      {img || null}
    </button>
  );
};

export const ButtonFuchsiaXs = ({
  disableButton,
  content,
  onClick,
  img,
}: buttonTypes) => {
  return disableButton ? (
    <DisableButtonXS content={content} img={img} />
  ) : (
    <button
      className={`${buttonStyle.buttonXsFuchsia} ${buttonStyle.buttonXs}`}
      onClick={onClick}
    >
      {content || null}
      {img || null}
    </button>
  );
};
