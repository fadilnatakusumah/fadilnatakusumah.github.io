import styled from "styled-components";
import { mediaQuery } from "../../../helpers/style";

export const StyledNavbar = styled.nav`
  height: 90px;
  width: 100%;
  border-bottom: 1px solid var(--color-font);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  user-select: none;
  transition: 0.5s;

  ${mediaQuery({ max: 450 })(`
    height: 60px;
  `)}

  h4 {
    display: flex;
    padding: 12px;
    align-items: center;
  }
`;
