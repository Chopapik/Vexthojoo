import { usePanelContext } from "../../../context/PanelContext";
import { UserDataTypes } from "../types/userDataTypes";

import GearIcon from "../../../assets/icons/gearIcon.svg?react";
import UserAvatarWithButton from "./UserAvatarWithButton";

const UserProfileBar = ({
  userData,
  canEdit,
}: {
  userData: UserDataTypes;
  canEdit: boolean;
}) => {
  const { showPanel } = usePanelContext();

  return (
    <div className="h-full w-full bg-neutral-900 border-t border-neutral-700 rounded-xl max-w-[500px] space-y-4 py-8 flex flex-col items-center justify-between">
      <div className="w-[200px] flex flex-col items-center space-y-4 relative">
        <UserAvatarWithButton
          avatarPath={userData.avatarPath}
          username={userData.username}
          buttonFunction={() => showPanel("userSettingsPanel")}
          enableButton={canEdit}
          icon={<GearIcon />}
        />
        <span className="w-[200px] text-center font-roboto font-bold text-2xl">
          {userData.username}
        </span>
      </div>
      <div className="text-neutral-700 w-full text-xs flex flex-col items-center flex-grow my-5 justify-end">
        <p>Ostatnio online:</p>
        <p className="font-bold"> {userData.whenLastLogged} </p>
        <p className="mt-2">Data rejestracji:</p>
        <p className="font-bold"> {userData.whenRegist} </p>
      </div>
    </div>
  );
};

export default UserProfileBar;
