import { useState } from "react";
import { postDataTypes } from "../../types/posts/postTypes";
import removePostService from "../../services/posts/removePostService";
import { usePostsContext } from "../../context/PostsContext";

const useRemovePost = (postsData: postDataTypes[]) => {
  const [deleteModeEnable, setDeleteModeEnable] = useState<boolean[]>(
    new Array(postsData.length).fill(false)
  );

  const { handleFetchingPosts } = usePostsContext();

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
