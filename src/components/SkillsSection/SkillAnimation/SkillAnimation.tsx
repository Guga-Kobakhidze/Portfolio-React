import { Box } from "@mui/material";
import { RotatingContainer, StyledInnerBox, StyledSkillsBox } from "../style";
import SkillsTitle from "../SkillTitle";

export interface SkillsDataProps {
  data: {
    id: number;
    img: string;
    title: string;
  }[];
}

const SkillAnimation = ({ data }: SkillsDataProps) => {
  const angleStep = 360 / data.length;

  return (
    <StyledSkillsBox id="Skills" overflow="hidden">
      <Box pt={25} position="relative">
        <RotatingContainer>
          {data.map((skill, index) => (
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

export default SkillAnimation;
