import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { StyledToggleButton } from "./index.styled";

export function ToggleTheme(props: any) {
  const { theme, setTheme } = useTheme();
  const [isMounted, setMounted] = useState(false);

  const onToggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    setTimeout(() => setMounted(true));
  }, []);

  if (!isMounted) return null;

  return (
    <StyledToggleButton theme={theme} {...props}>
      <MoonSvg onClick={onToggleTheme} />
    </StyledToggleButton>
  );
}

const MoonSvg = (props) => (
  <svg
    {...props}
    className="moon"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
  </svg>
);
