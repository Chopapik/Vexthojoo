import yesIcon from "../../../../../assets/icons/yesIcon.svg";
import noIcon from "../../../../../assets/icons/noIcon.svg";

const ConfirmButton = ({
  question,
  confirmFunction,
  declineFunction,
}: {
  question: string;
  confirmFunction: () => void;
  declineFunction: () => void;
}) => {
  return (
    <div className="w-[130px] pl-2 h-[30px] text-sm font-semibold font-poppins font-xs flex justify-center items-center space-x-2">
      <span>{question}</span>
      <div className="flex items-center justify-center space-x-1">
        <button className="w-[24px] h-[24px]" onClick={confirmFunction}>
          <img src={yesIcon} alt="tak" />
        </button>
        <button className="w-[24px] h-[24px]" onClick={declineFunction}>
          <img src={noIcon} alt="no" />
        </button>
      </div>
    </div>
  );
};

export default ConfirmButton;
