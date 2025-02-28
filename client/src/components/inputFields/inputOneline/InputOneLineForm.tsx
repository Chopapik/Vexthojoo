import { ChangeEvent } from "react";

import inputStyle from "./InputOneLineForm.module.css";

const InputOneLineForm = ({
  type,
  label,
  error,
  handleInputData,
  enableErrorMessage,
}: {
  type: string;
  label: string;
  error?: string;
  handleInputData: (e: ChangeEvent<HTMLInputElement>) => void;
  enableErrorMessage: boolean;
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={`${inputStyle.input01} border-b-2 ${
          error ? "border-red-600 " : "border-white"
        }`}
        placeholder=""
        onChange={handleInputData}
      />
      <label htmlFor="username" className={inputStyle.label01}>
        {label}
      </label>
      {enableErrorMessage && (
        <span className="text-xs text-red-600 absolute right-0 top-10">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputOneLineForm;
