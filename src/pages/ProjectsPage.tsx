import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const randomNum = Math.floor(Math.random() * 1000);
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h1">All projects</Typography>
      <Button variant="contained" onClick={() => navigate(`${randomNum}`)}>
        Details
      </Button>
    </Box>
  );
};

export default ProjectsPage;
