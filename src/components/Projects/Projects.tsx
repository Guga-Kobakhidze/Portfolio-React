import { useState } from "react";
import data from "../../../data/projects.json";
import H2Icon from "../../assets/images/h2.svg";
import TagElement from "../TagElement";
import ProjectCard from "./ProjectCard";
import { Box, Button, Grid2, Typography } from "@mui/material";

const Projects = () => {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const open = () => setSeeMore(true);
  const close = () => setSeeMore(false);

  const projects = seeMore ? data : data.slice(0, 3);

  return (
    <Grid2 container px={18} mb={18} id="Projects" position="relative">
      <Grid2
        size={12}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mb={5}>
          <TagElement alt="H2-icon" img={H2Icon} />
          <Typography variant="h4" mb={2.5} maxWidth={600} color="#fff">
            Projects
          </Typography>
        </Box>
        {data.length > 3 && (
          <Button
            variant="text"
            onClick={seeMore ? close : open}
            sx={{ color: "#fff", ":hover": { color: "#FC04AD" } }}
          >
            {seeMore ? "Show Less" : "Show All"}
          </Button>
        )}
      </Grid2>
      {projects.map(({ id, name, tools, mainImage }) => (
        <ProjectCard
          id={id}
          key={id}
          name={name}
          tools={tools}
          image={mainImage}
        />
      ))}
    </Grid2>
  );
};

export default Projects;
