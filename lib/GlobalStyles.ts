import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-bg: #D0F4EA;
    --color-font: #141301;
    --color-font-light: #003728;
    --color-hover: #829399;
    --highlight-primary: #0053F7;
    --highlight-primary-light: #5284EA;
    --highlight-secondary: #FF5154;
    --border-radius: 5px;
    --border-color: #3E5C76;
    --box-shadow: 
    0 1px 4px rgba(0,0,0,0.09),
    0 3px 8px rgba(0,0,0,0.09),
    0 4px 13px rgba(0,0,0,0.13);
    --box-shadow-hover: 1px 1px 10px 0px rgba(0,0,0,0.3),
    -1px 3px 10px 0px rgba(0,0,0,0.2);
    --max-width: 1196px;

    --company-link-color: #0053F7;
    --company-link-color-hover: #5284EA;
  }

  [data-theme="dark"] {
    --color-bg: #263648;
    --color-font: #D0F4EA;
    --color-font-light: #D0F4EA;
    --color-hover: #829399;
    --highlight-primary: #0053F7;
    --highlight-primary-light: #5284EA;
    --highlight-secondary: #FF5154;
    --border-color: #D0F4EA;
    --box-shadow: 
    0 1px 4px rgba(200,200,200,0.09),
    0 3px 8px rgba(200,200,200,0.09),
    0 4px 13px rgba(200,200,200,0.13);
    --box-shadow-hover: 1px 1px 10px 0px rgba(200,200,200,0.3),
    -1px 3px 10px 0px rgba(200,200,200,0.2);

    --company-link-color: #FF5154;
    --company-link-color-hover: #F27778;
  }

`;
