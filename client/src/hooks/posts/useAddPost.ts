import { useState } from "react";
import addPostService from "../../services/posts/addPostService";
import { postContentDataTypes } from "../../types/posts/postTypes";
import { usePanelContext } from "../../context/PanelContext";
import { usePostsContext } from "../../context/PostsContext";
import useHandleQueryError from "../useHandleQueryError";

const useAddPost = () => {
  const { closePanel } = usePanelContext();

  const [postContentData, setPostContentData] = useState<postContentDataTypes>({
    text: "",
    image: undefined,
  });

  const { handleQueryError, queryError } = useHandleQueryError();

  const { handleFetchingPosts } = usePostsContext();

  const handlePostContentData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    setPostContentData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAddPost = async () => {
    const response = await addPostService(postContentData);

    if (response?.error) {
      handleQueryError(response.error);
    } else {
      closePanel();
      handleFetchingPosts();
    }
  };
  return {
    handlePostContentData,
    queryError,
    handleAddPost,
  };
};

export default useAddPost;
