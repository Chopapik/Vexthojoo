import { errorType } from "../../types/errorType";
import { useState } from "react";
import errIco from "../../assets/images/err_ico.png";
import { usePanelContext } from "../../context/PanelContext";

const useHandleFatalError = () => {
  const { showPanel } = usePanelContext();

  const [fatalError, setFatalError] = useState<errorType | undefined>(
    undefined
  );

  const handleFatalErrorData = (fatalError: errorType | undefined) => {
    if (fatalError) {
      setFatalError(fatalError);

      showPanel(
        "FatalErrorPanel",
        <div className="flex flex-col font-roboto justify-between space-y-[70px] overflow-hidden w-full xs:w-[400px]">
          <div className="w-full flex flex-col items-center space-y-3 text-xl md:text-sm overflow-hidden">
            <img src={errIco} alt="error" />
            <span className="font-bold text-red-600">
              BŁĄD {fatalError.status}
            </span>
            <span className="text-center">
              Wystąpił błąd podczas wysłania zapytania
            </span>
          </div>
          <div className="flex flex-col w-full h-fit justify-end text-neutral-600 text-sm md:text-xs max-w-full max-h-full">
            <span className="font-bold">Szczegóły:</span>
            <span>{fatalError.message}</span>
          </div>
        </div>
      );
    }
  };

  return { handleFatalErrorData, fatalError };
};

export default useHandleFatalError;
