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
            className="bg-neutral-800 border w-full px-5 py-2 min-h-[200px] border-neutral-600 outline-none"
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
          <p className="text-sm">{text}</p>
        </div>
      )}
      {imagePath ? (
        <div className="w-full flex justify-center">
          <img
            src={imagePath}
            className="w-[300px] md:w-4/6  border-l-4 border-b-4 border-neutral-700"
            loading="lazy"
          />
        </div>
      ) : null}
    </>
  );
};
export default PostContent;
