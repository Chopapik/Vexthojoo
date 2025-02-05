import { ButtonNeutralXs } from "../shared/buttons/ButtonXS/ButtonXS";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

const UserAvatarWithButton = ({
  avatarPath,
  username,
  buttonIcon,
  buttonAltName,
  buttonFunction,
  enableButton,
}: {
  avatarPath: string | null | undefined;
  username: string;
  buttonIcon: string;
  buttonAltName: string;
  buttonFunction?: () => void;
  enableButton: boolean;
}) => {
  return (
    <div className="w-fit flex flex-col items-center space-y-4 relative">
      <img
        src={avatarPath || defaultAvatar}
        alt={`${username}'s avatar`}
        className="w-[125px] h-[125px] rounded-xl "
      />
      <div className="absolute -bottom-1 -right-1">
        {enableButton && (
          <ButtonNeutralXs
            imgPath={buttonIcon}
            imgAlt={buttonAltName}
            onClick={buttonFunction}
          />
        )}
      </div>
    </div>
  );
};

export default UserAvatarWithButton;
