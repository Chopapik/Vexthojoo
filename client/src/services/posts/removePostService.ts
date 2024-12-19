import axios from "axios";

const removePostService = async (postId: number) => {
  await axios.delete(`posts/removePost/${postId}`);
};

export default removePostService;
