import React from 'react';
import { Global, css } from '@emotion/core';
function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 16px;
          margin: 0;
          background: black;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        }
      `}
    />
  );
}
export default GlobalStyles;
