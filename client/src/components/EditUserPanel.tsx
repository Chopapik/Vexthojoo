import Panel from "./Panel";
import { CookieAuthContext } from "../context/CookieAuthContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditUserPanel = ({
  visiblePanelId,
  closePanelFunction,
}: {
  visiblePanelId: string | null;
  closePanelFunction: () => void;
}) => {
  const { getUser } = useContext(CookieAuthContext);

  const navigate = useNavigate();

  const { authData } = useContext(CookieAuthContext);

  const [canSave, setCanSave] = useState<boolean>(false);

  const [avatarPreview, setAvatarPreview] = useState("./defaultAvatar.png");

  interface newUserDataTypes {
    username: string | null;
    avatar: File | string | null;
  }

  const [newUserData, setNewUserData] = useState<newUserDataTypes>({
    username: authData.username,
    avatar: "",
  });

  const updateUserData = async () => {
    // Adding newUserData fields to FormData
    const formData = new FormData();

    if (newUserData.username) {
      formData.append("username", newUserData.username);
    }

    if (newUserData.avatar) {
      formData.append("avatar", newUserData.avatar);
    }

    try {
      const response = await axios.post("/user/updateData", formData);
      closePanelFunction();
      //After successful username change, user will be navigated to ned directiory with /newUsername
      const newAuthData = response.data.UserData;
      navigate(`/${newAuthData.username}`);
      getUser();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log("Error updating user data:", err.message);
    }
  };

  return (
    <Panel
      content={
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
                <span className="text-neutral-400">Awatar</span>
                <label
                  htmlFor="newAvatar"
                  className="relative w-[150px] h-[150px]"
                >
                  <img
                    src={avatarPreview}
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
                      onChange={(e) => {
                        if (e.target.files) {
                          const file = e.target.files[0];
                          if (file.type.substring(0, 5) === "image") {
                            const reader = new FileReader();

                            reader.readAsDataURL(file);
                            reader.onload = () => {
                              setAvatarPreview(reader.result as string);
                              setNewUserData({
                                ...newUserData,
                                avatar: file,
                              });
                              setCanSave(true);
                            };
                          }
                        }
                      }}
                    />
                  </div>
                </label>
              </div>
              {/* newUsername form */}
              <div className="flex flex-col items-center space-y-2">
                <span className="text-neutral-400">Nazwa</span>
                <input
                  type="text"
                  name="newUsername"
                  className=" bg-neutral-900 border-2 outline-none text-neutral-100 px-6 py-2 order-2 border-neutral-700 hover:border-neutral-500 peer transition-all duration-50 ease-in placeholder-neutral-50"
                  placeholder={authData.username ?? "twoja nazwa"}
                  onChange={(e) => {
                    setNewUserData({
                      ...newUserData,
                      username: e.target.value,
                    });
                    if (
                      e.target.value === "" ||
                      e.target.value === authData.username
                    ) {
                      setCanSave(false);
                    } else {
                      setCanSave(true);
                    }
                  }}
                />
              </div>
            </div>
            <div className="w-full flex justify-center p-10">
              {canSave ? (
                <button
                  className="button01 bg-cyan-500 hover:shadow-button01 hover:shadow-cyan-500"
                  onClick={updateUserData}
                >
                  zapisz
                </button>
              ) : (
                <button className="button01 hover:bg-gray-500 bg-gray-500">
                  zapisz
                </button>
              )}
            </div>
          </div>
        </>
      }
      closePanelFunction={closePanelFunction}
      isVisible={visiblePanelId === "editUserPanel"}
    ></Panel>
  );
};

export default EditUserPanel;
