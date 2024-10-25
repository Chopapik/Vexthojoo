import Panel from "./Panel";

const LoginPanel = ({
  visiblePanelId,
  closePanelFunction,
}: {
  visiblePanelId: string | null;
  closePanelFunction: () => void;
}) => {
  return (
    <Panel
      content={
        <>
          <div className="flex flex-col items-center space-y-[60px]">
            <div className="w-full">
              <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1">
                LOGOWANIE
              </span>
              <hr className="border-neutral-500 w-3/4" />
            </div>

            <div className="flex flex-col space-y-11 w-3/4">
              <div className="relative">
                <input
                  type="text"
                  className="input01"
                  name="username"
                  placeholder=""
                />
                <label htmlFor="username" className="label01">
                  NAZWA
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  className="input01"
                  name="password"
                  placeholder=""
                />
                <label htmlFor="username" className="label01">
                  HASŁO
                </label>
              </div>
            </div>
            <div className="text-xs flex flex-row items-center justify-between">
              <div className="space-x-1">
                <input type="checkbox" name="noLogout" />
                <label htmlFor="noLogout">Nie wylogowywuj mnie</label>
              </div>
            </div>
            <button className="button01 bg-fuchsia-500">WŁAŹ</button>
          </div>
        </>
      }
      isVisible={visiblePanelId === "loginPanel"}
      closePanelFunction={closePanelFunction}
    />
  );
};

export default LoginPanel;
