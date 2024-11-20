import { StyeldTagElement } from "./style";
import { Box } from "@mui/material";

const TagElement = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <StyeldTagElement>
      <Box component="img" src={img} alt={alt} />
    </StyeldTagElement>
  );
};

export default TagElement;
