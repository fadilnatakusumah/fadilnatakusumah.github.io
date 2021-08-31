import { StyledPreview } from "./index.styled";

export const PreviewImage = ({ src, setShowImage }) => {
  return (
    <StyledPreview onClick={() => setShowImage(false)}>
      <div className="centered-content">
        <img src={src} />
      </div>
    </StyledPreview>
  );
};
