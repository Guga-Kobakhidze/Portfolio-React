import { getIcon } from "../../helper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid2, Typography } from "@mui/material";
import {
  MotiondImage,
  StyledImageBox,
  StyledProjectard,
  StyledTypeography,
} from "./style";

interface ProjectCardProps {
  name: string;
  tools: string[];
  image: string;
  id: number;
}

const ProjectCard = ({ name, tools, image, id }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`${id}`);
  };

  return (
    <StyledProjectard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      container
      size={12}
    >
      <Grid2 size={4} justifyItems="center">
        <Box display="flex" alignItems="center" gap={2}>
          {tools.map((tool, index) => {
            const icon = getIcon(tool);
            return (
              <Box
                alt={name}
                width={25}
                height={25}
                key={index}
                component="img"
                src={icon ? icon : ""}
              />
            );
          })}
        </Box>
      </Grid2>
      <Grid2 size={4} justifyItems="center">
        <StyledTypeography>{name}</StyledTypeography>
      </Grid2>
      <Grid2 size={4} justifyItems="center" position="relative">
        {isHovered ? (
          <StyledImageBox>
            <MotiondImage
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              src={image}
              alt={name}
              width={400}
              height={250}
            />
          </StyledImageBox>
        ) : (
          <Typography color="#fff">View Details</Typography>
        )}
      </Grid2>
    </StyledProjectard>
  );
};

export default ProjectCard;
