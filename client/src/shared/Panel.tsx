import closeIcon from "../assets/icons/close.svg";

const Panel = ({
  content,
  isVisible,
  closePanelFunction,
}: {
  content: React.ReactNode;
  isVisible: boolean;
  closePanelFunction: () => void;
}) => {
  return (
    <>
      {isVisible && (
        <>
          <div className="fixed bg-black w-full h-full flex justify-center opacity-100 z-50" />
          <div className="w-screen h-screen fixed flex justify-center z-50">
            <div className="fixed mt-[4vh] border-l-2 border-b-2 border-neutral-800 bg-neutral-900 text-white min-h-[200px] md:min-w-[350px] w-[300px] px-5 py-10">
              <div className="absolute flex justify-end bg-neutral-600 top-1 right-1 transition-all ease-in duration-2">
                <button
                  className="bg-red-950 w-4 h-4 hover:bg-red-500 transition-all ease-in duration-25"
                  onClick={closePanelFunction}
                >
                  <img src={closeIcon} />
                </button>
              </div>
              {content}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Panel;
