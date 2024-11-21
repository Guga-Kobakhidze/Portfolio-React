import { StyledImage, StyledOffersBox } from "../style";
import { Box, Grid2, Typography } from "@mui/material";
import simpleCodeImg from "../../../assets/images/simple-code.svg";
import responsiveDesignImg from "../../../assets/images/responsive.svg";

const Offers = () => {
  return (
    <Grid2 container size={12} spacing={3} height="100%">
      <StyledOffersBox size={5} border="1px solid red">
        <Typography variant="h2">Responsive Design</Typography>
        <Box
          component="img"
          sx={StyledImage}
          src={responsiveDesignImg}
          alt="responsive-design"
        />
      </StyledOffersBox>
      <StyledOffersBox size={7} border="1px solid red">
        <Typography variant="h2">Simple and Efficient Code</Typography>
        <Box
          component="img"
          sx={StyledImage}
          src={simpleCodeImg}
          alt="simple-and-efficient-code"
        />
      </StyledOffersBox>
    </Grid2>
  );
};

export default Offers;
