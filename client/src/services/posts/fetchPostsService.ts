import axios, { AxiosError } from "axios";
import DateTimeFormat from "../../utils/DateTimeFormat";
import handleResponseErrors from "../../utils/handleResponseErrors";

const fetchPostsService = async () => {
  try {
    const response = await axios.get("/posts/printAllPosts");

    const posts = response.data;

    posts.forEach((post: { whenUpload: string }) => {
      post.whenUpload = DateTimeFormat(post.whenUpload);
    });

    return { posts: posts };
  } catch (err) {
    if (err instanceof AxiosError) {
      const error = handleResponseErrors(err);
      console.log(error);
      return { error: error };
    }
  }
};

export default fetchPostsService;
