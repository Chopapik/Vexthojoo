import { postContentToUpdateTypes } from "../../../types/posts/postTypes";

const PostContent = ({
  text,
  imagePath,
  updateModeEnable,
  handleSetNewPostContentData,
}: {
  id: number;
  text: string;
  imagePath?: string;
  updateModeEnable: boolean;
  handleSetNewPostContentData: ({
    newText,
    newImage,
  }: postContentToUpdateTypes) => void;
}) => {
  return (
    <>
      {updateModeEnable ? (
        <textarea
          defaultValue={text}
          className="bg-neutral-800 border min-w-[50vw] px-5 py-2 border-neutral-600 outline-none"
          onChange={(e) =>
            handleSetNewPostContentData({
              newText: e.target.value,
            })
          }
        />
      ) : (
        <p className="text-md">{text}</p>
      )}
      {imagePath ? (
        <img
          src={imagePath}
          className="min-w-[25%] max-w-[55%] border-l border-b border-neutral-700"
        />
      ) : null}
    </>
  );
};
export default PostContent;
