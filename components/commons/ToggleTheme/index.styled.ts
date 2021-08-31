import styled from "styled-components";

export const StyledToggleButton = styled.div`
  margin-left: 15px;

  svg {
    width: 24px;
    cursor: pointer;
    height: 24px;
    transition: 0.3s ease-out;
    fill: ${(props) => (props.theme === "dark" ? "gold" : "var(--color-font)")};

    &:hover {
      fill: gold;
    }
  }
`;
