import { useEffect, useState } from "react";
import { StyledSkillsTitle } from "./style";
import { Typography } from "@mui/material";
import { skillslist } from "../../constants";

const SkillsTitle = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skillslist.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledSkillsTitle>
      <Typography variant="h2" textAlign="center">
        {`${skillslist[currentIndex].title}`}
      </Typography>
      <Typography variant="h1" textAlign="center">
        SKILLS
      </Typography>
    </StyledSkillsTitle>
  );
};

export default SkillsTitle;
