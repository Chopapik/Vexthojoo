const SectionTitle = ({ title, color }: { title: string; color?: string }) => {
  return (
    <div
      className={`w-[250px] xs:w-[300px] flex font-poppins text-xs items-center space-x-2 
      ${color === undefined ? "text-neutral-600" : "text-red-600 "}
      `}
    >
      <hr
        className={`flex-1 border-1 ${
          color === undefined ? "border-neutral-600" : "border-red-600 "
        }`}
      />
      <span>{title}</span>
      <hr
        className={`flex-1 border-1 ${
          color === undefined ? "border-neutral-600" : "border-red-600 "
        }`}
      />
    </div>
  );
};

export default SectionTitle;
