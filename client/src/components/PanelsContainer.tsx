//The PanelsContaine component contains all the project's panels, which are always positioned above other component
import EditUserPanel from "./EditUserPanel";

import { PanelContext } from "../context/PanelContext";
import { useContext } from "react";

import RegisterContainer from "./auth/register/RegisterContainer";
import LoginContainer from "./auth/login/LoginContainer";
import AddPostContainer from "./posts/addPost/AddPostContainer";

const PanelsContainer = () => {
  const context = useContext(PanelContext);

  if (!context) {
    return <div className="text-red">CONTEXT ERR</div>;
  }
  const { closePanel, visiblePanelId } = context;

  return (
    <>
      {/* NEW COMPONENT */}
      <RegisterContainer />
      <LoginContainer />
      <AddPostContainer />

      <EditUserPanel
        closePanelFunction={closePanel}
        visiblePanelId={visiblePanelId}
      />
    </>
  );
};

export default PanelsContainer;
