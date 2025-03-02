const SectionButton = ({
  isActive,
  isBlocked,
  icon,
  label,
  onClick,
}: {
  isActive: boolean;
  isBlocked: boolean;
  icon?: React.ReactNode;
  label?: string;
  onClick: () => void;
}) => {
  return isBlocked ? (
    <div className="h-[30px] min-w-[30px] rounded-lg text-[#3C3C3C] flex items-center justify-center transition-all duration-200 ease-in-out cursor-not-allowed">
      {!label && icon && icon}
      {!icon && label && <span className="mx-2">{label}</span>}
    </div>
  ) : (
    <button
      className={`h-[30px] min-w-[30px] rounded-lg ${
        isActive ? "bg-neutral-800 border-[#525252] border-t" : "bg-none"
      } 
      hover:bg-[#2E2E2E]  border-t hover:border-[#525252]
      border-transparent flex items-center justify-center transition-all duration-200 ease-in-out`}
      onClick={() => onClick()}
    >
      {!label && icon && icon}
      {!icon && label && <span className="mx-2">{label}</span>}
    </button>
  );
};

export default SectionButton;
