import styled from "styled-components";

export const NavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
  color: #e84a5f;
  }
`