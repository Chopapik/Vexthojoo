import { useState, createContext, ReactNode, useContext } from "react";

interface PanelContextTypes {
  visiblePanelId: string | null;
  dynamicPanelContent: ReactNode | undefined;
  showPanel: (panelId: string, dynamicPanelContent?: ReactNode) => void;
  closePanel: () => void;
}

interface PanelProviderTypes {
  children: ReactNode;
}

const PanelContext = createContext<PanelContextTypes | undefined>(undefined);

export const usePanelContext = () => {
  const context = useContext(PanelContext);

  if (!context) {
    throw new Error("UsePanelContext must be used within PanelProvider ");
  }

  return context;
};

export const PanelProvider = ({ children }: PanelProviderTypes) => {
  const [visiblePanelId, setVisiblePanelId] = useState<string | null>(null);
  const [dynamicPanelContent, setDynamicPanelContent] = useState<
    ReactNode | undefined
  >(undefined);

  const showPanel = (panelId: string, dynamicPanelContent?: ReactNode) => {
    setVisiblePanelId(panelId);
    setDynamicPanelContent(dynamicPanelContent);
  };

  const closePanel = () => {
    setVisiblePanelId(null);
  };

  return (
    <PanelContext.Provider
      value={{ visiblePanelId, showPanel, closePanel, dynamicPanelContent }}
    >
      {children}
    </PanelContext.Provider>
  );
};
