import Panel from "../../shared/Panel";
import { usePanelContext } from "../../context/PanelContext";
import useDeleteUserAccount from "../../hooks/user/useDeleteUserAccount";
import Button01 from "../buttons/Button01";
import { useCookieAuthContext } from "../../context/CookieAuthContext";

const AccountDeletionConfirmationPanel = () => {
  const { visiblePanelId, closePanel } = usePanelContext();
  const { deleteUserAccount } = useDeleteUserAccount();
  const { authData } = useCookieAuthContext();

  const { userid } = authData;

  return (
    <Panel
      content={
        <>
          <div className="flex flex-col space-y-3 w-full h-[200px] py-3 px-5">
            <h2 className="font-bold text-lg text-red-600">
              Czy na pewno usunąć konto?
            </h2>
            <span>
              Wszystkie Twoje posty, wpisy oraz dane powiązane z kontem zostaną
              trwale usunięte.
            </span>
            <span>Tej operacji nie można cofnąć</span>
          </div>
          <div className="flex w-full justify-center">
            <Button01
              color="red"
              shadowColor="red"
              content="Usuń konto"
              onClick={async () => {
                await deleteUserAccount(userid);
              }}
            />
          </div>
        </>
      }
      isVisible={visiblePanelId === "AccountDeletionConfirmationPanel"}
      closePanelFunction={closePanel}
    />
  );
};

export default AccountDeletionConfirmationPanel;
