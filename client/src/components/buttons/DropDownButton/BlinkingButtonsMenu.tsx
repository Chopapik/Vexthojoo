import BlinkingButton from "../BlinkingButton/BlinkingButton";
import downIcon from "../../../assets/icons/mingcute_down-fill.svg";
import useDroppingDownButtonsMenuAnimation from "../../../hooks/buttons/useDroppingDownButtonsMenuAnimation";

interface option {
  optionName: string;
  optionSvg: React.ReactNode;
  onClick: () => void;
}

const BlinkingButtonsMenu = ({ options }: { options: option[] }) => {
  const { changeButtonHeight, buttonHeight, optionsListOpacity } =
    useDroppingDownButtonsMenuAnimation();

  return (
    <div
      className={`w-[150px] ${buttonHeight}  transition-all ease-in-out duration-200 hover:bg-neutral-800 rounded-xl border-t bg-neutral-900 border-neutral-700 font-poppins font-bold py-4 flex flex-col items-center space-y-3 cursor-pointer overflow-hidden`}
      onClick={() => {
        changeButtonHeight();
      }}
    >
      <div className="flex space-x-1 ">
        <span>SORTUJ</span>
        <img src={downIcon} />
      </div>
      <div
        className={`space-y-0.5 ${optionsListOpacity} transition-opacity ease-in-out duration-200`}
      >
        {options.map((option) => {
          return (
            <BlinkingButton
              content={option.optionName}
              svgPath={option.optionSvg}
              onClick={() => {
                option.onClick();
                setTimeout(() => {
                  changeButtonHeight();
                }, 600);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlinkingButtonsMenu;
