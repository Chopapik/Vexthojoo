import { buttonTypes } from "../../types/buttonTypes";

const Button02 = ({
  disableButton,
  color,
  border,
  content,
  onClick,
}: buttonTypes) => {
  return (
    <button
      className={`${color} ${border} flex justify-center items-center relative z-10 min-w-[100px] py-[5px] px-5 text-md font-poppins
        ${
          disableButton
            ? "placeholder:hover:brightness-100 bg-gray-600"
            : `hover:brightness-125 cursor-pointer`
        }`}
      onClick={!disableButton ? onClick : undefined}
    >
      {content}
    </button>
  );
};

export default Button02;
