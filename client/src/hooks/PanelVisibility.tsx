import { useState } from "react";

const PanelVisibility = () => {
  const [visiblePanelId, setVisiblePanelId] = useState("registerPanel");

  const showPanel = (panelId) => {
    setVisiblePanelId(panelId);
  };

  const closePanel = () => {
    setVisiblePanelId(null);
  };
  return {
    closePanel,
    showPanel,
    visiblePanelId,
  };
};

export default PanelVisibility;
