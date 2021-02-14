import React from 'react'
import styled from "styled-components";

const WrapperStyled = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 20px 10px;
`

export function Wrapper({ children }) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}

