import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';

const InputSmallText = styled.input`
  width: 135px;
  height: 35px;
  background-color: ${light.colors.backgroundprimary};
  border-radius: 10px;
  color: ${light.colors.iconinactive};
  outline: none;
  border: none;
  font-size: 10px;
  text-align: left;
  padding: 15px;
  margin: 5px;
  margin-bottom: 20px;
`;

export default function InputFieldSmallText() {
  return <InputSmallText type="text" placeholder="Euro"></InputSmallText>;
}
