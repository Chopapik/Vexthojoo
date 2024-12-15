import { useState, useEffect } from "react";
import { postDataTypes } from "../../types/posts/postTypes";
import fetchPostsService from "../../services/posts/fetchPostsService";
import PostSkeleton from "./PostSkeleton";
import Post from "./Post";

const PostsList = ({
  displayByUser,
  enableOptions,
}: {
  displayByUser?: string;
  enableOptions: boolean;
}) => {
  const [loading, setLoading] = useState(true);
  const [postsData, setPostsData] = useState<postDataTypes[]>([]);
  const [postOpacity, setPostOpacity] = useState<boolean[]>([]);

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
  }, []);

  useEffect(() => {
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
                enableOptions={enableOptions}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default PostsList;
