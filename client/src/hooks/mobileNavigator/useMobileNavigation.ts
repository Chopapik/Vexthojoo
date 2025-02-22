import { useEffect, useState } from "react";

export const useMobileNavigation = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isAsideVisible, setIsAsideVisible] = useState<boolean>(
    window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsAsideVisible(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleAside = () => {
    setIsAsideVisible((prev) => !prev);
  };

  const [prevScrollY, setPrevScrollY] = useState<number>(0);
  const [isPageScrolling, setIsPageScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY !== currentScrollY) {
        setIsPageScrolling(true);
      } else {
        setIsPageScrolling(false);
      }
      setPrevScrollY(currentScrollY);
    };

    addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    if (isPageScrolling) {
      setIsAsideVisible(false);
    }
  }, [prevScrollY, isPageScrolling]);

  return { scrollToTop, toggleAside, isAsideVisible };
};

export default useMobileNavigation;
