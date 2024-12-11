import { postTypes } from "../../types/posts/postTypes";

const Post = ({ index, postData, postOpacity }: postTypes) => {
  return (
    <>
      <div
        key={index}
        className={`w-full bg-neutral-900 p-5 space-y-4 ${
          postOpacity[index] ? "opacity-100" : "opacity-0"
        } transition-all ease-linear duration-200`}
      >
        <div className="flex flex-row space-x-2">
          <div className=" w-14 h-14 border border-neutral-600 ">
            <a href={`/${postData.username}`}>
              <img
                src={postData.avatar ? postData.avatar : "./defaultAvatar.png"}
                alt="Avatar"
                className="w-14 h-14 object-cover"
              />
            </a>
          </div>
          <div>
            <p className="text-sm font-bold">{postData.username}</p>
            <p className="text-xs text-neutral-500">{postData.whenUpload}</p>
            <p className="text-xs text-cyan-400">
              Uploaded from {postData.whatDevice}
            </p>
          </div>
        </div>
        <p className="text-md">{postData.TEXT}</p>
        {postData.imagePath ? (
          <img
            src={postData.imagePath}
            className="min-w-[25%] max-w-[55%]"
          ></img>
        ) : null}
      </div>
    </>
  );
};

export default Post;
