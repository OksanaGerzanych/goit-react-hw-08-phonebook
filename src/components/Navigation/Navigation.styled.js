import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  text-align: center;
  color: #000033;
   &.active {
  color: #ffffff;
  }
`