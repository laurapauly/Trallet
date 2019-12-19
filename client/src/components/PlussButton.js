import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import PlusIcon from './icons/plus.js';

const PlusButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${light.colors.action};
  border-radius: 50px;
  color: ${light.colors.white};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Add() {
  return (
    <PlusButton>
      <PlusIcon></PlusIcon>
    </PlusButton>
  );
}
