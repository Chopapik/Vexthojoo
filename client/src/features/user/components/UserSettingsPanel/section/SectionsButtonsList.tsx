import SectionListButton from "./SectionListButton";

const SectionsButtonsList = ({
  currentVisibleSection,
  setCurrentVisibleSection,
}: {
  currentVisibleSection: string;
  setCurrentVisibleSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="py-4 px-6 rounded-xl bg-[#121212] space-y-3 flex flex-col items-center">
      <SectionListButton
        content="edycja profilu"
        isActive={currentVisibleSection === "userProfile"}
        onClick={() => setCurrentVisibleSection("userProfile")}
      />
      <SectionListButton
        content="wyloguj się"
        isActive={currentVisibleSection === "logout"}
        onClick={() => setCurrentVisibleSection("logout")}
      />
      <SectionListButton
        content="zmień hasło"
        isActive={currentVisibleSection === "changePassword"}
        onClick={() => setCurrentVisibleSection("changePassword")}
      />
    </div>
  );
};

export default SectionsButtonsList;
