import { useState } from "react";
import { postDataTypes } from "../../types/posts/postTypes";

const useEditPost = (postsData: postDataTypes[]) => {
  const [editModeEnable, setEditModeEnable] = useState<boolean[]>(
    new Array(postsData.length).fill(false)
  );

  const handleEditModeEnable = (index: number) => {
    setEditModeEnable((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return { editModeEnable, handleEditModeEnable };
};

export default useEditPost;
