import { useState, useEffect, useContext } from "react";
import fetchPostsService from "../services/posts/fetchPostsService";
import { CookieAuthContext } from "../context/CookieAuthContext";
import { postDataTypes } from "../types/posts/postTypes";

const useListPosts = (displayByUser?: string) => {
  const [loading, setLoading] = useState(true);
  const [postsData, setPostsData] = useState<postDataTypes[]>([]);
  const [postOpacity, setPostOpacity] = useState<boolean[]>([]); //postOpacity[] contains boolean information for every post and is use for printing animation

  const { getUser } = useContext(CookieAuthContext);

  useEffect(() => {
    const handleFetchingPosts = async () => {
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
    handleFetchingPosts();
  }, [getUser]);

  useEffect(() => {
    //printing posts animation
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

  return { postsData, loading, postOpacity };
};

export default useListPosts;
