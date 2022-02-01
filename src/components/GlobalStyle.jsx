import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

#root {
  min-height: 100vh;
}
`;

export default GlobalStyle;
