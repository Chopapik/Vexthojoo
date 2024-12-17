import PostSkeleton from "./PostSkeleton";
import Post from "./Post";
import useListPosts from "../../hooks/useListPosts";
import useRemovePost from "../../hooks/useRemovePost";

import { postDataTypes } from "../../types/posts/postTypes";

const PostsList = ({
  displayByUser,
  enableOptions,
}: {
  displayByUser?: string;
  enableOptions: boolean;
}) => {
  const { loading, postsData, postOpacity } = useListPosts(displayByUser);

  const { setDeleteModeEnable, deleteModeEnable } = useRemovePost();

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
                deleteModeEnable={deleteModeEnable}
                setDeleteModeEnable={setDeleteModeEnable}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default PostsList;
