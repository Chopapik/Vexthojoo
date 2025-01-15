const PostSkeleton = () => {
  return (
    <>
      <div className="w-full bg-neutral-900 p-5 space-y-4">
        <div className="flex flex-row space-x-2">
          <div className=" w-10 h-10 border border-neutral-950 bg-neutral-950" />
          <div className="space-y-1">
            <div className="w-[120px] h-2 bg-neutral-950"></div>
            <div className="w-[70px] h-2 bg-neutral-950"></div>
            <div className="w-[70px] h-2 bg-neutral-950"></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="w-1/4 h-2 bg-neutral-950"></div>
          <div className="w-1/3 h-2 bg-neutral-950"></div>
          <div className="w-1/5 h-2 bg-neutral-950"></div>
        </div>
      </div>
    </>
  );
};

export default PostSkeleton;
