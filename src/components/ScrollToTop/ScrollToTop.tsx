import useScrollToTop from "../../hooks/useScrollToTop";
import { StyledScrollToTop } from "./style";

const ScrollToTop = () => {
  const { scrollToTop } = useScrollToTop();

  return (
    <StyledScrollToTop onClick={scrollToTop}>
      <i className="bx bx-up-arrow-alt icon"></i>
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
