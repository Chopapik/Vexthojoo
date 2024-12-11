import { useState, useEffect } from "react";
import { postDataTypes } from "../../../types/posts/postTypes";
import fetchPostsService from "../../../services/posts/fetchPostsService";
import PostSkeleton from "../PostSkeleton";
import Post from "../Post";

const PostsList = () => {
  const [loading, setLoading] = useState(true);
  const [postsData, setPostsData] = useState<postDataTypes[]>([]);
  const [postOpacity, setPostOpacity] = useState<boolean[]>([]);

  useEffect(() => {
    const handleFetchingposts = async () => {
      const posts = await fetchPostsService();
      setPostsData(posts);
    };
    handleFetchingposts();
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log("odswiezenie");
    const showPost = async (index: number) => {
      setTimeout(() => {
        setPostOpacity((prevState) => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      }, (index + 10) * 20);
    };
    postsData.forEach((_, index: number) => {
      showPost(index);
    });
  });

  return (
    <>
      {loading ? (
        <PostSkeleton />
      ) : (
        <>
          {postsData.map((postData: postDataTypes, index: number) => {
            return (
              <Post
                key={index}
                index={index}
                postData={postData}
                postOpacity={postOpacity}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default PostsList;
