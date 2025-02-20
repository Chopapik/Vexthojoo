import { useState } from "react";

const usePostDeleteMode = () => {
  const [isDeleteModeActive, setIsDeleteModeActive] = useState<boolean>(false);

  const toggleDeleteMode = () => {
    setIsDeleteModeActive((prev) => !prev);
  };

  const disableDeleteMode = () => {
    setIsDeleteModeActive(false);
  };

  const enableDeleteMode = () => {
    setIsDeleteModeActive(true);
  };

  return {
    isDeleteModeActive,
    toggleDeleteMode,
    disableDeleteMode,
    enableDeleteMode,
  };
};

export default usePostDeleteMode;
