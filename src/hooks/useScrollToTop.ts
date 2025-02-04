import { useEffect, useState } from "react";

const useScrollToTop = () => {
  const [scroller, setScroller] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 1000) setScroller(true);
    else setScroller(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return { scroller, scrollToTop };
};

export default useScrollToTop;
