import Panel from "../../shared/Panel";
import { PanelContext } from "../../context/PanelContext";
import { useContext } from "react";
import useUpdateUserData from "../../hooks/user/useUpdateUserData";
import { CookieAuthContext } from "../../context/CookieAuthContext";
import Button01 from "../buttons/Button01";

import defaultAvatar from "../../assets/images/defaultAvatar.png";

const EditUserPanel = () => {
  const {
    avatarPreview,
    cookieUserData,
    canSave,
    handleUsernameChange,
    handleAvatarPreview,
    handleUserDataUpdate,
    error,
  } = useUpdateUserData();

  const { visiblePanelId, closePanel } = useContext(PanelContext);
  const { authData } = useContext(CookieAuthContext);
  return (
    <Panel
      content={
        cookieUserData && (
          <>
            <div className="space-y-10">
              <div>
                <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
                  EDYCJA PROFILU
                </span>
                <hr className="border-neutral-500 w-3/4" />
              </div>
              <div className="flex flex-col items-center space-y-11">
                {/* newAvatar form */}
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-neutral-400">Avatar</span>
                  <label
                    htmlFor="newAvatar"
                    className="relative w-[150px] h-[150px]"
                  >
                    <img
                      src={
                        avatarPreview || authData.avatarPath || defaultAvatar
                      }
                      className="w-full h-full border-2 border-neutral-700 hover:border-neutral-500 peer transition-all duration-50 ease-in object-cover"
                      alt="avatar preview"
                    />
                    <div className="absolute -right-2 -bottom-2 w-9 h-9 bg-neutral-700 peer-hover:bg-neutral-500 hover:bg-neutral-500 transition-all duration-50 ease-in">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src="icons/edit.svg" alt="" className="w-7 h-7" />
                      </div>
                      <input
                        type="file"
                        name="newAvatar"
                        id="newAvatar"
                        className="hidden"
                        accept="image/*"
                        onChange={handleAvatarPreview}
                      />
                    </div>
                  </label>
                </div>
                {/* newUsername form */}
                <div className="flex flex-col items-center space-y-2 w-3/4">
                  <span className="text-neutral-400">Nazwa</span>
                  <input
                    type="text"
                    name="newUsername"
                    className=" bg-neutral-900 border-2 outline-none w-full text-center text-neutral-100 py-2 order-2 border-neutral-700 hover:border-neutral-500 peer transition-all duration-50 ease-in placeholder-neutral-50"
                    placeholder={cookieUserData.username || ""}
                    onChange={handleUsernameChange}
                  />
                </div>
              </div>
              <div className="absolute w-full flex flex-col items-center left-0">
                <span className="text-red-600 text-sm">{error}</span>
              </div>
              <div className="w-full flex justify-center p-10">
                <Button01
                  disableButton={!canSave}
                  color="bg-fuchsia-500"
                  shadowColor="fuchsia"
                  content="zapisz"
                  onClick={handleUserDataUpdate}
                />
              </div>
            </div>
          </>
        )
      }
      closePanelFunction={closePanel}
      isVisible={visiblePanelId === "editUserPanel"}
    ></Panel>
  );
};

export default EditUserPanel;
