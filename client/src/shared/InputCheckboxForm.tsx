const InputCheckboxComponent = ({
  handleInputData,
  label,
  error,
  enableErrorMessage,
}: {
  handleInputData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  error?: string;
  enableErrorMessage: boolean;
}) => {
  return (
    <div className="text-xs flex flex-col items-center space-y-2 font-roboto">
      <div className="flex space-x-2">
        <input
          type="checkbox"
          name="acceptTerm"
          onChange={handleInputData}
          className="accent-cyan-400"
        />
        <label htmlFor="rulesAccept">{label}</label>
      </div>

      <div>
        {enableErrorMessage && (
          <span className="relative flex justify-center text-red-600">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputCheckboxComponent;
