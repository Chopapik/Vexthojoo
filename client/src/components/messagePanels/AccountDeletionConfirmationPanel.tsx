import Panel from "../shared/panel/Panel";
import { usePanelContext } from "../../context/PanelContext";
import useDeleteUserAccount from "../../hooks/user/useDeleteUserAccount";
import { ButtonFuchsiaSm } from "../shared/buttons/ButtonSM/ButtonSM";
import { useCookieAuthContext } from "../../context/CookieAuthContext";

const AccountDeletionConfirmationPanel = () => {
  const { visiblePanelId } = usePanelContext();
  const { deleteUserAccount } = useDeleteUserAccount();
  const { authData } = useCookieAuthContext();

  const { userid } = authData;

  return (
    <Panel
      content={
        <>
          <div className="flex flex-col space-y-3 w-full h-[175px] py-3 px-5 font-roboto">
            <h2 className="font-bold text-base  text-red-600">
              Czy na pewno usunąć konto?
            </h2>
            <span className="text-sm">
              Wszystkie Twoje posty, wpisy oraz dane powiązane z kontem zostaną
              trwale usunięte.
            </span>
            <span className="text-sm">Tej operacji nie można cofnąć</span>
          </div>
          <div className="flex w-full justify-center">
            <ButtonFuchsiaSm
              content="Usuń konto"
              onClick={async () => {
                await deleteUserAccount(userid);
              }}
            />
          </div>
        </>
      }
      isVisible={visiblePanelId === "AccountDeletionConfirmationPanel"}
    />
  );
};

export default AccountDeletionConfirmationPanel;
