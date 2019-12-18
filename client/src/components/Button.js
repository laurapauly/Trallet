import React from 'react';
import styled from '@emotion/styled';
import plus from '../components/icons/plus.svg';

const Button = styled.button``;
const Icon = styled.img``;

export default function PlusButton() {
  return (
    <Button>
      <Icon src={plus}></Icon>
    </Button>
  );
}
