import Block from "./BlockComponent";

const ChatBlock = () => {
  return (
    <>
      <Block
        name={"Morcin chat"}
        background={"bg-neutral-800"}
        content={
          <>
            <div className="flex w-full flex-col text-neutral-100 font-roboto space-y-5 px-3 mt-4 ">
              <div className="w-full flex justify-end">
                <div className="bg-zinc-700 py-2 px-4 rounded-3xl">
                  <span>Question content</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="w-11">
                  <div className="w-10 h-10 border-[2px] border-zinc-700 rounded-full overflow-hidden">
                    <img src="/ico.png" alt="ico" />
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis eveniet quasi tempore animi veritatis laudantium
                    maxime porro nihil nostrum? Tenetur fuga, harum id dolorem
                    at aliquam eum mollitia quaerat nulla!
                  </p>
                </div>
              </div>
            </div>
          </>
        }
      ></Block>
      ;
    </>
  );
};

export default ChatBlock;
