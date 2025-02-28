import Panel from "../../../components/panel/Panel";
import { usePanelContext } from "../../../context/PanelContext";
import useRegister from "../hooks/useRegister";
import { ButtonFuchsiaSm } from "../../../components/buttons/ButtonSM/ButtonSM";
import PanelTitle from "../../../components/panel/PanelTitle";
import InputOneLineForm from "../../../components/inputFields/inputOneline/InputOneLineForm";
import InputCheckboxForm from "../../../components/inputFields/inputCheckbox/InputCheckboxForm";

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
            <PanelTitle title="rejestracja" />
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
            <ButtonFuchsiaSm content="WŁAŹ" onClick={handleRegister} />
          </div>
        </>
      }
      isVisible={visiblePanelId === "registerPanel"}
    />
  );
};

export default RegisterPanel;
