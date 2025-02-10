import { useState } from "react";
import updateUserPasswordService from "../../services/user/updateUserPasswordService";
import { passwordUpdateDataType } from "../../types/user/passwordsTypes";
import useHandleQueryError from "../useHandleQueryError";
import { usePanelContext } from "../../context/PanelContext";

const useUpdateUserPassword = () => {
  const [passwordUpdateData, setPasswordUpdateData] =
    useState<passwordUpdateDataType>({
      newPassword: "",
      newPasswordRepeated: "",
      oldPassword: "",
    });

  const { handleQueryError, queryError } = useHandleQueryError();

  const { closePanel } = usePanelContext();

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordUpdateData((prev) => ({ ...prev, newPassword: e.target.value }));
  };

  const handleNewPasswordRepeatedChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordUpdateData((prev) => ({
      ...prev,
      newPasswordRepeated: e.target.value,
    }));
  };

  const handleOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordUpdateData((prev) => ({ ...prev, oldPassword: e.target.value }));
  };

  const handleUpdateUserPassword = async () => {
    const response = await updateUserPasswordService(passwordUpdateData);

    if (response?.error) {
      handleQueryError(response.error);
    } else {
      closePanel();
    }
  };
  return {
    handleNewPasswordChange,
    handleNewPasswordRepeatedChange,
    handleOldPasswordChange,
    handleUpdateUserPassword,
    queryError,
  };
};

export default useUpdateUserPassword;
