import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data/projects.json";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const projectDetails = data.find((project) => project.id.toString() === id);

  console.log(projectDetails);

  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Button
        sx={{ width: 250 }}
        variant="outlined"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default ProjectDetailsPage;
