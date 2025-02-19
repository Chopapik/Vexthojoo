const SectionListButton = ({
  content,
  isActive,
  onClick,
}: {
  content: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`w-[150px] h-[35px] rounded-full bg-neutral-800 border-t border-neutral-600 bg-opacity-0 border-opacity-0  font-poppins text-sm
        ${
          isActive
            ? "bg-opacity-100 border-opacity-100 pointer-events-none"
            : "bg-opacity-0 border-opacity-0 hover:bg-opacity-50 hover:border-opacity-50"
        }
        
        `}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default SectionListButton;
