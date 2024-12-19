import { buttonTypes } from "../../types/buttonTypes";

const Button01 = ({
  disableButton,
  color,
  shadowColor,
  border,
  content,
  onClick,
}: buttonTypes) => {
  return (
    <div
      className={`${color} ${border} flex justify-center items-center relative z-10 italic min-w-[140px] py-[5px] px-5 text-md font-bold rounded-3xl font-poppins transition-all duration-200
        ${
          disableButton
            ? "hover:shadow-[0_0_0] hover:brightness-100 bg-gray-600"
            : `hover:shadow-straight hover:shadow-${shadowColor}-500 hover:brightness-125 cursor-pointer `
        }`}
      onClick={!disableButton ? onClick : undefined}
    >
      {content}
    </div>
  );
};

export default Button01;
