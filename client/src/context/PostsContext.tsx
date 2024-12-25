import { useContext, createContext } from "react";
import { postDataTypes } from "../types/posts/postTypes";
import { useState } from "react";
import fetchPostsService from "../services/posts/fetchPostsService";

interface PostsContextType {
  handleFetchingPosts: (displayByUser?: string) => Promise<void>;
  postsData: postDataTypes[];
  loading: boolean;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePostsContext must be used within a PostsProvider");
  }

  return context;
};

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [postsData, setPostsData] = useState<postDataTypes[]>([]);

  const handleFetchingPosts = async (displayByUser?: string) => {
    const posts = await fetchPostsService();

    if (displayByUser) {
      const postsByUser = posts.filter(
        (post: postDataTypes) => post.username === displayByUser
      );
      setPostsData(postsByUser);
    } else {
      setPostsData(posts);
    }

    setLoading(false);
  };

  return (
    <PostsContext.Provider value={{ handleFetchingPosts, postsData, loading }}>
      {children}
    </PostsContext.Provider>
  );
};
