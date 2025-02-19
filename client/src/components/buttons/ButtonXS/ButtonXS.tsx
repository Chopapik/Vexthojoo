import buttonStyle from "./ButtonXs.module.css";
import { buttonTypes } from "../../../types/buttonTypes";

const DisableButtonXS = ({ content, imgAlt, imgPath }: buttonTypes) => {
  return (
    <div className={`${buttonStyle.buttonXs} ${buttonStyle.ButtonXsBlocked}`}>
      {content || null}
      <img src={imgPath} alt={imgAlt} />{" "}
    </div>
  );
};

export const ButtonNeutralXs = ({
  disableButton,
  content,
  onClick,
  imgAlt,
  imgPath,
}: buttonTypes) => {
  return disableButton ? (
    <DisableButtonXS content={content} imgPath={imgPath} imgAlt={imgAlt} />
  ) : (
    <button
      className={`${buttonStyle.buttonXsNeutral} ${buttonStyle.buttonXs}`}
      onClick={onClick}
    >
      {content || null}
      <img src={imgPath} alt={imgAlt} />{" "}
    </button>
  );
};

export const ButtonRedXs = ({
  disableButton,
  content,
  onClick,
  imgAlt,
  imgPath,
}: buttonTypes) => {
  return disableButton ? (
    <DisableButtonXS content={content} imgPath={imgPath} imgAlt={imgAlt} />
  ) : (
    <button
      className={`${buttonStyle.buttonXsRed} ${buttonStyle.buttonXs}`}
      onClick={onClick}
    >
      {content || null}
      <img src={imgPath} alt={imgAlt} />{" "}
    </button>
  );
};

export const ButtonFuchsiaXs = ({
  disableButton,
  content,
  onClick,
  imgAlt,
  imgPath,
}: buttonTypes) => {
  return disableButton ? (
    <DisableButtonXS content={content} imgPath={imgPath} imgAlt={imgAlt} />
  ) : (
    <button
      className={`${buttonStyle.buttonXsFuchsia} ${buttonStyle.buttonXs}`}
      onClick={onClick}
    >
      {content || null}
      <img src={imgPath} alt={imgAlt} />{" "}
    </button>
  );
};
