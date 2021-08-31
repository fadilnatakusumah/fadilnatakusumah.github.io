import { LabelsStyled, LabelStyled } from "./index.styled";

export const Labels = ({ children }) => {
  return <LabelsStyled>{children}</LabelsStyled>;
};

export const Label = ({ children, ...props }: any) => (
  <LabelStyled {...props}>{children}</LabelStyled>
);

export default Labels;
