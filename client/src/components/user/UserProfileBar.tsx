import { useContext } from "react";
import { PanelContext } from "../../context/PanelContext";
import { UserDataTypes } from "../../types/user/userDataTypes";

import defaultAvatar from "../../assets/images/defaultAvatar.png";
const UserProfileBar = ({
  userData,
  canEdit,
}: {
  userData: UserDataTypes;
  canEdit: boolean;
}) => {
  const { showPanel } = useContext(PanelContext);

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
          <div>
            <div className="sm:h-auto mb-2 lg:h-[100px]">
              <button
                type="submit"
                className="button01 w-[150px] font-xs bg-gray-600 hover:shadow-button01 hover:shadow-gray-500"
                onClick={() => showPanel("editUserPanel")}
              >
                Edycja profilu
              </button>
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="button01 font-light w-[150px] bg-gray-600 hover:shadow-button01 hover:shadow-gray-500"
              >
                Wyloguj się
              </button>
              <button
                id="openUserDeletePanel"
                type="submit"
                className="button01 w-[150px] bg-red-600 mt-2 hover:shadow-button01 hover:shadow-red-500"
              >
                Usuń konto
              </button>
            </div>
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
