import React from 'react';
import styled from '@emotion/styled';
import light from '../../themes/light.js';

export default function DrinkIcon(props) {
  const Svg = styled.svg`
    fill: ${light.colors.fontsecondary};
    width: ${props.size}px;
    height: ${props.size}px;
  `;
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </Svg>
  );
}
