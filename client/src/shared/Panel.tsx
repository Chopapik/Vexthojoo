import closeIcon from "../assets/icons/close.svg";
import { usePanelContext } from "../context/PanelContext";

const Panel = ({
  content,
  isVisible,
}: {
  content: React.ReactNode;
  isVisible: boolean;
}) => {
  const { closePanel } = usePanelContext();

  return (
    <>
      {isVisible && (
        <>
          <div className="fixed bg-black/80 backdrop-blur-sm w-full h-full flex justify-center z-50" />
          <div className="w-screen h-screen fixed flex justify-center z-50">
            <div className="fixed mt-[4vh] border-t border-neutral-700 bg-neutral-900 rounded-xl text-white min-h-[200px] w-[320px] sm:w-[400px] px-5 py-10">
              <div className="absolute flex justify-end top-1.5 right-1.5 transition-all ease-in duration-2">
                <button
                  className="bg-red-950 border-t-[0.5px] border-red-900 w-5 h-5 hover:border-red-400  hover:bg-red-500 transition-all rounded-md p-0.5 ease-in duration-25"
                  onClick={closePanel}
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
