import { usePanelContext } from "../../../../../context/PanelContext";
import { useCookieAuthContext } from "../../../../../context/CookieAuthContext";
import Panel from "../../../../../components/panel/Panel";
import { useEffect, useState } from "react";
import useAddPost from "../../../hooks/useAddPost";
import { ButtonFuchsiaSm } from "../../../../../components/buttons/ButtonSM/ButtonSM";
import SectionButton from "./SectionButton";
import TextIcon from "../../../../../assets/icons/textIcon.svg?react";
import CameraIcon from "../../../../../assets/icons/cameraIcon.svg?react";
import { ImageInput, StringInput } from "./Inputs";
import useSymbolsCount from "../../../../../hooks/useSymbolsCount";

const AddPostPanel = () => {
  const { showPanel, closePanel, visiblePanelId } = usePanelContext();
  const { authData } = useCookieAuthContext();
  const {
    setImage,
    imagePreview,
    setPostData,
    queryError,
    addPost,
    postContentData,
    imageFile,
    removeImagePreview,
  } = useAddPost();

  const [currentStringInputField, setCurrentStringInputField] = useState<
    "text" | "ascii" | "image" | null
  >("text");

  const [currentExtraInputField, setCurrentExtraInputField] = useState<
    "ytVideoLink" | "image" | null
  >("ytVideoLink");

  useEffect(() => {
    if (currentStringInputField === "ascii") {
      setCurrentExtraInputField(null);
    }
  }, [currentStringInputField, currentExtraInputField]);

  const { getSymbolsCount, inputLength, isTooManyCharacters } = useSymbolsCount(
    {
      maxNumber: 1024,
    }
  );
  return (
    <Panel
      isVisible={visiblePanelId === "addPostPanel"}
      title="dodaj post"
      content={
        <>
          {!authData.isLoggedIn ? (
            <div className="flex flex-col items-center space-y-10 ">
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
            <div className="flex flex-col min-w-[270px] w-full items-center space-y-2 max-w-[470px]">
              <div className="flex space-x-1 p-1 bg-[#101010] rounded-xl">
                <SectionButton
                  isActive={currentStringInputField === "text"}
                  onClick={() => setCurrentStringInputField("text")}
                  isBlocked={postContentData.ascii?.length !== 0}
                  icon={<TextIcon />}
                />
                <SectionButton
                  isActive={currentStringInputField === "ascii"}
                  onClick={() => setCurrentStringInputField("ascii")}
                  isBlocked={postContentData.text?.length !== 0}
                  label="ASCII"
                />
              </div>
              {currentStringInputField === "text" && (
                <StringInput
                  placeholder="Napisz coś"
                  onChange={(e) => {
                    setPostData(e, "text");
                    getSymbolsCount(e);
                  }}
                />
              )}
              {currentStringInputField === "ascii" && (
                <StringInput
                  placeholder="ASCII"
                  onChange={(e) => setPostData(e, "ascii")}
                />
              )}
              {currentExtraInputField === "image" && (
                <ImageInput
                  onChange={(e) => setImage(e)}
                  imagePreview={imagePreview}
                  imageFile={imageFile}
                  removeImagePreview={removeImagePreview}
                />
              )}
              <div className="w-full  flex flex-col sm:flex-row sm:space-y-0 space-y-4 sm:justify-between items-center relative">
                <div className="flex flex-col space-y-2 w-[130px]">
                  <div className="flex justify-center p-1 bg-[#101010] rounded-xl w-full items-center h-[38px]">
                    <SectionButton
                      isActive={currentExtraInputField === "image"}
                      isBlocked={currentStringInputField === "ascii"}
                      onClick={() => {
                        if (currentExtraInputField === "image") {
                          setCurrentExtraInputField(null);
                        } else {
                          setCurrentExtraInputField("image");
                        }
                      }}
                      icon={<CameraIcon />}
                    />
                  </div>
                  <div
                    className={`flex justify-center p-1  rounded-xl w-full items-center font-poppins text-xs h-[38px]
                    ${
                      isTooManyCharacters
                        ? "text-red-600 bg-[#390000]"
                        : "text-white bg-[#101010]"
                    }`}
                  >
                    {inputLength}/1024
                  </div>
                </div>
                <ButtonFuchsiaSm content="dodaj post" onClick={addPost} />
                {queryError && (
                  <span className="absolute text-xs right-0 top-0 text-red-600 ">
                    {queryError.message}
                  </span>
                )}
              </div>
            </div>
          )}
        </>
      }
    />
  );
};

export default AddPostPanel;
