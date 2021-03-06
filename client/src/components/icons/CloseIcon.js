import React from 'react';
import styled from '@emotion/styled';
import light from '../../themes/light.js';

const Svg = styled.svg`
  fill: ${light.colors.fontSecondary};
  width: 30px;
  height: 30px;
`;

export default function CloseIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Svg>
  );
}
