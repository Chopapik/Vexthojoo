import Panel from "../../shared/panel/Panel";
import { usePanelContext } from "../../../context/PanelContext";
import { useState } from "react";
import SectionsButtonsList from "./section/SectionsButtonsList";

//sections
import UserProfileSection from "./section/sections/UserProfileSection";
import LogOutSection from "./section/sections/LogOutSection";

const UserSettingsPanel = () => {
  const { visiblePanelId } = usePanelContext();

  const [currentVisibleSection, setCurrentVisibleSection] =
    useState("userProfile");

  return (
    <Panel
      isVisible={visiblePanelId === "userSettingsPanel"}
      // isVisible={true}
      title="ustawienia"
      content={
        <div className="flex flex-col items-center md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-3 h-fit md:h-[412px]">
          <SectionsButtonsList
            currentVisibleSection={currentVisibleSection}
            setCurrentVisibleSection={setCurrentVisibleSection}
          />
          {currentVisibleSection === "userProfile" && <UserProfileSection />}
          {currentVisibleSection === "logout" && <LogOutSection />}
        </div>
      }
    />
  );
};

export default UserSettingsPanel;
