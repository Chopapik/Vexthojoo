//The PanelsContainer component contains all the project's panels*, which are always positioned above other component

//* or components with fixed display property

import LoginPanel from "../auth/Login/LoginPanel";
import RegisterPanel from "../auth/Register/RegisterPanel";
import AddPostPanel from "../posts/addPost/AddPostPanel";
import EditUserPanel from "../user/EditUserPanel";
import CookieAcceptBar from "../CookieAcceptBar";

const PanelsContainer = () => {
  return (
    <>
      <RegisterPanel />
      <LoginPanel />
      <AddPostPanel />
      <EditUserPanel />
      <CookieAcceptBar />
    </>
  );
};

export default PanelsContainer;
