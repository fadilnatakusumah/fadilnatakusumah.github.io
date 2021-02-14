import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background-color: #E2FCEF;
    --font-color: #3E5C76;
    --font-color-active: #1D2D44;
    --hover-color: #0D1321;
    --border-color: #3E5C76;
    --border-radius: 5px;
    --box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06);
    --max-width: 1196px;
  }

  [data-theme="dark"] {
    --background-color: #1D2D44;
    --font-color: #BCCDDC;
    --font-color-active: white;
    --hover-color: #E2FCEF;
    --border-color: #666666;
    --box-shadow: 0 2.8px 2.2px rgba(200, 200, 200, 0.034),
            0 6.7px 5.3px rgba(200, 200, 200, 0.048),
            0 12.5px 10px rgba(200, 200, 200, 0.06);
  }


  body{
    transition: .5s ease-out;
    color: var(--font-color);
    background-color: var(--background-color);
  }
`