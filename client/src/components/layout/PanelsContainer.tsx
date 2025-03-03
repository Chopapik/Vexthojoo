//The PanelsContainer component contains all the project's panels*, which are always positioned above other component

//* or components with fixed display property

import LoginPanel from "../../features/auth/components/LoginPanel";
import RegisterPanel from "../../features/auth/components/RegisterPanel";
import AddPostPanel from "../../features/posts/components/post/addPostPanel/AddPostPanel";
import CookieAcceptBar from "../../features/cookies/components/CookieAcceptBar";
import AccountDeletionConfirmationPanel from "../../features/user/components/AccountDeletionConfirmationPanel";
import FatalErrorPanel from "../FatalErrorPanel";
import UserSettingsPanel from "../../features/user/components/UserSettingsPanel/UserSettingsPanel";

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
