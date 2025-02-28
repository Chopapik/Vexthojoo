import { useState } from "react";
import addPostService from "../services/addPostService";
import { postContentDataTypes } from "../types/postTypes";
import { usePanelContext } from "../../../context/PanelContext";
import { usePostsContext } from "../../../context/PostsContext";
import useHandleQueryError from "../../../hooks/errors/useHandleQueryError";

const useAddPost = () => {
  const { closePanel } = usePanelContext();
  const [imagePreview, setImagePreview] = useState<string>("");
  const [postContentData, setPostContentData] = useState<postContentDataTypes>({
    text: "",
    ascii: "",
    ytVideoLink: "",
  });

  const [imageFile, setImageFile] = useState<File | undefined>(undefined);

  const { handleQueryError, queryError } = useHandleQueryError();

  const { handleFetchingPosts } = usePostsContext();

  const setImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      if (file.type.substring(0, 5) === "image") {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
          setImagePreview(reader.result as string);
          setImageFile(file);
        };
      }
    }
  };

  const setPostData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: "text" | "ascii" | "ytVideoLink"
  ) => {
    setPostContentData({ ...postContentData, [name]: e.target.value });
  };

  const addPost = async () => {
    const formData = new FormData();

    const { text, ascii, ytVideoLink } = postContentData;

    if (text) formData.append("text", text);
    if (ascii) formData.append("ascii", ascii);
    if (ytVideoLink) formData.append("ytVideoLink", ytVideoLink);
    if (imageFile) formData.append("image", imageFile);

    const response = await addPostService(formData);
    if (response?.error) {
      handleQueryError(response.error);
    } else {
      closePanel();
      handleFetchingPosts();
      setPostContentData({ text: "", ascii: "", ytVideoLink: "" });
    }
  };

  return { setImage, imagePreview, setPostData, queryError, addPost };
};

export default useAddPost;
