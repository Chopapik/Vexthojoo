import { useState } from "react";
import { postDataTypes } from "../../types/posts/postTypes";
import removePostService from "../../services/posts/removePostService";

const useRemovePost = (
  postsData: postDataTypes[],
  handleFetchingPosts: () => void
) => {
  const [deleteModeEnable, setDeleteModeEnable] = useState<boolean[]>(
    new Array(postsData.length).fill(false)
  );

  const handleDeleteModeEnable = (index: number) => {
    setDeleteModeEnable((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleDeletePost = async (id: number, index: number) => {
    await removePostService(id);
    console.log();
    //After post remove, post delete mode will be reset to false
    setDeleteModeEnable((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    handleFetchingPosts();
  };

  return { deleteModeEnable, handleDeleteModeEnable, handleDeletePost };
};

export default useRemovePost;
