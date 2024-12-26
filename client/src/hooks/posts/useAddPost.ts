import { useContext, useState } from "react";

import addPostService from "../../services/posts/addPostService";
import { postContentDataTypes } from "../../types/posts/postTypes";
import { PanelContext } from "../../context/PanelContext";
import { usePostsContext } from "../../context/PostsContext";

const useAddPost = () => {
  const { closePanel } = useContext(PanelContext);

  const [addPostError, setAddPostError] = useState<string>("");

  const [postContentData, setPostContentData] = useState<postContentDataTypes>({
    text: "",
    image: undefined,
  });

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
    const errorMessage = await addPostService(postContentData);

    if (errorMessage) {
      setAddPostError(errorMessage);
    } else {
      closePanel();
      handleFetchingPosts();
    }
  };
  return {
    handlePostContentData,
    addPostError,
    handleAddPost,
  };
};

export default useAddPost;
