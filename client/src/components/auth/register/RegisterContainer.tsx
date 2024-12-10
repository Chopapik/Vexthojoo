import { useState, useContext } from "react";
import registerService from "../../../services/auth/registerService";
import RegisterPanel from "./RegisterPanel";
import {
  registerDataTypes,
  registerErrorTypes,
} from "../../../types/auth/registerTypes";

import { PanelContext } from "../../../context/PanelContext";

const RegisterContainer = () => {
  const { closePanel } = useContext(PanelContext);

  const [registerData, setRegisterData] = useState<registerDataTypes>({
    username: "",
    password: "",
    rePassword: "",
    acceptTerm: false,
  });

  const [registerError, setRegisterError] = useState<registerErrorTypes>({
    usernameError: null,
    passwordError: null,
    acceptTermError: null,
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
  return (
    <RegisterPanel
      registerFunction={handleRegister}
      registerData={registerData}
      setRegisterData={setRegisterData}
      registerError={registerError}
    />
  );
};

export default RegisterContainer;
