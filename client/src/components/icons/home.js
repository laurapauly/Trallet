import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props =>
    props.active ? props.theme.colors.fontprimary : props.theme.colors.iconinactive};
  width: 25px;
  height: 25px;
`;

export default function HomeIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Svg>
  );
}
