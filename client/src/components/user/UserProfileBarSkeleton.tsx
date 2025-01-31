const UserProfileBarSkeleton = () => {
  return (
    <>
      <div className="lg:sticky lg:h-[calc(100vh-80px)] top-[70px] w-full lg:-[1/5] xl:w-[300px] bg-neutral-900 border-t border-neutral-700 rounded-xl min-h-[365px] max-w-[500px] space-y-4 py-8 flex flex-col items-center justify-between">
        <div className="w-[200px] flex flex-col items-center space-y-4">
          <div className="w-[125px] h-[125px] rounded-xl bg-neutral-950"></div>
        </div>
      </div>
    </>
  );
};

export default UserProfileBarSkeleton;
