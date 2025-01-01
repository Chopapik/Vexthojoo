import { useState } from "react";
import registerService from "../../services/auth/registerService";
import { registerDataTypes } from "../../types/auth/registerTypes";
import { usePanelContext } from "../../context/PanelContext";
import useHandleQueryError from "../useHandleQueryError";

const useRegister = () => {
  const { closePanel } = usePanelContext();

  const [registerData, setRegisterData] = useState<registerDataTypes>({
    username: "",
    password: "",
    rePassword: "",
    acceptTerm: false,
  });

  const { handleQueryError, queryError } = useHandleQueryError();

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

  const handleRegister = async () => {
    const response = await registerService(registerData);

    if (response?.error) {
      handleQueryError(response.error);
    } else {
      closePanel();
    }
  };

  return {
    handleRegister,
    registerData,
    setRegisterData,
    queryError,
    handleSetUsername,
    handleSetPassword,
    handleSetRePassword,
    handleSetAcceptTerm,
  };
};

export default useRegister;
