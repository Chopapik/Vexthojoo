import { usePanelContext } from "../../context/PanelContext";
import { useCookieAuthContext } from "../../context/CookieAuthContext";
import Panel from "../shared/panel/Panel";
import { useState, useEffect } from "react";
import useAddPost from "../../hooks/posts/useAddPost";
import { ButtonFuchsiaSm } from "../shared/buttons/ButtonSM/ButtonSM";

import imageIcon from "../../assets/icons/image.svg";

const AddPostPanel = () => {
  const { showPanel, closePanel, visiblePanelId } = usePanelContext();
  const { authData } = useCookieAuthContext();

  const [numberOfLetters, setNumberOfLetters] = useState(0);
  const [blockUpload, setBlockUpload] = useState<boolean>(true);

  const [imagePreview, setImagePreview] = useState<string>("");
  const { handlePostContentData, queryError, handleAddPost } = useAddPost();
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
                <ButtonFuchsiaSm
                  content="LOGOWANIE"
                  onClick={() => {
                    closePanel();
                    showPanel("loginPanel");
                  }}
                />
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

                <div className="relative bg-neutral-700 w-full p-2">
                  <span className="absolute text-red-600 bottom-14 text-sm ">
                    {queryError?.message}
                  </span>
                  <textarea
                    className="bg-transparent w-full h-[100px] outline-none"
                    placeholder="napisz coś głupcze"
                    name="text"
                    onChange={(e) => {
                      setNumberOfLetters(e.target.value.length);
                      handlePostContentData(e);
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
                    <img src={imageIcon} className="w-7" alt="dodaj zdjęcie" />
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
                            handlePostContentData(e);
                            setBlockUpload(false);
                          };
                        }
                      }
                    }}
                  />
                  <div
                    className={`${
                      blockUpload ? "text-red-600" : "text-neutral-100"
                    } text-sm font-bold float-right inline-block`}
                  >
                    <span>{numberOfLetters}</span>
                    <span> / 510</span>
                  </div>
                </div>
              </div>

              <div className="relative w-full flex justify-center mt-10">
                <ButtonFuchsiaSm content="dodaj" onClick={handleAddPost} />
              </div>
            </>
          )}
        </>
      }
    />
  );
};
export default AddPostPanel;
