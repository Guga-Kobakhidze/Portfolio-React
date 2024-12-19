import { StyledButton } from "./style";
import { StyledFlexBox } from "../../assets/styles/Style";
import { Box, Typography } from "@mui/material";
import RightArrow from "../../assets/images/arrow.svg";

const ErrorContent = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledFlexBox iscolumn="true" gap={2} color="#fff">
      <Typography variant="h2" fontWeight={400}>
        Page Not Found
      </Typography>
      <Typography variant="body1" mb={2} sx={{ opacity: 0.8 }}>
        The page you are looking for doesn’t exist or has been moved.
      </Typography>
      <StyledButton variant="contained" onClick={onClick}>
        Go Home
        <Box component="img" src={RightArrow} alt="right-arrow" />
      </StyledButton>
    </StyledFlexBox>
  );
};

export default ErrorContent;
