import React from 'react';
import styled from '@emotion/styled';
import light from '../../themes/light.js';
import PropTypes from 'prop-types';

export default function AirplaneIcon(props) {
  const Svg = styled.svg`
    fill: ${light.colors.fontSecondary};
    width: ${props.size}px;
    height: ${props.size}px;
  `;
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M10.18 9" />
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Svg>
  );
}
AirplaneIcon.propTypes = {
  size: PropTypes.number
};
