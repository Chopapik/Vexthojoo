import { useState } from "react";
import registerService from "../../services/auth/registerService";
import {
  registerDataTypes,
  registerErrorTypes,
} from "../../types/auth/registerTypes";
import { usePanelContext } from "../../context/PanelContext";

const useRegister = () => {
  const { closePanel } = usePanelContext();

  const [registerData, setRegisterData] = useState<registerDataTypes>({
    username: "",
    password: "",
    rePassword: "",
    acceptTerm: false,
  });

  const handleSetUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, username: e.target.value });
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, password: e.target.value });
  };

  const handleSetRePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, rePassword: e.target.value });
  };

  const handleSetAcceptTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, acceptTerm: e.target.checked });
  };

  const [registerError, setRegisterError] = useState<registerErrorTypes>({
    usernameError: undefined,
    passwordError: undefined,
    acceptTermError: undefined,
  });
  const handleRegister = async () => {
    const response = await registerService(registerData);

    const updatedErrors = {
      usernameError:
        response?.errorField === "usernameError" ? response.errorMessage : null,
      passwordError:
        response?.errorField === "passwordError" ? response.errorMessage : null,
      acceptTermError:
        response?.errorField === "acceptTermErr" ? response.errorMessage : null,
    };

    setRegisterError(updatedErrors);

    if (response?.errorField === undefined) {
      closePanel();
    }
  };

  return {
    handleRegister,
    registerData,
    setRegisterData,
    registerError,
    handleSetUsername,
    handleSetPassword,
    handleSetRePassword,
    handleSetAcceptTerm,
  };
};

export default useRegister;
