//The AllPanel component contains all the project's panels, which are always positioned above other component

import LoginPanel from "./LoginPanel";
import RegisterPanel from "./RegisterPanel";
import AddPostPanel from "./AddPostPanel";

import { PanelContext } from "../context/PanelContext";
import { useContext } from "react";

const AllPanels = () => {
  const context = useContext(PanelContext);

  if (!context) {
    return <div className="text-red">CONTEXT ERR</div>;
  }
  const { closePanel, visiblePanelId } = context;

  console.log(`wiadomosc z all panels: visibleid:${visiblePanelId}`);

  return (
    <>
      <LoginPanel
        closePanelFunction={closePanel}
        visiblePanelId={visiblePanelId}
      />
      <RegisterPanel
        closePanelFunction={closePanel}
        visiblePanelId={visiblePanelId}
      />
      <AddPostPanel
        closePanelFunction={closePanel}
        visiblePanelId={visiblePanelId}
      />
    </>
  );
};

export default AllPanels;