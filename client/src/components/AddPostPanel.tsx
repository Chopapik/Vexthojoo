import React, { useEffect, useState, useContext } from "react";
import Panel from "./Panel";
import axios from "axios";
import { CookieAuthContext } from "../context/CookieAuthContext";
import { PanelContext } from "../context/PanelContext";

const AddPostPanel = ({
  visiblePanelId,
  closePanelFunction,
}: {
  visiblePanelId: string | null;
  closePanelFunction: () => void;
}) => {
  const cookieAuthContext = useContext(CookieAuthContext);
  const { authData } = cookieAuthContext;

  const panelContext = useContext(PanelContext);
  const { closePanel, showPanel } = panelContext;

  const [numberOfLetters, setNumberOfLetters] = useState(0);
  const [numberOfLettersStyle, setnumberOfLettersStyle] =
    useState("text-gray-400");
  const [addPostErr, setPostErr] = useState("");

  useEffect(() => {
    if (numberOfLetters > 510) {
      setnumberOfLettersStyle("text-red-600 ");
    } else {
      setnumberOfLettersStyle("text-gray-400");
    }
  }, [numberOfLetters]);

  const [postData, setPostData] = useState({ text: "", picturePath: "" });

  const addPost = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      await axios.post("/posts/addPost", postData);
      closePanelFunction();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response) {
        const { message } = err.response.data;
        setPostErr(message);
      }
    }
  };

  return (
    <Panel
      closePanelFunction={closePanelFunction}
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
                      setPostData({ ...postData, text: e.target.value });
                    }}
                  ></textarea>
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
                      setPostData({
                        ...postData,
                        picturePath: e.target.value,
                      });
                    }}
                  />
                  <div
                    className={`${numberOfLettersStyle} text-sm font-bold float-right inline-block`}
                  >
                    <span>{numberOfLetters}</span>
                    <span> / 510</span>
                  </div>
                  <div className="absolute text-red-600">{addPostErr}</div>
                </div>
              </div>
              <div className="w-full flex justify-center mt-10">
                <button
                  className="button01 bg-fuchsia-500 hover:shadow-button01 hover:shadow-fuchsia-500"
                  onClick={addPost}
                >
                  dodaj chłopie
                </button>
              </div>
            </>
          )}
        </>
      }
    />
  );
};

export default AddPostPanel;
