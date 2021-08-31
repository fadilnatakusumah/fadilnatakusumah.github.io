type mediaQueryProps = {
  max?: number;
  min?: number;
};

export const mediaQuery =
  ({ min, max }: mediaQueryProps) =>
  (style: string): string => {
    if (max) {
      return `
      @media(max-width: ${max}px){
        ${style}
      }
    `;
    }
    if (min) {
      return `
      @media(min-width: ${min}px){
        ${style}
      }
    `;
    }
    return "";
  };
