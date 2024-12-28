import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookieAuthContext } from "../../context/CookieAuthContext";

const useLogout = () => {
  const navigate = useNavigate();

  const { resetAuthData } = useCookieAuthContext();

  const handleLogout = async () => {
    try {
      await axios.get("/cookieAuth/removeAuthCookie");
      resetAuthData();

      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return { handleLogout };
};

export default useLogout;
