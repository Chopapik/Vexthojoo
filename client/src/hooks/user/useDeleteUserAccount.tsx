import axios from "axios";
import { useNavigate } from "react-router-dom";
import { usePanelContext } from "../../context/PanelContext";
import useLogout from "../auth/useLogout";

const useDeleteUserAccount = () => {
  const navigate = useNavigate();
  const { closePanel } = usePanelContext();
  const { handleLogout } = useLogout();

  const deleteUserAccount = async (userIdToRemove: number | null) => {
    if (userIdToRemove) {
      await axios.delete(`/user/removeUser/${userIdToRemove}`);
      handleLogout();
      navigate("/");
      closePanel();
    }
  };

  return { deleteUserAccount };
};

export default useDeleteUserAccount;
