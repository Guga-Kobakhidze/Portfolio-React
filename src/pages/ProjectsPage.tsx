import { Box, Typography } from "@mui/material";
import Header from "../components/Header";

const ProjectsPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Header />
      <Typography variant="h1">Projects</Typography>
    </Box>
  );
};

export default ProjectsPage;
