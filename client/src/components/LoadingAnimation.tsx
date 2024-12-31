import { useEffect, useState } from "react";

const LoadingAnimation = ({ loading }: { loading: boolean }) => {
  const [changeSize, setChangeSize] = useState<boolean>(false);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setChangeSize((prevState) => !prevState);
      }, 700);
      return () => clearInterval(interval);
    }
  }, [loading]);

  if (!loading) return null;
  return (
    <div className=" p-0.5 w-full h-full flex justify-center items-center">
      <div
        className={`bg-white rounded-full transition-all ease-in-out duration-100 ${
          changeSize ? "w-3/4 h-3/4" : "w-1/2 h-1/2"
        } `}
      ></div>
    </div>
  );
};

export default LoadingAnimation;
