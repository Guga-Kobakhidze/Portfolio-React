import { rates } from "../../../constants";
import { Box, Grid2, Typography } from "@mui/material";
import { StyledRateBox, StyledRateText } from "../style";

const Rates = () => {
  return (
    <Grid2 container spacing={2} height="100%">
      {rates.map((rate, index) => (
        <StyledRateBox size={index === 2 ? 12 : 6} key={rate.id}>
          <StyledRateText variant="h2">
            {rate.rate}
            <Box component="span">{rate.symbol}</Box>
          </StyledRateText>
          <Typography variant="body1">{rate.title}</Typography>
        </StyledRateBox>
      ))}
    </Grid2>
  );
};

export default Rates;
