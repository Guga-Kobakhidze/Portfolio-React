import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import useScrollToTop from "../hooks/useScrollToTop";

const Layout = () => {
  const { scroller } = useScrollToTop();

  return (
    <Box>
      <Header />
      <main>
        <Outlet />
        {scroller && <ScrollToTop />}
      </main>
    </Box>
  );
};

export default Layout;
