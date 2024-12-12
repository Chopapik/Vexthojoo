import AddPostPanel from "./AddPostPanel";
import addPostService from "../../../services/posts/addPostService";
import { postContentDataTypes } from "../../../types/posts/postTypes";
import { useContext, useState } from "react";
import { PanelContext } from "../../../context/PanelContext";

const AddPostContainer = () => {
  const { closePanel } = useContext(PanelContext);

  const [addPostError, setAddPostError] = useState<string>("");

  const [postContentData, setPostContentData] = useState<postContentDataTypes>({
    text: "",
    image: undefined,
  });

  const handleAddPost = async () => {
    const errorMessage = await addPostService(postContentData);

    if (errorMessage) {
      setAddPostError(errorMessage);
    } else {
      closePanel();
    }
  };
  return (
    <AddPostPanel
      setPostContentData={setPostContentData}
      postContentData={postContentData}
      addPostError={addPostError}
      addPostFunction={handleAddPost}
    />
  );
};

export default AddPostContainer;
