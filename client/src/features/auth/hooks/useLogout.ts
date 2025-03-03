import { useNavigate } from "react-router-dom";
import { useCookieAuthContext } from "../../../context/CookieAuthContext";
import logoutService from "../services/logoutService";
import useHandleQueryError from "../../../hooks/errors/useHandleQueryError";

const useLogout = () => {
  const navigate = useNavigate();

  const { resetAuthData } = useCookieAuthContext();

  const { handleQueryError, queryError } = useHandleQueryError();

  const handleLogout = async () => {
    const response = await logoutService();

    if (response?.error) {
      handleQueryError(response.error);
    } else {
      resetAuthData();
      navigate("/");
    }
  };

  return { handleLogout, queryError };
};

export default useLogout;
