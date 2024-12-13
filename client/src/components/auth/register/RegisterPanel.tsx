import { useContext } from "react";
import Panel from "../../../shared/Panel";
import { PanelContext } from "../../../context/PanelContext";
import useRegister from "../../../hooks/useRegister";

import InputOneLineForm from "../../../shared/InputOneLineForm";
import InputCheckboxForm from "../../../shared/InputCheckboxForm";

const RegisterPanel = () => {
  const { visiblePanelId, closePanel } = useContext(PanelContext);

  const {
    handleRegister,
    registerError,
    handleSetUsername,
    handleSetPassword,
    handleSetRePassword,
    handleSetAcceptTerm,
  } = useRegister();

  const { usernameError, passwordError, acceptTermError } = registerError;

  return (
    <Panel
      content={
        <>
          <div className="flex flex-col items-center space-y-[60px]">
            <div className="w-full">
              <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
                REJESTRACJA
              </span>
              <hr className="border-neutral-500 w-3/4" />
            </div>
            <div className="flex flex-col space-y-11 w-3/4">
              <InputOneLineForm
                type={"text"}
                label={"NAZWA"}
                error={usernameError}
                handleInputData={handleSetUsername}
                enableErrorMessage={true}
              />
              <InputOneLineForm
                type={"password"}
                label={"HASŁO"}
                error={passwordError}
                handleInputData={handleSetPassword}
                enableErrorMessage={false}
              />
              <InputOneLineForm
                type={"password"}
                label={"POWTÓRZ HASŁO"}
                error={passwordError}
                handleInputData={handleSetRePassword}
                enableErrorMessage={true}
              />
            </div>
            <InputCheckboxForm
              handleInputData={handleSetAcceptTerm}
              label={"Akceptuje regulamin"}
              error={acceptTermError}
              enableErrorMessage={true}
            />
            <button
              type="submit"
              onClick={handleRegister}
              className="button01 bg-fuchsia-500 mb-5"
            >
              WŁAŹ
            </button>
          </div>
        </>
      }
      isVisible={visiblePanelId === "registerPanel"}
      closePanelFunction={closePanel}
    />
  );
};

export default RegisterPanel;
