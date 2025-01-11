import Panel from "../../../shared/Panel";
import { usePanelContext } from "../../../context/PanelContext";
import useRegister from "../../../hooks/auth/useRegister";
import Button01 from "../../buttons/Button01";

import InputOneLineForm from "../../../shared/InputOneLineForm";
import InputCheckboxForm from "../../../shared/InputCheckboxForm";

const RegisterPanel = () => {
  const { visiblePanelId } = usePanelContext();

  const {
    handleRegister,
    queryError,
    handleSetUsername,
    handleSetPassword,
    handleSetRePassword,
    handleSetAcceptTerm,
  } = useRegister();

  return (
    <Panel
      content={
        <>
          <div className="flex flex-col items-center space-y-[40px]">
            <div className="w-full">
              <span className="text-neutral-500 font-bold font-serif italic text-xl ml-1">
                REJESTRACJA
              </span>
              <hr className="border-neutral-500 w-3/4" />
            </div>
            <div className="flex flex-col space-y-9 w-3/4">
              <InputOneLineForm
                type={"text"}
                label={"NAZWA"}
                error={
                  queryError?.field === "usernameError"
                    ? queryError?.message
                    : undefined
                }
                handleInputData={handleSetUsername}
                enableErrorMessage={true}
              />
              <InputOneLineForm
                type={"password"}
                label={"HASŁO"}
                error={
                  queryError?.field === "passwordError"
                    ? queryError?.message
                    : undefined
                }
                handleInputData={handleSetPassword}
                enableErrorMessage={false}
              />
              <InputOneLineForm
                type={"password"}
                label={"POWTÓRZ HASŁO"}
                error={
                  queryError?.field === "passwordError"
                    ? queryError?.message
                    : undefined
                }
                handleInputData={handleSetRePassword}
                enableErrorMessage={true}
              />
            </div>
            <InputCheckboxForm
              handleInputData={handleSetAcceptTerm}
              label={
                <>
                  <span>Akceptuje </span>
                  <a href="/regulamin" className="text-cyan-400 underline">
                    regulamin
                  </a>
                </>
              }
              error={
                queryError?.field === "acceptTermErr"
                  ? queryError?.message
                  : undefined
              }
              enableErrorMessage={true}
            />
            <Button01
              color="fuchsia"
              shadowColor="fuchsia"
              content="WŁAŹ"
              onClick={handleRegister}
            />
          </div>
        </>
      }
      isVisible={visiblePanelId === "registerPanel"}
    />
  );
};

export default RegisterPanel;
