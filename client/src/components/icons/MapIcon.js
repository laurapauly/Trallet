import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props =>
    props.active ? props.theme.colors.fontPrimary : props.theme.colors.iconInactive};
  width: 25px;
  height: 25px;
`;

export default function MapIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Svg>
  );
}
