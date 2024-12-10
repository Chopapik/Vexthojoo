//The PanelsContainer component contains all the project's panels, which are always positioned above other component

import LoginPanel from "./LoginPanel";
import AddPostPanel from "./AddPostPanel";
import EditUserPanel from "./EditUserPanel";

import { PanelContext } from "../context/PanelContext";
import { useContext } from "react";

import RegisterContainer from "./auth/register/RegisterContainer";

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

      <LoginPanel
        closePanelFunction={closePanel}
        visiblePanelId={visiblePanelId}
      />

      <AddPostPanel
        closePanelFunction={closePanel}
        visiblePanelId={visiblePanelId}
      />
      <EditUserPanel
        closePanelFunction={closePanel}
        visiblePanelId={visiblePanelId}
      />
    </>
  );
};

export default PanelsContainer;
