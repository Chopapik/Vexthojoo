import { useContext, createContext } from "react";
import { postDataTypes } from "../features/posts/types/postTypes";
import useFetchPost from "../features/posts/hooks/useFetchPost";
import { errorType } from "../types/errorType";

interface PostsContextType {
  handleFetchingPosts: (displayByUser?: string) => Promise<void>;
  postsData: postDataTypes[];
  loading: boolean;
  queryError: errorType | undefined;
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
  const { handleFetchingPosts, loading, postsData, queryError } =
    useFetchPost();

  return (
    <PostsContext.Provider
      value={{ handleFetchingPosts, loading, postsData, queryError }}
    >
      {children}
    </PostsContext.Provider>
  );
};
