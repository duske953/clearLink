import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
        *,
        *::after,
        *::before {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          list-style: none;
        }
        html {
          font-size: 62.5%;
        }
        body {
          font-family: 'Rubik', sans-serif;
          line-height: 1;
        }
        a:link,
        a:visited {
          text-decoration: none;
          display: inline-block;
        }
      `}
    />
  );
}
