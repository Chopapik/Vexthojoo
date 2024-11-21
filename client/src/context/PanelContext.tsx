import { useState, createContext, ReactNode } from "react";

interface PanelContextTypes {
  visiblePanelId: string | null;
  showPanel: (panelId: string) => void;
  closePanel: () => void;
}

interface PanelProvidertypes {
  children: ReactNode;
}

const PanelContext = createContext<PanelContextTypes>({
  visiblePanelId: null,
  showPanel: () => {},
  closePanel: () => {},
});

const PanelProvider = ({ children }: PanelProvidertypes) => {
  const [visiblePanelId, setVisiblePanelId] = useState<string | null>(null);

  const showPanel = (panelId: string) => {
    setVisiblePanelId(panelId);
    console.log(panelId);
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

export { PanelProvider, PanelContext };
