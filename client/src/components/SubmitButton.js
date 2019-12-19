import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
// import { ThemeProvider } from 'emotion-theming';

const SubmitButton = styled.button`
  width: 255px;
  height: 35px;
  background-color: ${light.colors.action};
  border-radius: 10px;
  color: ${light.colors.white};
  outline: none;
  border: none;
  font-size: 12px;
`;

export default function Submit() {
  return <SubmitButton>Speichern</SubmitButton>;
}
