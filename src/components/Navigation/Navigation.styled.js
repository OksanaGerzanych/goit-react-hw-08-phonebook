import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-right: 50px;
  color: #000033;
   &.active {
  color: #ffffff;
  }
`

