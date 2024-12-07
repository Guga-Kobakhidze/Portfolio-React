import SkillSwiper from "./SkillSwiper";
import SkillAnimation from "./SkillAnimation";
import { skillslist } from "../../constants";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const SkillsSection = () => {
  const { breakpoints } = useTheme();
  const isMedium = useMediaQuery(breakpoints.down(1200));

  return (
    <Box px={10}>
      {isMedium ? (
        <SkillSwiper data={skillslist} />
      ) : (
        <SkillAnimation data={skillslist} />
      )}
    </Box>
  );
};

export default SkillsSection;
