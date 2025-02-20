import { useState } from "react";

const usePostEditMode = () => {
  const [isEditModeActive, setIsEditModeActive] = useState<boolean>(false);

  const toggleEditMode = () => {
    setIsEditModeActive((prev) => !prev);
  };

  const disableEditMode = () => {
    setIsEditModeActive(false);
  };

  const enableEditMode = () => {
    setIsEditModeActive(true);
  };

  return { isEditModeActive, toggleEditMode, disableEditMode, enableEditMode };
};

export default usePostEditMode;
