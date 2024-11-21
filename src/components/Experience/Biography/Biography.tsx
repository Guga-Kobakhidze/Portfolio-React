import arrow from "../../../assets/images/arrow.svg";
import profile from "../../../assets/images/profile.png";
import { StyledBiography } from "../style";
import { Box, Button, Typography } from "@mui/material";

const Biography = () => {
  return (
    <StyledBiography size={12}>
      <Typography variant="h2">Hi, I'm Guga</Typography>
      <Typography variant="body1">
        I'm involved in every step of the development process, ensuring each
        project is scalable, efficient, and delivers real value to users. My
        goal is to create high-quality solutions that align with both business
        goals and user needs.
      </Typography>
      <Button variant="outlined">
        Let's Innovate Together
        <Box ml={1} component="img" src={arrow} alt="arrow" />
      </Button>
      <Box
        width={266}
        height={266}
        className="profile-img"
        component="img"
        src={profile}
        alt="profile-img"
      />
    </StyledBiography>
  );
};

export default Biography;
