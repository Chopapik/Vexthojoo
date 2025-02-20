import closeIcon from "../../assets/icons/closeIcon.svg";
import PanelTitle from "./PanelTitle";
import { usePanelContext } from "../../context/PanelContext";
const Panel = ({
  content,
  isVisible,
  title,
}: {
  content: React.ReactNode;
  isVisible: boolean;
  title?: string;
}) => {
  const { closePanel } = usePanelContext();

  return (
    <>
      {isVisible && (
        <>
          <div className="fixed bg-black/80 backdrop-blur-sm w-full h-full flex justify-center z-50" />
          <div className="w-screen h-screen fixed flex justify-center z-50">
            <div className="sticky my-[4vh] overflow-auto border-t max-h-[100vh]  border-neutral-700 bg-neutral-900 rounded-xl text-white min-h-[200px] max-w-[300px] sm:max-w-none xs:min-w-[400px] p-4 h-fit">
              <div className="absolute flex justify-end  top-1.5 right-1.5 transition-all ease-in duration-2">
                <button
                  className="bg-red-950 border-t-[0.5px] border-red-900 w-5 h-5 hover:border-red-400  hover:bg-red-500 transition-all rounded-md p-0.5 ease-in duration-25"
                  onClick={closePanel}
                >
                  <img src={closeIcon} />
                </button>
              </div>
              {title && <PanelTitle title={title} />}
              <div className="mt-4">{content}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Panel;
