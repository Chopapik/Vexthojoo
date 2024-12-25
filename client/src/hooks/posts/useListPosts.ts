import { useState, useEffect } from "react";
import { usePostsContext } from "../../context/PostsContext";

const useListPosts = () => {
  const [postOpacity, setPostOpacity] = useState<boolean[]>([]);

  const { handleFetchingPosts, postsData, loading } = usePostsContext();

  useEffect(() => {
    handleFetchingPosts();
  }, []);

  useEffect(() => {
    //Post smooth displaying animation
    postsData.forEach((_, index: number) => {
      setTimeout(() => {
        setPostOpacity((prevState) => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      }, (index + 10) * 20);
    });
  }, [postsData]);

  return { postsData, loading, postOpacity, handleFetchingPosts };
};

export default useListPosts;
