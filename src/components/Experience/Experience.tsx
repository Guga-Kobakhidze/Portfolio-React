import Rates from "./Rates";
import Offers from "./Offers";
import Biography from "./Biography";
import { Grid2 } from "@mui/material";

const Experience = () => {
  return (
    <Grid2
      px={{ xs: 15, xl: 28 }}
      spacing={3}
      container
      size={12}
      mb={22}
      id="Experience"
      mt="180px"
    >
      <Grid2 height={356} size={5}>
        <Rates />
      </Grid2>
      <Grid2 height={356} size={7}>
        <Biography />
      </Grid2>
      <Grid2 height={356} size={12}>
        <Offers />
      </Grid2>
    </Grid2>
  );
};

export default Experience;
