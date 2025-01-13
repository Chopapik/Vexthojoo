import { usePanelContext } from "../../context/PanelContext";
import { UserDataTypes } from "../../types/user/userDataTypes";
import Button01 from "../buttons/Button01";
import useLogout from "../../hooks/auth/useLogout";

import defaultAvatar from "../../assets/images/defaultAvatar.png";
const UserProfileBar = ({
  userData,
  canEdit,
}: {
  userData: UserDataTypes;
  canEdit: boolean;
}) => {
  const { showPanel } = usePanelContext();

  const { handleLogout } = useLogout();

  return (
    <div className="bg-neutral-900 border-l-2 border-b-2 border-neutral-800 h-[93vh] flex flex-col py-3">
      <div className="flex flex-col items-center space-y-7">
        <span
          id="username"
          className="text-white font-arial text-center font-bold text-xl italic "
        >
          {userData.username}
        </span>

        <img
          src={userData.avatarPath || defaultAvatar}
          alt="avatar"
          className="w-24 h-24 object-cover border border-neutral-700"
        />
      </div>
      {!canEdit && (
        <div className="w-full flex flex-col mt-8 items-center">
          <div className="flex flex-col w-[120px] space-y-3">
            <div className="lg:mb-14 flex  flex-col">
              <Button01
                color="gray"
                shadowColor="gray"
                content="Edycja profilu"
                onClick={() => showPanel("editUserPanel")}
              />
            </div>
            <Button01
              color="gray"
              shadowColor="gray"
              content="Wyloguj się"
              onClick={handleLogout}
            />
            <Button01
              color="red"
              shadowColor="red"
              content="Usuń konto"
              onClick={() => showPanel("AccountDeletionConfirmationPanel")}
            />
          </div>
        </div>
      )}
      <div className="text-neutral-700 w-full text-xs flex flex-col items-center lg:flex-grow lg:justify-end">
        <p>Ostatnio online:</p>
        <p className="font-bold"> {userData.whenLastLogged} </p>
        <p className="mt-2">Data rejestracji:</p>
        <p className="font-bold"> {userData.whenRegist} </p>
      </div>
    </div>
  );
};

export default UserProfileBar;
