import { usePanelContext } from "../../context/PanelContext";
import { UserDataTypes } from "../../types/user/userDataTypes";
import { ButtonFuchsiaSm } from "../buttons/Button01";
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
  //zmien to na grid
  return (
    <div className="lg:sticky overflow-auto top-[70px] bg-neutral-900 h-[450px] border-t border-neutral-700 rounded-xl md:h-[calc(100vh-85px)]  flex flex-col md:flex-row lg:flex-col py-3">
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
          className="w-24 h-24 shadow-2xl"
        />
      </div>
      {canEdit && (
        <div className="w-full flex flex-col mt-8 items-center">
          <div className="flex flex-col w-[120px] space-y-3">
            <div className="lg:mb-14 flex  flex-col">
              <ButtonFuchsiaSm
                content="Edycja profilu"
                onClick={() => showPanel("editUserPanel")}
              />
            </div>
            <ButtonFuchsiaSm content="Wyloguj się" onClick={handleLogout} />
            <ButtonFuchsiaSm
              content="Usuń konto"
              onClick={() => showPanel("AccountDeletionConfirmationPanel")}
            />
          </div>
        </div>
      )}
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
