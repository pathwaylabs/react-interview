import { Global, css } from '@emotion/react';

const globalCss = (themeMode: string) => `
  :root {
    color-scheme: ${themeMode};
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Globals = ({ themeMode }: { themeMode: string; }) => (
  <Global styles={css(globalCss(themeMode))} />
);

export default Globals;
