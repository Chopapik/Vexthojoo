import { useNavigate } from "react-router-dom";

import { usePanelContext } from "../../../context/PanelContext";
import useLogout from "../../auth/hooks/useLogout";
import deleteUserAcountService from "../services/deleteUserAcountService";
import useHandleQueryError from "../../../hooks/errors/useHandleQueryError";

const useDeleteUserAccount = () => {
  const navigate = useNavigate();
  const { closePanel } = usePanelContext();
  const { handleLogout } = useLogout();

  const { handleQueryError, queryError } = useHandleQueryError();

  const deleteUserAccount = async (userIdToRemove: number | null) => {
    if (userIdToRemove) {
      const response = await deleteUserAcountService(userIdToRemove);
      if (response?.error) {
        handleQueryError(response.error);
      }

      handleLogout();
      navigate("/");
      closePanel();
    }
  };

  return { deleteUserAccount, queryError };
};

export default useDeleteUserAccount;
