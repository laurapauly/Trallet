import React from 'react';
import styled from '@emotion/styled';
import light from '../../themes/light.js';

const Svg = styled.svg`
  fill: ${light.colors.fontsecondary};
  width: 30px;
  height: 30px;
`;

export default function HotelIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
    </Svg>
  );
}
