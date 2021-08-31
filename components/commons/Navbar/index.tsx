import { DOMAIN } from "../../../config";
import { ToggleTheme } from "../ToggleTheme";
import { StyledNavbar } from "./index.styled";

export default function Navbar() {
  return (
    <StyledNavbar>
      <h4>
        <a href={DOMAIN}>Portfolio</a>
        <ToggleTheme />
      </h4>
    </StyledNavbar>
  );
}
