import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProjectDetailsPage = () => {
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
