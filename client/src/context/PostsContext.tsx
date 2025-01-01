import { useContext, createContext } from "react";
import { postDataTypes } from "../types/posts/postTypes";
import useFetchPost from "../hooks/posts/useFetchPost";
import { ErrorType } from "../types/ErrorType";

interface PostsContextType {
  handleFetchingPosts: (displayByUser?: string) => Promise<void>;
  postsData: postDataTypes[];
  loading: boolean;
  queryError: ErrorType | undefined;
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
