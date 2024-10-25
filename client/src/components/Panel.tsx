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
          <div className="absolute bg-black w-full h-full flex justify-center opacity-80" />
          <div className="w-screen h-screen fixed flex justify-center">
            <div className="fixed mt-[5%] pl-[2px] pb-[2px] flex justify-end bg-neutral-700">
              <div className="bg-neutral-800 text-white min-h-[200px] w-[300px] md:min-w-[450px] px-4 py-4">
                <div className="absolute flex justify-end bg-neutral-600 top-1 right-1 transition-all ease-in duration-2">
                  <button
                    className="bg-neutral-700 w-4 h-4 hover:bg-red-500 transition-all ease-in duration-25"
                    onClick={closePanelFunction}
                  >
                    <img src="/icons/close.svg" />
                  </button>
                </div>
                {content}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Panel;
