import { useState } from "react";
import editIcon from "../../../../../assets/icons/editIcon.svg";

const Input = ({
  placeholder,
  onChange,
  type,
}: {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password";
}) => {
  const [showEditIcon, setShowEditIcon] = useState<boolean>(true);

  return (
    <div className="relative ">
      <input
        type={type}
        placeholder={placeholder}
        className="bg-neutral-800 text-center w-[260px] xs:w-[300px] border-neutral-600 border-t text-sm py-3 rounded-xl flex items-center font-poppins h-[45px] outline-none hover:bg-neutral-700 transition-all duration-150 ease-in"
        onFocus={() => setShowEditIcon(false)}
        onBlur={() => setShowEditIcon(true)}
        onChange={(e) => onChange(e)}
      />
      <div className="w-fit absolute top-0 right-0 h-full flex items-center pr-3">
        {showEditIcon && (
          <img src={editIcon} alt="Edytuj" className="w-5 h-5" />
        )}
      </div>
    </div>
  );
};

export default Input;
