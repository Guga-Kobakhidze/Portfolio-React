import { Box, Typography } from "@mui/material";
import { StyledHeader, StyledOpenToWork } from "./style";
import circle from "../../assets/images/circle.svg";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <StyledHeader as="header">
      <Typography variant="h3">Guga Kobakhidze</Typography>
      <StyledOpenToWork>
        <Box className="img-animate">
          <Box component="img" alt="open-to-work" src={circle} />
        </Box>
        <Typography variant="h4">Open to Work</Typography>
      </StyledOpenToWork>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
