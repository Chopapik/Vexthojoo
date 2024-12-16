//The PanelsContainer component contains all the project's panels, which are always positioned above other component

import LoginPanel from "./auth/Login/LoginPanel";
import RegisterPanel from "./auth/Register/RegisterPanel";
import AddPostPanel from "./posts/addPost/AddPostPanel";
import EditUserPanel from "./user/EditUserPanel";
const PanelsContainer = () => {
  return (
    <>
      <RegisterPanel />
      <LoginPanel />
      <AddPostPanel />
      <EditUserPanel />
    </>
  );
};

export default PanelsContainer;
