import { useContext } from "react";
import Panel from "../../../shared/Panel";
import { PanelContext } from "../../../context/PanelContext";
import useLogin from "../../../hooks/useLogin";

import InputTextComponent from "../InputTextComponent";
import InputCheckboxComponent from "../InputCheckboxComponent";

const LoginPanel = () => {
  const { visiblePanelId, closePanel } = useContext(PanelContext);

  const {
    handleLogin,
    loginError,
    handleSetUsername,
    handleSetPassword,
    handleSetNoLogout,
  } = useLogin();

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
              <InputTextComponent
                type={"text"}
                label={"NAZWA"}
                error={loginError}
                handleInputData={handleSetUsername}
                enableErrorMessage={false}
              />
              <InputTextComponent
                type={"password"}
                label={"HASŁO"}
                error={loginError}
                handleInputData={handleSetPassword}
                enableErrorMessage={true}
              />
            </div>
            <InputCheckboxComponent
              handleInputData={handleSetNoLogout}
              label={"Nie wylogowywuj mnie"}
              error={undefined}
              enableErrorMessage={false}
            />
            <button
              className="button01 bg-fuchsia-500 hover:shadow-button01 hover:shadow-fuchsia-500"
              type="submit"
              onClick={handleLogin}
            >
              WŁAŹ
            </button>
          </div>
        </>
      }
      isVisible={visiblePanelId === "loginPanel"}
      closePanelFunction={closePanel}
    />
  );
};

export default LoginPanel;
