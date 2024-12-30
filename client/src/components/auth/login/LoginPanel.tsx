import { useEffect } from "react";
import Panel from "../../../shared/Panel";
import { usePanelContext } from "../../../context/PanelContext";
import useLogin from "../../../hooks/auth/useLogin";
import Button01 from "../../buttons/Button01";
import InputOneLineForm from "../../../shared/InputOneLineForm";
import InputCheckboxForm from "../../../shared/InputCheckboxForm";
import { useCookieAcceptContext } from "../../../context/CookieAcceptContext";

const LoginPanel = () => {
  const { visiblePanelId, closePanel } = usePanelContext();

  const { isCookieAccept } = useCookieAcceptContext();

  const {
    handleLogin,
    loginError,
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
          <div className="flex flex-col items-center space-y-[60px]">
            <div className="w-full">
              <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
                LOGOWANIE
              </span>
              <hr className="border-neutral-500 w-3/4" />
            </div>
            <div className="flex flex-col space-y-11 w-3/4">
              <InputOneLineForm
                type={"text"}
                label={"NAZWA"}
                error={loginError}
                handleInputData={handleSetUsername}
                enableErrorMessage={false}
              />
              <InputOneLineForm
                type={"password"}
                label={"HASŁO"}
                error={loginError}
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
            <Button01
              color="fuchsia"
              shadowColor="fuchsia"
              content="WŁAŹ"
              onClick={handleLogin}
            />
          </div>
        </>
      }
      isVisible={visiblePanelId === "loginPanel"}
      closePanelFunction={closePanel}
    />
  );
};

export default LoginPanel;
