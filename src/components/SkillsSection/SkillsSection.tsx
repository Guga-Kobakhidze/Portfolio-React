import SkillsTitle from "./SkillTitle";
import { Box } from "@mui/material";
import { skillslist } from "../../constants";
import { RotatingContainer, StyledInnerBox, StyledSkillsBox } from "./style";

const SkillsSection = () => {
  const angleStep = 360 / skillslist.length;

  return (
    <StyledSkillsBox id="Skills" overflow="hidden">
      <Box pt={25} position="relative">
        <RotatingContainer>
          {skillslist.map((skill, index) => (
            <StyledInnerBox key={skill.id} angle={index * angleStep}>
              <Box component="img" src={skill.img} alt={skill.title} />
            </StyledInnerBox>
          ))}
        </RotatingContainer>
        <SkillsTitle />
      </Box>
    </StyledSkillsBox>
  );
};

export default SkillsSection;
