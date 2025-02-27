import { postContentDataTypes } from "../../../types/postTypes";

const PostContent = ({
  postData,
  isEditModeActive,
  setNewPostData,
}: {
  postData: postContentDataTypes;
  isEditModeActive: boolean;
  setNewPostData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: "text" | "ascii" | "ytVideoLink"
  ) => void;
}) => {
  const { text, imagePath } = postData;

  return (
    <div className="p-2 space-y-4 ">
      {isEditModeActive ? (
        <>
          <textarea
            defaultValue={text}
            className="border-l-2 border-b-2 bg-neutral-600 border-neutral-800 w-full px-5 py-2 min-h-[200px] outline-none"
            onChange={(e) => {
              setNewPostData(e, "text");
            }}
          />
        </>
      ) : (
        <div className=" overflow-hidden">
          <p className="text-base">{text}</p>
        </div>
      )}
      {imagePath ? (
        <div className="w-full flex justify-self-center justify-center min-h-[200px] min-w-[200px] max-h-[500px] max-w-[500px] rounded-xl">
          <img
            src={imagePath}
            className="w-[300px] md:w-4/6 rounded-xl fill-current object-contain"
            loading="lazy"
          />
        </div>
      ) : null}
    </div>
  );
};

export default PostContent;
