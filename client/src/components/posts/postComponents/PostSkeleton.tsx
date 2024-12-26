const PostSkeleton = () => {
  return (
    <>
      <div className="w-full bg-neutral-900 p-5 space-y-4">
        <div className="flex flex-row space-x-2">
          <div className=" w-14 h-14 border border-neutral-950 bg-neutral-950" />
          <div className="space-y-1">
            <div className="w-[120px] h-3 bg-neutral-950"></div>
            <div className="w-[70px] h-3 bg-neutral-950"></div>
            <div className="w-[70px] h-3 bg-neutral-950"></div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="w-1/4 h-3 bg-neutral-950"></div>
          <div className="w-1/3 h-3 bg-neutral-950"></div>
          <div className="w-1/5 h-3 bg-neutral-950"></div>
        </div>
      </div>
    </>
  );
};

export default PostSkeleton;
