import { usePanelContext } from "../../../context/PanelContext";
import { useCookieAuthContext } from "../../../context/CookieAuthContext";
import Panel from "../../../components/panel/Panel";
import { useState } from "react";
import useAddPost from "../hooks/useAddPost";
import { ButtonFuchsiaSm } from "../../../components/buttons/ButtonSM/ButtonSM";

import imageIcon from "../../../assets/icons/forwardIcon.svg";

const AddPostPanel = () => {
  const { showPanel, closePanel, visiblePanelId } = usePanelContext();
  const { authData } = useCookieAuthContext();
  const { setImage, imagePreview, setPostData, queryError, addPost } =
    useAddPost();

  const [currentField, setCurrentField] = useState<
    "text" | "ascii" | "image" | null
  >(null);

  return (
    <Panel
      isVisible={visiblePanelId === "addPostPanel"}
      title="dodaj post"
      content={
        <>
          {!authData.isLoggedIn ? (
            <div className="flex flex-col items-center space-y-10">
              <div className="flex flex-col items-center">
                <span>Musisz być zalogowany, aby dodać post</span>
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
          ) : (
            <div className="space-y-10 bg-gray-800">
              <div>
                <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
                  IN DEVELOPMENT
                </span>
                <hr className="border-neutral-500 w-3/4" />
              </div>

              <div className="relative bg-neutral-700 w-full p-2 ">
                {queryError && (
                  <span className="absolute text-red-600 bottom-14 text-sm">
                    {queryError.message}
                  </span>
                )}

                {currentField === "text" && (
                  <textarea
                    className="bg-transparent w-full h-[100px] outline-none"
                    placeholder="napisz coś głupcze"
                    name="text"
                    onChange={(e) => setPostData(e, "text")}
                  ></textarea>
                )}

                {currentField === "ascii" && (
                  <textarea
                    className="bg-transparent w-full h-[100px] outline-none"
                    placeholder={`Atari Controller
     []  ,----.___
   __||_/___      '.
  / O||    /|       )
 /   ""   / /   =._/
/________/ /
|________|/   dew`}
                    name="ascii"
                    onChange={(e) => {
                      setPostData(e, "ascii");
                      console.log(e.target.value);
                    }}
                  ></textarea>
                )}
              </div>

              {currentField === "image" && (
                <div className="p-10 w-full flex justify-center">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="podgląd"
                      className="object-scale-down border-2 border-neutral-600 max-w-[200px]"
                    />
                  )}
                </div>
              )}

              {currentField === "image" && (
                <div className="flex justify-center">
                  <label htmlFor="image" className="text-sm cursor-pointer">
                    <img src={imageIcon} className="w-7" alt="dodaj zdjęcie" />
                  </label>
                  <input
                    id="image"
                    type="file"
                    className="hidden"
                    name="image"
                    onChange={(e) => setImage(e)}
                  />
                </div>
              )}

              <div className="flex space-x-4">
                <button onClick={() => setCurrentField("text")}>Text</button>
                <button onClick={() => setCurrentField("ascii")}>ASCII</button>
                <button onClick={() => setCurrentField("image")}>Image</button>
              </div>

              <div className="relative w-full flex justify-center mt-10">
                <ButtonFuchsiaSm content="dodaj" onClick={addPost} />
              </div>
            </div>
          )}
        </>
      }
    />
  );
};

export default AddPostPanel;
