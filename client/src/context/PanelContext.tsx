import { useState, createContext, ReactNode, useContext } from "react";

interface PanelContextTypes {
  visiblePanelId: string | null;
  showPanel: (panelId: string) => void;
  closePanel: () => void;
}

interface PanelProvidertypes {
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

export const PanelProvider = ({ children }: PanelProvidertypes) => {
  const [visiblePanelId, setVisiblePanelId] = useState<string | null>(null);

  const showPanel = (panelId: string) => {
    setVisiblePanelId(panelId);
  };

  const closePanel = () => {
    setVisiblePanelId(null);
  };

  return (
    <PanelContext.Provider value={{ visiblePanelId, showPanel, closePanel }}>
      {children}
    </PanelContext.Provider>
  );
};
