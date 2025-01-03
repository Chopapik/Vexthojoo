import { postContentToUpdateTypes } from "../../../types/posts/postTypes";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

const PostContent = ({
  text,
  imagePath,
  updateModeEnable,
  handleSetNewPostContentData,
  setBlockUpdate,
  blockUpdate,
}: {
  id: number;
  text: string;
  imagePath?: string;
  updateModeEnable: boolean;
  handleSetNewPostContentData: ({
    newText,
    newImage,
  }: postContentToUpdateTypes) => void;
  setBlockUpdate: Dispatch<SetStateAction<boolean>>;
  blockUpdate: boolean;
}) => {
  const [numberOfLetters, setNumberOfLetters] = useState(
    text ? text.length : 0
  );

  useEffect(() => {
    if (numberOfLetters > 510) {
      setBlockUpdate(true);
    } else {
      setBlockUpdate(false);
    }
  }, [numberOfLetters]);

  return (
    <>
      {updateModeEnable ? (
        <>
          <textarea
            defaultValue={text}
            className="bg-neutral-800 border min-w-[50vw] px-5 py-2 border-neutral-600 outline-none"
            onChange={(e) => {
              setNumberOfLetters(e.target.value.length);
              handleSetNewPostContentData({
                newText: e.target.value,
              });
            }}
          />
          <div
            className={`${
              blockUpdate ? "text-red-600" : "text-neutral-100"
            } text-sm font-bold float-right inline-block`}
          >
            <span>{numberOfLetters}</span>
            <span> / 510</span>
          </div>
        </>
      ) : (
        <div className="max-w-[90%] overflow-hidden">
          <p className="text-md">{text}</p>
        </div>
      )}
      {imagePath ? (
        <img
          src={imagePath}
          className="min-w-full md:min-w-0 md:w-[50%] border-l border-b border-neutral-700"
        />
      ) : null}
    </>
  );
};
export default PostContent;
