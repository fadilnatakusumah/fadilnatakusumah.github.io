import React, { PropsWithChildren } from "react";
import { StyledWrapper } from "./index.styled";

export function Wrapper({ children }: PropsWithChildren<any>) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
