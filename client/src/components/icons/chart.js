import React from 'react';
import styled from '@emotion/styled';
import light from '../../themes/light.js';

const Svg = styled.svg`
  fill: ${light.colors.iconinactive};
  width: 25px;
  height: 25px;
`;

export default function ChartIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
    </Svg>
  );
}
