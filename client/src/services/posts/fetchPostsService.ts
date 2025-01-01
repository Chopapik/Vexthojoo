import axios, { AxiosError } from "axios";
import DateTimeFormat from "../../utils/DateTimeFormat";

const fetchPostsService = async () => {
  try {
    const response = await axios.get("/posts/printAllPosts");

    const posts = response.data;

    posts.forEach((post: { whenUpload: string }) => {
      post.whenUpload = DateTimeFormat(post.whenUpload);
    });

    return { posts: posts };
  } catch (error) {
    if (error instanceof AxiosError)
      return {
        error: {
          status: error.response?.status,
          message:
            error.response?.data.message || ("Nieznany błąd serwera" as string),
        },
      };
  }
};
export default fetchPostsService;
