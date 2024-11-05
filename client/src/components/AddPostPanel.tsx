import Panel from "./Panel";

const AddPostPanel = ({
  visiblePanelId,
  closePanelFunction,
}: {
  visiblePanelId: string | null;
  closePanelFunction: () => void;
}) => {
  return (
    <Panel
      closePanelFunction={closePanelFunction}
      isVisible={visiblePanelId === "addPostPanel"}
      content={
        <>
          <form>
            <div className="space-y-10">
              <div>
                <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
                  DODAJ P0ST
                </span>
                <hr className="border-neutral-500 w-3/4" />
              </div>

              <div className="flex flex-col items-center w-full">
                <input
                  className="w-5/6 h-[200px] bg-neutral-700 p-3 outline-none text-top"
                  placeholder="huj"
                  type="message"
                />
              </div>
            </div>
          </form>
        </>
      }
    />
  );
};

export default AddPostPanel;
