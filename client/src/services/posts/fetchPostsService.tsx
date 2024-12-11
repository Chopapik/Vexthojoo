import axios from "axios";
import DateTimeFormat from "../../utils/DateTimeFormat";

const fetchPostsService = async () => {
  const response = await axios.get("/posts/printAllPosts");

  const posts = response.data;

  posts.forEach((post: { whenUpload: string }) => {
    post.whenUpload = DateTimeFormat(post.whenUpload);
  });
  return posts;
};

export default fetchPostsService;
