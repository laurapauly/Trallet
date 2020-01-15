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
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
          }

          50% {
            opacity: 1;
          }
        }
      `}
    />
  );
}
export default GlobalStyles;

// @keyframes slide {
//   0% {
//     top: 70vh;
//   }
//   100% {
//     top: 9vh;
//   }
