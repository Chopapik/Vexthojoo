import { useEffect } from "react";

import Panel from "../../../components/panel/Panel";
import { usePanelContext } from "../../../context/PanelContext";
import useLogin from "../hooks/useLogin";
import { ButtonFuchsiaSm } from "../../../components/buttons/ButtonSM/ButtonSM";
import InputOneLineForm from "../../../components/inputFields/inputOneline/InputOneLineForm";
import InputCheckboxForm from "../../../components/inputFields/inputCheckbox/InputCheckboxForm";
import { useCookieAcceptContext } from "../../../context/CookieAcceptContext";
import PanelTitle from "../../../components/panel/PanelTitle";
const LoginPanel = () => {
  const { visiblePanelId } = usePanelContext();

  const { isCookieAccept } = useCookieAcceptContext();

  const {
    handleLogin,
    queryError,
    handleSetUsername,
    handleSetPassword,
    handleSetNoLogout,
  } = useLogin();

  useEffect(() => {
    console.log("LoginPanel.tsx: isCookieAccept: ", isCookieAccept);
  }, [isCookieAccept]);

  return (
    <Panel
      content={
        <>
          <div className="flex flex-col items-center space-y-[50px] ">
            <PanelTitle title="logowanie" />
            <div className="flex flex-col space-y-11 w-3/4">
              <InputOneLineForm
                type={"text"}
                label={"NAZWA"}
                error={queryError?.message}
                handleInputData={handleSetUsername}
                enableErrorMessage={false}
              />
              <InputOneLineForm
                type={"password"}
                label={"HASŁO"}
                error={queryError?.message}
                handleInputData={handleSetPassword}
                enableErrorMessage={true}
              />
            </div>
            {isCookieAccept && (
              <InputCheckboxForm
                handleInputData={handleSetNoLogout}
                label={"Nie wylogowywuj mnie"}
                error={undefined}
                enableErrorMessage={false}
              />
            )}
            <ButtonFuchsiaSm content="WŁAŹ" onClick={handleLogin} />
          </div>
        </>
      }
      isVisible={visiblePanelId === "loginPanel"}
    />
  );
};

export default LoginPanel;
