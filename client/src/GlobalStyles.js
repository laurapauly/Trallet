import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          width: 100vw;
          height: 100vh;
          font-size: 16px;
          margin: 0;
          background: ${theme.colors.backgroundprimary};
          font-family: 'Roboto', sans-serif;
        }
      `}
    />
  );
}
export default GlobalStyles;
