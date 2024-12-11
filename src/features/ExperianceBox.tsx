import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { StyledExperiance } from "../components/Experience/style";
import closeIcon from "../assets/images/close.svg";
import minusIcon from "../assets/images/minus.svg";
import rectangleIcon from "../assets/images/rectangle.svg";

interface ExperianceBoxProps {
  children: ReactNode;
  title: string;
  sx?: Record<string, string>;
}

const ExperianceBox = ({ children, title, sx }: ExperianceBoxProps) => {
  return (
    <StyledExperiance sx={{ ...sx }}>
      <Box className="content">
        <Typography
          fontWeight={500}
          fontSize={16}
          letterSpacing="1px"
          lineHeight="22px"
        >
          {title}
        </Typography>
        <Box className="image-box">
          <Box
            component="img"
            src={minusIcon}
            alt="minus-icon"
            width={24}
            height={24}
          />
          <Box
            component="img"
            src={rectangleIcon}
            alt="rectangle-icon"
            width={24}
            height={24}
          />
          <Box
            component="img"
            src={closeIcon}
            alt="close-icon"
            width={24}
            height={24}
          />
        </Box>
      </Box>
      {children}
    </StyledExperiance>
  );
};

export default ExperianceBox;
