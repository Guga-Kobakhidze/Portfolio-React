import { Box } from "@mui/material";
import { Link } from "react-scroll";
import { navLinks } from "../../constants";
import { useState } from "react";
import { StyledNavigation, StyledWrapper } from "./style";
import { Link as NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState<number>(navLinks[0].id);
  const location = useLocation();

  const onSelect = (id: number) => {
    setActive(id);
  };

  return (
    <StyledWrapper>
      <StyledNavigation>
        <Box component="ul">
          {navLinks.map((val) => (
            <Box component="li" key={val.id}>
              {location.pathname !== "/" ? (
                <NavLink to="/">{val.link}</NavLink>
              ) : (
                <Link
                  href="/"
                  spy={true}
                  key={val.id}
                  to={val.link}
                  smooth={true}
                  duration={500}
                  onClick={() => onSelect(val.id)}
                  offset={-50}
                  style={{ color: active === val.id ? "#1E7E99" : "" }}
                >
                  {val.link}
                </Link>
              )}
            </Box>
          ))}
        </Box>
      </StyledNavigation>
    </StyledWrapper>
  );
};

export default Navigation;
