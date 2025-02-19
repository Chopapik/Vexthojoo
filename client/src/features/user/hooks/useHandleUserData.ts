import { useEffect, useState } from "react";

import fetchUserDataService from "../services/fetchUserDataService";
import { UserDataTypes } from "../types/userDataTypes";
import DateTimeFormat from "../../../utils/DateTimeFormat";
import { useCookieAuthContext } from "../../../context/CookieAuthContext";
import useHandleQueryError from "../../../hooks/errors/useHandleQueryError";

const useDisplayUserData = (username: string) => {
  const [userData, setUserData] = useState<UserDataTypes>({
    username: "",
    whenLastLogged: "",
    whenRegist: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const { handleQueryError, queryError } = useHandleQueryError();

  const [canEdit, setCanEdit] = useState<boolean>(false);

  const { authData } = useCookieAuthContext();

  useEffect(() => {
    const handleFetchUserData = async (username: string) => {
      const response = await fetchUserDataService(username);

      if (response?.error) {
        handleQueryError(response.error);
        console.log(response);
      } else if (response?.userData) {
        const { userData } = response;

        userData.whenLastLogged = DateTimeFormat(userData.whenLastLogged);
        userData.whenRegist = DateTimeFormat(userData.whenRegist);
        setCanEdit(userData.username === authData.username);
        setUserData(userData);
        console.log(userData);
        setLoading(false);
      }
    };
    handleFetchUserData(username);
  }, [authData, loading, canEdit, username]);

  useEffect(() => {});

  return { userData, loading, canEdit, queryError };
};

export default useDisplayUserData;
