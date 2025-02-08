import { ButtonNeutralXs } from "../shared/buttons/ButtonXS/ButtonXS";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import { useRef } from "react";

const UserAvatarWithButton = ({
  avatarPath,
  username,
  buttonIcon,
  buttonAltName,
  buttonFunction,
  enableButton,
  enableFileInput,
  inputOnChangeFunction,
}: {
  avatarPath: string | null | undefined;
  username: string;
  buttonIcon: string;
  buttonAltName: string;
  buttonFunction?: () => void;
  enableButton?: boolean;
  enableFileInput?: boolean;
  inputOnChangeFunction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputImage = () => {
    fileInputRef?.current?.click();
  };
  console.log(fileInputRef);

  return (
    <div className="w-fit flex flex-col items-center space-y-4 relative">
      <img
        src={avatarPath || defaultAvatar}
        alt={`${username}'s avatar`}
        className="w-[125px] h-[125px] rounded-xl border-t border-t-neutral-600 "
      />
      <div className="absolute -bottom-1 -right-1">
        {enableButton && (
          <>
            {enableFileInput && (
              <input
                type="file"
                id="newAvatar"
                className="hidden"
                accept="image/*"
                onChange={(e) =>
                  inputOnChangeFunction && inputOnChangeFunction(e)
                }
                ref={fileInputRef}
              />
            )}
            <ButtonNeutralXs
              imgPath={buttonIcon}
              imgAlt={buttonAltName}
              onClick={enableFileInput ? handleInputImage : buttonFunction}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default UserAvatarWithButton;
