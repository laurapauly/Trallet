import React from 'react';
import styled from '@emotion/styled';
import light from '../../themes/light.js';

const Svg = styled.svg`
  fill: ${light.colors.action};
  width: 25px;
  height: 25px;
`;

export default function FilterIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Svg>
  );
}
