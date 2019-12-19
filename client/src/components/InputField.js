import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';

const Input = styled.input`
  width: 255px;
  height: 35px;
  background-color: ${light.colors.backgroundprimary};
  border-radius: 10px;
  color: ${light.colors.iconinactive};
  outline: none;
  border: none;
  font-size: 10px;
  text-align: left;
  padding: 15px;
`;

export default function InputField() {
  return <Input placeholder="Beispieltext"></Input>;
}
