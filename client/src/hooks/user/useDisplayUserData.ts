import { useContext, useEffect, useState } from "react";
import fetchUserDataService from "../../services/user/fetchUserDataService";
import { UserDataTypes } from "../../types/user/userDataTypes";
import DateTimeFormat from "../../utils/DateTimeFormat";
import { CookieAuthContext } from "../../context/CookieAuthContext";

const useDisplayUserData = (username: string) => {
  const [userData, setUserData] = useState<UserDataTypes>({
    username: "",
    whenLastLogged: "",
    whenRegist: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorContent, setErrorContent] = useState<{
    message?: string;
    notFoundUsername?: string;
    status?: number;
  }>({
    message: undefined,
    notFoundUsername: undefined,
    status: undefined,
  });
  const [canEdit, setCanEdit] = useState<boolean>(false);

  const { authData } = useContext(CookieAuthContext);

  useEffect(() => {
    const handleFetchUserData = async (username: string) => {
      const response = await fetchUserDataService(username);

      if (response) {
        const { fetchUserData, fetchUserError } = response;

        if (fetchUserError) {
          setErrorContent(fetchUserError);
          setError(true);
        } else {
          fetchUserData.whenLastLogged = DateTimeFormat(
            fetchUserData.whenLastLogged
          );
          fetchUserData.whenRegist = DateTimeFormat(fetchUserData.whenRegist);

          setCanEdit(fetchUserData.username === authData.username);
          setUserData(fetchUserData);
          setLoading(false);
          setError(false);
        }
      }
    };
    handleFetchUserData(username);
  }, [authData, loading, canEdit, username]);

  useEffect(() => {});

  return { userData, loading, canEdit, error, errorContent };
};

export default useDisplayUserData;
