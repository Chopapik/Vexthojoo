//The PanelsContaine component contains all the project's panels, which are always positioned above other component
import EditUserPanel from "./EditUserPanel"; //to refactor

import { PanelContext } from "../context/PanelContext";
import { useContext } from "react";

import LoginPanel from "./auth/Login/LoginPanel";
import RegisterPanel from "./auth/Register/RegisterPanel";
import AddPostPanel from "./posts/addPost/AddPostPanel";

const PanelsContainer = () => {
  const context = useContext(PanelContext);

  if (!context) {
    return <div className="text-red">CONTEXT ERR</div>;
  }
  const { closePanel, visiblePanelId } = context;

  return (
    <>
      {/* NEW COMPONENT */}
      <RegisterPanel />
      <LoginPanel />
      <AddPostPanel />

      <EditUserPanel
        closePanelFunction={closePanel}
        visiblePanelId={visiblePanelId}
      />
    </>
  );
};

export default PanelsContainer;
