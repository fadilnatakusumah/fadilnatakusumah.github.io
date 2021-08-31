import React from "react";
import styled from "styled-components";

export const LabelsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  display: flex;
  gap: 5px;
`;

export const LabelStyled = styled.li`
  user-select: none;
  border: 1px solid var(--color-font);
  padding: 2px 5px;
  border-radius: 4px;
  color: var(--color-bg);
  background-color: var(--color-font-light);
  transition: 0.3s;
  ${(props: any) =>
    props.hoverable
      ? `
    &:hover{
      border-color: var(--highlight-primary);
      background-color: var(--highlight-primary);
      color: white;
    }
  `
      : ""}

  a {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
