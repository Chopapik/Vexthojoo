//The PanelsContainer component contains all the project's panels*, which are always positioned above other component

//* or components with fixed display property

import LoginPanel from "../auth/login/LoginPanel";
import RegisterPanel from "../auth/register/RegisterPanel";
import AddPostPanel from "../posts/AddPostPanel";
import EditUserPanel from "../user/EditUserPanel";
import CookieAcceptBar from "../CookieAcceptBar";
import AccountDeletionConfirmationPanel from "../messagePanels/AccountDeletionConfirmationPanel";
import FatalErrorPanel from "../messagePanels/FatalErrorPanel";

const PanelsContainer = () => {
  return (
    <>
      <FatalErrorPanel />
      <RegisterPanel />
      <LoginPanel />
      <AddPostPanel />
      <EditUserPanel />
      <CookieAcceptBar />
      <AccountDeletionConfirmationPanel />
    </>
  );
};

export default PanelsContainer;
