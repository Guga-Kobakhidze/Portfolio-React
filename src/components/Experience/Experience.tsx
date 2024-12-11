import { Box } from "@mui/material";
import { aboutMe, platforms, workExperiance } from "../../constants";
import { StyledExperianceBox, StyledOrderedList } from "./style";
import profileImg from "../../assets/images/profile.png";
import ExperianceBox from "../../features/ExperianceBox";

const Experience = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <StyledExperianceBox
      id="Experience"
      px={{ xs: 15, xl: 28 }}
      container
      size={12}
    >
      <ExperianceBox title="About-Me" sx={{ left: "0" }}>
        <StyledOrderedList>
          <Box className="about" component="ol">
            {aboutMe.map((list, index) => (
              <Box
                key={index}
                component="li"
                className="about"
                dangerouslySetInnerHTML={{ __html: list }}
              />
            ))}
          </Box>
        </StyledOrderedList>
      </ExperianceBox>
      <ExperianceBox title="Portrait" sx={{ top: "150px", right: "40px" }}>
        <Box width={304} height={308}>
          <Box
            component="img"
            src={profileImg}
            alt="profile-img"
            width="100%"
            height="100%"
          />
        </Box>
      </ExperianceBox>
      <ExperianceBox title="Where-I-Work" sx={{ bottom: "0", left: "40px" }}>
        <StyledOrderedList>
          <Box component="ol">
            {workExperiance.map((work, index) => (
              <Box
                key={index}
                component="li"
                className="work"
                onClick={() => handleClick(work.link)}
                dangerouslySetInnerHTML={{ __html: work.title }}
              />
            ))}
          </Box>
        </StyledOrderedList>
      </ExperianceBox>
      <ExperianceBox title="Me-Online" sx={{ bottom: "-20px", left: "450px" }}>
        <StyledOrderedList>
          <Box component="ol">
            {platforms.map((platform, index) => (
              <Box
                key={index}
                component="li"
                className="platform"
                onClick={() => handleClick(platform.link)}
                dangerouslySetInnerHTML={{ __html: platform.title }}
              />
            ))}
          </Box>
        </StyledOrderedList>
      </ExperianceBox>
    </StyledExperianceBox>
  );
};

export default Experience;
