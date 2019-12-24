import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';

const Button = styled.button`
  height: 35px;
  width: 50px;
  background-color: ${light.colors.backgroundprimary};
  border-radius: 10px;
  outline: none;
  border: none;
`;

export default function SpendingButton() {
  return <Button></Button>;
}
