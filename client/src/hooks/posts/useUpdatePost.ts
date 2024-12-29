import { useState } from "react";
import { postDataTypes } from "../../types/posts/postTypes";
import { postContentToUpdateTypes } from "../../types/posts/postTypes";
import updatePostService from "../../services/posts/updatePostService";
import { usePostsContext } from "../../context/PostsContext";

const useUpdatePost = (postsData: postDataTypes[]) => {
  const { handleFetchingPosts } = usePostsContext();

  //postsData is an array of objects, each object contains data for one post
  //length of postsData array is equal to the number of posts in the list
  //setUpdateModeEnable is an array of boolean values, each value is used to control update mode for one post
  const [updateModeEnable, setUpdateModeEnable] = useState<boolean[]>(
    new Array(postsData.length).fill(false)
  );

  const toggleUpdateMode = (index: number) => {
    setUpdateModeEnable((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const [newPostContentData, setNewPostContentData] =
    useState<postContentToUpdateTypes>({
      newText: undefined,
      newImage: undefined,
    });

  const handleSetNewPostContentData = async ({
    newText,
    newImage,
  }: postContentToUpdateTypes) => {
    if (newText) {
      await setNewPostContentData((prevState) => ({
        ...prevState,
        newText: newText,
      }));
    }
    if (newImage) {
      await setNewPostContentData((prevState) => ({
        ...prevState,
        newImage: newImage,
      }));
    }
  };

  const handleUpdatePost = async (
    postIdToUpdate: number,
    index: number,
    fetchPostsUsername: string
  ) => {
    //Sending newText,newImage useState data to service

    await updatePostService(postIdToUpdate, newPostContentData);
    await handleFetchingPosts(fetchPostsUsername);
    setUpdateModeEnable((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return {
    updateModeEnable,
    toggleUpdateMode,
    handleSetNewPostContentData,
    handleUpdatePost,
  };
};

export default useUpdatePost;
