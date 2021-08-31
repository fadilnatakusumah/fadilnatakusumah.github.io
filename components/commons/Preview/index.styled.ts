import styled from "styled-components";

export const StyledPreview = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  > div.centered-content {
    height: 80vh;
    z-index: 15;
    max-width: 95vw;

    > img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }
`;
