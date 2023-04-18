import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  align-items: center;
  text-decoration: none;
  color: #000033;
   &.active {
  color: #ffffff;
  }
`

