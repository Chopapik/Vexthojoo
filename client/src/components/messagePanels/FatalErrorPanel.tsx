import Panel from "../shared/panel/Panel";
import { usePanelContext } from "../../context/PanelContext";

const FatalErrorPanel = () => {
  const { visiblePanelId, dynamicPanelContent } = usePanelContext();

  return (
    <Panel
      isVisible={visiblePanelId === "FatalErrorPanel"}
      content={<>{dynamicPanelContent}</>}
    />
  );
};

export default FatalErrorPanel;
