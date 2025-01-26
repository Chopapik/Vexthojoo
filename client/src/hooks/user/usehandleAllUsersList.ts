import { useEffect, useState } from "react";
import fetchAllUsersService from "../../services/user/fetchAllUsersService";
import useHandleQueryError from "../useHandleQueryError";
import DateTimeFormat from "../../utils/DateTimeFormat";

const useHandleAllUsersList = () => {
  const { handleQueryError } = useHandleQueryError();
  interface userData {
    username: string;
    avatarPath: string;
    whenRegist: string;
    whenLastLogged: string;
    numberOfPostByUser: string;
  }

  const [usersData, setUserData] = useState<userData[] | undefined>(undefined);

  useEffect(() => {
    const handleUserData = async () => {
      const response = await fetchAllUsersService();

      if (response) {
        const { error, usersList } = response;

        console.log(response);

        if (error) {
          handleQueryError(error);
        } else if (usersList) {
          usersList.forEach((user: userData) => {
            user.whenLastLogged = DateTimeFormat(user.whenLastLogged);
            user.whenRegist = DateTimeFormat(user.whenRegist);
          });

          setUserData(usersList);
        }
      }
    };
    handleUserData();
  }, []);

  return { usersData };
};

export default useHandleAllUsersList;
