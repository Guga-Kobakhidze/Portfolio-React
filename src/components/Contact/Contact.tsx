import { Box, Grid2, Typography } from "@mui/material";
import TagElement from "../TagElement";
import ContactForm from "./ContactForm";
import FormIcon from "../../assets/images/form.svg";
import ContactGradient from "../../assets/images/contact-gradient.png";

const Contact = () => {
  return (
    <Grid2 container px={18} mb={23} id="Contact" position="relative">
      <Box
        component="img"
        src={ContactGradient}
        alt="contact-gradient"
        zIndex={-1}
        sx={{ position: "absolute", left: 0, top: -300 }}
      ></Box>
      <Grid2 size={6} color="#fff" fontFamily="Monrope-Medium">
        <TagElement img={FormIcon} alt="form-icon" />
        <Typography variant="h1" mb={2.5} maxWidth={600}>
          Let’s Connect!
        </Typography>
        <Typography
          variant="body1"
          fontSize={16}
          fontWeight={500}
          maxWidth={400}
          sx={{ opacity: 0.8 }}
          mb={4}
        >
          Need a beautiful, well-structured website that you can own and
          maintain yourself? Get in touch
        </Typography>
        <Box
          component="a"
          sx={{ transition: "0.3s" }}
          href="mailto:gugakobakhidze97@gmail.com"
        >
          Email: gugakobakhidze97@gmail.com
        </Box>
      </Grid2>

      <Grid2 size={6}>
        <ContactForm />
      </Grid2>
    </Grid2>
  );
};

export default Contact;
