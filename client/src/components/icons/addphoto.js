import React from 'react';
import styled from '@emotion/styled';
import light from '../../themes/light.js';

const Svg = styled.svg`
  fill: ${light.colors.iconinactive};
  width: 50px;
  height: 50px;
`;

export default function PhotoIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </Svg>
  );
}
