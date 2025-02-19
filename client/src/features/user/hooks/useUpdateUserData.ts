import React, { useEffect, useState } from "react";
import { useCookieAuthContext } from "../../../context/CookieAuthContext";
import updateUserDataService from "../services/updateUserDataService";
import { newUserDataTypes, cookieUserDataTypes } from "../types/userDataTypes";
import { useNavigate } from "react-router-dom";
import { usePanelContext } from "../../../context/PanelContext";
import { usePostsContext } from "../../../context/PostsContext";
import useHandleQueryError from "../../../hooks/errors/useHandleQueryError";

import defaultAvatar from "../../../assets/images/defaultAvatar.png";

const useUpdateUserData = () => {
  const { authData, getUser } = useCookieAuthContext();
  const { closePanel } = usePanelContext();
  const navigate = useNavigate();
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [canSave, setCanSave] = useState<boolean>(false);
  const { handleFetchingPosts } = usePostsContext();

  const [cookieUserData, setCookieUserData] = useState<cookieUserDataTypes>({
    username: authData.username,
    avatarPath: authData.avatarPath || defaultAvatar,
  });

  const [newUserData, setNewUserData] = useState<newUserDataTypes>({
    username: null,
    avatar: null,
  });

  const { handleQueryError, queryError } = useHandleQueryError();

  const handleAvatarPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.type.substring(0, 5) === "image") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setAvatarPreview(reader.result as string);
          setNewUserData({
            ...newUserData,
            avatar: file,
          });
          setCanSave(true);
        };
      }
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserData({
      ...newUserData,
      username: e.target.value,
    });
    if (e.target.value === "" || e.target.value === authData.username) {
      setCanSave(false);
    } else {
      setCanSave(true);
    }
  };

  const handleUserDataUpdate = async () => {
    const newUserDataForm = new FormData();

    if (newUserData.username) {
      newUserDataForm.append("username", newUserData.username);
    }

    if (newUserData.avatar) {
      newUserDataForm.append("avatar", newUserData.avatar);
    }

    const response = await updateUserDataService(newUserDataForm);

    if (response?.error) {
      handleQueryError(response.error);
    } else if (response?.username) {
      {
        if (
          newUserData.username !== undefined &&
          newUserData.username !== null &&
          newUserData.username !== cookieUserData.username
        ) {
          navigate(`/${newUserData.username}`);
        }
        closePanel();
        getUser();
        setNewUserData({ username: null, avatar: null });

        // If no new username is set, posts will be fetched using the current username
        if (authData.username && newUserData.username === null) {
          handleFetchingPosts(authData.username);
        }
      }
    }
  };

  useEffect(() => {
    setCookieUserData({
      username: authData.username || "",
      avatarPath: authData.avatarPath || defaultAvatar,
    });
  }, [authData]);

  return {
    avatarPreview,
    newUserData,
    cookieUserData,
    canSave,
    handleUsernameChange,
    handleAvatarPreview,
    handleUserDataUpdate,
    queryError,
  };
};

export default useUpdateUserData;
