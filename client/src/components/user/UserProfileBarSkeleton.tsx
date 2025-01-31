const UserProfileBarSkeleton = () => {
  return (
    <>
      <div className="lg:sticky lg:h-[calc(100vh-70px)]  bg-neutral-900 customBorderNeutral rounded-xl min-h-[365px] max-w-[500px] space-y-4 py-8 flex flex-col items-center">
        <div className="w-[200px] flex flex-col items-center space-y-4">
          <div className="w-[125px] h-[125px] rounded-xl bg-neutral-950"></div>
          <div className="w-[200px] h-6 bg-neutral-950"></div>
        </div>
      </div>
    </>
  );
};

export default UserProfileBarSkeleton;
