const UserProfileBarSkeleton = () => {
  return (
    <>
      <div className="lg:sticky top-[60px] bg-neutral-900 h-[450px] customBorderNeutral lg:h-[93vh] flex flex-col py-3">
        <div className="flex flex-col items-center space-y-7">
          <div className="h-6 w-[120px] bg-neutral-950"> </div>
          <div className="w-24 h-24 bg-neutral-950"></div>
        </div>
      </div>
    </>
  );
};

export default UserProfileBarSkeleton;
