import { Box } from "@mui/material";
import { Link } from "react-scroll";
import { navLinks } from "../../constants";
import { useState } from "react";
import { StyledNavigation, StyledWrapper } from "./style";

const Navigation = () => {
  const [active, setActive] = useState<number>(navLinks[0].id);

  const onSelect = (id: number) => {
    setActive(id);
  };

  return (
    <StyledWrapper>
      <StyledNavigation>
        <Box component="ul">
          {navLinks.map((val) => (
            <Box component="li">
              <Link
                spy={true}
                key={val.id}
                to={val.link}
                smooth={true}
                duration={500}
                onClick={() => onSelect(val.id)}
                offset={val.link === "Home" ? 0 : 50}
                style={{ color: active === val.id ? "#1E7E99" : "" }}
              >
                {val.link}
              </Link>
            </Box>
          ))}
        </Box>
      </StyledNavigation>
    </StyledWrapper>
  );
};

export default Navigation;