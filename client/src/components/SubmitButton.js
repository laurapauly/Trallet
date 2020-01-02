// import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';

const SubmitButton = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${light.colors.action};
  border-radius: 10px;
  color: ${light.colors.basic};
  outline: none;
  border: none;
  font-size: 12px;
  margin-top: 10px;
`;

export default SubmitButton;
