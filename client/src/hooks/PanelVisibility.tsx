import { useState } from "react";

const PanelVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  const showPanel = () => {
    setIsVisible(true);
  };

  const closePanel = () => {
    setIsVisible(false);
  };
  return {
    closePanel,
    showPanel,
    isVisible,
  };
};

export default PanelVisibility;
