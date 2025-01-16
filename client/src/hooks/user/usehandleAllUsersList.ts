import { useEffect, useState } from "react";
import fetchAllUsersService from "../../services/user/fetchAllUsersService";
const useHandleAllUsersList = () => {
  interface userData {
    map(
      arg0: (userData: userData) => import("react/jsx-runtime").JSX.Element
    ): import("react").ReactNode;
    username: string;
    avatarPath: string;
  }

  const [usersData, setUserData] = useState<userData | undefined>(undefined);

  useEffect(() => {
    const handleUserData = async () => {
      const response = await fetchAllUsersService();
      setUserData(response?.usersList);
    };

    handleUserData();
  }, []);

  return { usersData };
};

export default useHandleAllUsersList;
