import { useContext } from "react";
import { PanelContext } from "../../context/PanelContext";
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
  const { showPanel } = useContext(PanelContext);

  const { handleLogout } = useLogout();

  return (
    <>
      <div className="flex flex-col items-center space-y-7">
        <span
          id="username"
          className="text-white font-arial text-center font-bold text-2xl italic "
        >
          {userData.username}
        </span>

        <img
          src={userData.avatarPath || defaultAvatar}
          alt="avatar"
          className="w-32 h-32 object-cover border border-neutral-700"
        />
      </div>
      {canEdit && (
        <>
          <div className="flex flex-col w-[160px] space-y-3">
            <div className="lg:mb-14">
              <Button01
                color="bg-gray-600"
                shadowColor="gray"
                content="Edycja profilu"
                onClick={() => showPanel("editUserPanel")}
              />
            </div>
            <Button01
              color="bg-gray-600"
              shadowColor="gray"
              content="Wyloguj się"
              onClick={handleLogout}
            />
            <Button01
              color="bg-red-600"
              shadowColor="red"
              content="Usuń konto"
            />
          </div>
        </>
      )}
      <div className="text-neutral-700 text-sm flex flex-col lg:flex-grow lg:justify-end">
        <p>Ostatnio online:</p>
        <p className="font-bold"> {userData.whenLastLogged} </p>
        <p className="mt-2">Data rejestracji:</p>
        <p className="font-bold"> {userData.whenRegist} </p>
      </div>
    </>
  );
};

export default UserProfileBar;
