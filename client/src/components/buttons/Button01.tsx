import { buttonTypes } from "../../types/layout/buttonTypes";

const Button01 = ({
  disableButton,
  color,
  shadowColor,
  border,
  content,
  onClick,
}: buttonTypes) => {
  const buttonClass = !disableButton
    ? color === "red"
      ? "bg-red-600"
      : color === "gray"
      ? "bg-gray-600"
      : color === "fuchsia"
      ? "bg-fuchsia-500"
      : color === "cyan"
      ? "bg-cyan-500"
      : color === "black"
      ? "bg-black"
      : ""
    : "hover:shadow-[0_0_0] bg-gray-600";

  const shadowClass = !disableButton
    ? shadowColor === "red"
      ? "hover:shadow-red"
      : shadowColor === "gray"
      ? "hover:shadow-gray"
      : shadowColor === "fuchsia"
      ? "hover:shadow-fuchsia"
      : shadowColor === "cyan"
      ? "hover:shadow-cyan"
      : ""
    : "";

  return (
    <button
      className={`${buttonClass} ${border} ${shadowClass} flex justify-center items-center relative z-10 italic min-w-[140px] py-[5px] px-5 text-md font-bold rounded-3xl font-poppins transition-all duration-200 
        ${
          disableButton
            ? "hover:brightness-100 cursor-not-allowed"
            : "hover:brightness-125 cursor-pointer"
        }`}
      onClick={!disableButton ? onClick : undefined}
    >
      {content}
    </button>
  );
};

export default Button01;
