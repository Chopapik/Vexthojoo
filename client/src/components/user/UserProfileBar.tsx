import { usePanelContext } from "../../context/PanelContext";
import { UserDataTypes } from "../../types/user/userDataTypes";
import { ButtonNeutralXs } from "../shared/buttons/ButtonXS/ButtonXS";
import gearIcon from "../../assets/icons/mdi_gear.svg";

import defaultAvatar from "../../assets/images/defaultAvatar.png";
const UserProfileBar = ({
  userData,
  canEdit,
}: {
  userData: UserDataTypes;
  canEdit: boolean;
}) => {
  const { showPanel } = usePanelContext();

  return (
    <div className="lg:sticky lg:h-[calc(100vh-80px)] top-[70px] w-full lg:-[1/5] xl:w-[300px] bg-neutral-900 border-t border-neutral-700 rounded-xl min-h-[365px] max-w-[500px] space-y-4 py-8 flex flex-col items-center justify-between">
      <div className="w-[200px] flex flex-col items-center space-y-4 relative">
        <img
          src={userData.avatarPath || defaultAvatar}
          alt={`${userData.username}'s avatar`}
          className="w-[125px] h-[125px] rounded-xl "
        />
        {canEdit && (
          <div className="absolute bottom-11 right-8">
            <ButtonNeutralXs
              imgPath={gearIcon}
              imgAlt="ustawienia użytkownika"
              onClick={() => showPanel("editUserPanel")}
            />
          </div>
        )}
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
