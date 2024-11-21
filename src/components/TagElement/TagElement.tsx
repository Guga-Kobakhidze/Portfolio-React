import { StyledImage } from "../Experience/style";
import { StyeldTagElement } from "./style";
import { Box } from "@mui/material";

const TagElement = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <StyeldTagElement>
      <Box component="img" src={img} alt={alt} sx={StyledImage} />
    </StyeldTagElement>
  );
};

export default TagElement;
