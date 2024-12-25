import { useContext, useState } from "react";

import addPostService from "../../services/posts/addPostService";
import { postContentDataTypes } from "../../types/posts/postTypes";
import { PanelContext } from "../../context/PanelContext";

const useAddPost = () => {
  const { closePanel } = useContext(PanelContext);

  const [addPostError, setAddPostError] = useState<string>("");

  const [postContentData, setPostContentData] = useState<postContentDataTypes>({
    text: "",
    image: undefined,
  });

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
    }
  };
  return {
    handlePostContentData,
    addPostError,
    handleAddPost,
  };
};

export default useAddPost;
