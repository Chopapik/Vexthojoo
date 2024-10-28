import { useState } from "react";

const PanelVisibility = () => {
  const [visiblePanelId, setVisiblePanelId] = useState<string | null>(null);

  const showPanel = (panelId: string) => {
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
