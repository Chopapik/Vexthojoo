import { useState, useEffect } from "react";

const useMobileNavigatorPosition = () => {
  const [navigatorBottomPosition, setNavigatorBottomPosition] =
    useState<string>("bottom-2");

  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY < currentScrollY) {
        setNavigatorBottomPosition("-bottom-9");
      } else {
        setNavigatorBottomPosition("bottom-2");
      }
      setPrevScrollY(currentScrollY);
    };

    addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return { navigatorBottomPosition };
};

export default useMobileNavigatorPosition;
