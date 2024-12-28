import { Box } from "@mui/material";
import NotFoundCircle from "../assets/images/404Circle.svg";
import NotFound404 from "../assets/images/404Image.svg";
import { StyledFlexBox } from "../assets/styles/Style";
import { useNavigate } from "react-router-dom";
import ErrorContent from "../components/ErrorContent/ErrorContent";
import ErroBackground from "../assets/images/404BG.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <StyledFlexBox iscolumn={null} height="100vh" position="relative">
      <Box
        position="absolute"
        bottom={0}
        right={0}
        zIndex={-1}
        component="img"
        src={ErroBackground}
        alt="not-found-circle"
      />
      <StyledFlexBox iscolumn="true">
        <Box
          width={60}
          height={60}
          component="img"
          src={NotFoundCircle}
          alt="not-found-circle"
        />
        <Box component="img" src={NotFound404} alt="not-found-circle" />
        <ErrorContent onClick={() => navigate("/")} />
      </StyledFlexBox>
    </StyledFlexBox>
  );
};

export default ErrorPage;
