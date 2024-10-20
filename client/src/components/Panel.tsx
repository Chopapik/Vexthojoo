const Panel = ({ isVisible, content, closePanel }) => {
  return (
    <>
      {isVisible && (
        <>
          <div className="absolute bg-black w-full h-full flex justify-center opacity-80" />
          <div className="w-screen h-screen fixed flex justify-center">
            <div className="fixed mt-[300px] min-h-[200px] min-w-[200px] bg-neutral-800 p-5">
              <button
                className="text-white absolute top-0 right-2"
                onClick={closePanel}
              >
                x
              </button>
              {content}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Panel;
