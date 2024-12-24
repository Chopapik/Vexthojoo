import { useContext } from "react";
import { PanelContext } from "../../../context/PanelContext";
import { CookieAuthContext } from "../../../context/CookieAuthContext";
import Panel from "../../../shared/Panel";
import { useState, useEffect } from "react";
import useAddPost from "../../../hooks/posts/useAddPost";
import Button01 from "../../buttons/Button01";

import imageIcon from "../../../assets/icons/image.svg";

const AddPostPanel = () => {
  const { showPanel, closePanel, visiblePanelId } = useContext(PanelContext);
  const { authData } = useContext(CookieAuthContext);

  const [numberOfLetters, setNumberOfLetters] = useState(0);
  const [blockUpload, setBlockUpload] = useState<boolean>(true);

  const [imagePreview, setImagePreview] = useState<string>("");
  const { setPostContentData, postContentData, addPostError, handleAddPost } =
    useAddPost();
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
                <Button01
                  color="bg-fuchsia-500"
                  shadowColor="fuchsia"
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
                      blockUpload ? "text-red-600" : "text-neutral-100"
                    } text-sm font-bold float-right inline-block`}
                  >
                    <span>{numberOfLetters}</span>
                    <span> / 510</span>
                  </div>
                  <div className="absolute text-red-600">{addPostError}</div>
                </div>
              </div>
              <div className="w-full flex justify-center mt-10">
                <Button01
                  disableButton={blockUpload}
                  color="bg-fuchsia-500"
                  shadowColor="fuchsia"
                  content="dodaj debilu"
                  onClick={handleAddPost}
                />
              </div>
            </>
          )}
        </>
      }
    />
  );
};
export default AddPostPanel;
