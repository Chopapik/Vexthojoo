import buttonStyle from "./ButtonXs.module.css";
import { buttonTypes } from "../../../types/buttonTypes";

const DisableButtonXS = ({ content, icon }: buttonTypes) => {
  return (
    <div className={`${buttonStyle.buttonXs} ${buttonStyle.ButtonXsBlocked}`}>
      {content || null}
      {icon || null}
    </div>
  );
};

export const ButtonNeutralXs = ({
  disableButton,
  content,
  onClick,

  icon,
}: buttonTypes) => {
  return disableButton ? (
    <DisableButtonXS content={content} icon={icon} />
  ) : (
    <button
      className={`${buttonStyle.buttonXsNeutral} ${buttonStyle.buttonXs}`}
      onClick={onClick}
    >
      {content || null}
      {icon || null}
    </button>
  );
};

export const ButtonRedXs = ({
  disableButton,
  content,
  onClick,

  icon,
}: buttonTypes) => {
  return disableButton ? (
    <DisableButtonXS content={content} icon={icon} />
  ) : (
    <button
      className={`${buttonStyle.buttonXsRed} ${buttonStyle.buttonXs}`}
      onClick={onClick}
    >
      {content || null}
      {icon || null}
    </button>
  );
};

export const ButtonFuchsiaXs = ({
  disableButton,
  content,
  onClick,

  icon,
}: buttonTypes) => {
  return disableButton ? (
    <DisableButtonXS content={content} icon={icon} />
  ) : (
    <button
      className={`${buttonStyle.buttonXsFuchsia} ${buttonStyle.buttonXs}`}
      onClick={onClick}
    >
      {content || null}
      {icon || null}
    </button>
  );
};
