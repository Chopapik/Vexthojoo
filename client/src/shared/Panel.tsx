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
          <div className="fixed bg-black/80 backdrop-blur-sm w-full h-full flex justify-center z-[998]" />
          <div className="w-screen h-screen fixed flex justify-center z-[999]">
            <div className="fixed mt-[4vh] customBorderNeutral bg-neutral-900 text-white min-h-[200px] md:min-w-[350px] px-5 py-10">
              <div className="absolute flex justify-end bg-neutral-600 top-1 right-1 transition-all ease-in duration-2">
                <button
                  className="bg-red-950 w-5 h-5 md:w-4 md:h-4 hover:bg-red-500 transition-all ease-in duration-25"
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
