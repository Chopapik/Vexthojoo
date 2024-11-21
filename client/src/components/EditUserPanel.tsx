import Panel from "./Panel";
import { CookieAuthContext } from "../context/CookieAuthContext";
import { useContext } from "react";

const EditUserPanel = ({
  visiblePanelId,
  closePanelFunction,
}: {
  visiblePanelId: string | null;
  closePanelFunction: () => void;
}) => {
  const { authData } = useContext(CookieAuthContext);

  return (
    <>
      <Panel
        content={
          <div className="p-3 flex flex-col items-center">
            <div className="flex flex-col items-center bg-neutral-700 p-3">
              <p className="font-bold">Zmień avatar</p>
              <input
                id="newAvatar"
                type="file"
                className="w-[235px] mt-3"
                name="newAvatar"
              />
            </div>
            <div className="flex flex-col items-center bg-neutral-700 p-3 mt-2">
              <p className="font-bold">Zmień nazwę</p>
              <input
                type="text"
                className="mt-3 text-center bg-transparent border-b text-xl border-white outline-none px-1"
                placeholder={authData.username ?? ""}
                name="newUsername"
              />
            </div>
            <button
              id="updateUserButton"
              type="submit"
              className="button01 bg-cyan-500 mt-10"
            >
              Zaktualizuj
            </button>
          </div>
        }
        closePanelFunction={closePanelFunction}
        isVisible={visiblePanelId === "editUserPanel"}
      ></Panel>
    </>
  );
};

export default EditUserPanel;
