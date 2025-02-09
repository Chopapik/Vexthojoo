//The PanelsContainer component contains all the project's panels*, which are always positioned above other component

//* or components with fixed display property

import LoginPanel from "../auth/login/LoginPanel";
import RegisterPanel from "../auth/register/RegisterPanel";
import AddPostPanel from "../posts/AddPostPanel";
import CookieAcceptBar from "../CookieAcceptBar";
import AccountDeletionConfirmationPanel from "../messagePanels/AccountDeletionConfirmationPanel";
import FatalErrorPanel from "../messagePanels/FatalErrorPanel";
import UserSettingsPanel from "../user/UserSettingsPanel/UserSettingsPanel";

const PanelsContainer = () => {
  return (
    <>
      <FatalErrorPanel />
      <RegisterPanel />
      <LoginPanel />
      <AddPostPanel />
      <UserSettingsPanel />
      <CookieAcceptBar />
      <AccountDeletionConfirmationPanel />
    </>
  );
};

export default PanelsContainer;
