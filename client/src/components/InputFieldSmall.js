import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';

const InputSmall = styled.input`
  width: 120px;
  height: 35px;
  background-color: ${light.colors.inputfield};
  border-radius: 10px;
  color: ${light.colors.iconinactive};
  outline: none;
  border: none;
  font-size: 10px;
  text-align: left;
  padding: 15px;
`;

export default function InputFieldSmall() {
  return <InputSmall></InputSmall>;
}
