import { useContext } from "react";
import { PanelContext } from "../../../context/PanelContext";
import { CookieAuthContext } from "../../../context/CookieAuthContext";
import { addPostPanelTypes } from "../../../types/posts/postTypes";
import Panel from "../../../shared/Panel";
import { useState, useEffect } from "react";

const AddPostPanel = ({
  setPostContentData,
  postContentData,
  addPostFunction,
  addPostError,
}: addPostPanelTypes) => {
  const { showPanel, closePanel, visiblePanelId } = useContext(PanelContext);
  const { authData } = useContext(CookieAuthContext);

  const [numberOfLetters, setNumberOfLetters] = useState(0);
  const [blockUpload, setBlockUpload] = useState<boolean>(true);

  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    if (numberOfLetters > 510) {
      setBlockUpload(true);
    } else if (numberOfLetters === 0) {
      setBlockUpload(true);
    } else {
      setBlockUpload(false);
    }
  }, [numberOfLetters]);

  return (
    <Panel
      closePanelFunction={closePanel}
      isVisible={visiblePanelId === "addPostPanel"}
      content={
        <>
          {!authData.isLoggedIn ? (
            <>
              <div className="flex flex-col items-center space-y-10">
                <div className="flex flex-col items-center">
                  <span>Musisz być zalogowany aby dodać post</span>

                  <span>__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.___</span>
                </div>
                <button
                  className="button01 bg-fuchsia-500 hover:shadow-button01 hover:shadow-fuchsia-500"
                  onClick={() => {
                    closePanel();
                    showPanel("loginPanel");
                  }}
                >
                  LOGOWANIE
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-10">
                <div>
                  <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
                    DODAJ P0ST
                  </span>
                  <hr className="border-neutral-500 w-3/4" />
                </div>

                <div className="bg-neutral-700 w-full p-2">
                  <textarea
                    className="bg-transparent w-full h-[200px] outline-none"
                    placeholder="napisz coś głupcze"
                    name="text"
                    onChange={(e) => {
                      setNumberOfLetters(e.target.value.length);
                      setPostContentData({
                        ...postContentData,
                        text: e.target.value,
                      });
                    }}
                  ></textarea>
                  <div className="p-10 w-full flex justify-center">
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt=""
                        className="object-scale-down border-2 border-neutral-600 "
                      />
                    )}
                  </div>
                  <label
                    htmlFor="image"
                    className="text-sm cursor-pointer inline-block"
                  >
                    <img
                      src="./icons/image.svg"
                      className="w-7"
                      alt="dodaj zdjęcie"
                    />
                  </label>

                  <input
                    id="image"
                    type="file"
                    className="hidden"
                    name="image"
                    onChange={(e) => {
                      if (e.target.files) {
                        const file = e.target.files[0];

                        if (file.type.substring(0, 5) === "image") {
                          const reader = new FileReader();

                          reader.readAsDataURL(file);

                          reader.onload = () => {
                            setImagePreview(reader.result as string);
                            setPostContentData({
                              ...postContentData,
                              image: file,
                            });
                            setBlockUpload(false);
                            console.log(postContentData);
                          };
                        }
                      }
                    }}
                  />
                  <div
                    className={`${
                      blockUpload ? "text-red-500" : "text-neutral-100"
                    } text-sm font-bold float-right inline-block`}
                  >
                    <span>{numberOfLetters}</span>
                    <span> / 510</span>
                  </div>
                  <div className="absolute text-red-600">{addPostError}</div>
                </div>
              </div>
              <div className="w-full flex justify-center mt-10">
                {blockUpload ? (
                  <button className="button01 bg-gray-500">
                    dodaj chłopie
                  </button>
                ) : (
                  <button
                    className="button01 bg-fuchsia-500 hover:shadow-button01 hover:shadow-fuchsia-500"
                    onClick={addPostFunction}
                  >
                    dodaj chłopie
                  </button>
                )}
              </div>
            </>
          )}
        </>
      }
    />
  );
};
export default AddPostPanel;
