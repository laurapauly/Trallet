import React from 'react';
import light from '../themes/light.js';
import SpendingButton from './SpendingButton.js';
import Icon from './Icon';
import styled from '@emotion/styled';

const Title = styled.div`
  font-size: 10px;
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 23%;
`;

export default function IconSelect({ items, onSelect, selected }) {
  function onClick(value) {
    return function() {
      onSelect(value);
    };
  }

  function getFill(active) {
    if (active) {
      return light.colors.fontprimary;
    }
    return light.colors.action;
  }

  return (
    <>
      {items.map(item => (
        <Container>
          <Title key={item.value}>{item.title} </Title>
          <SpendingButton onClick={onClick(item.value)} active={selected === item.value}>
            <Icon icon={item.icon} fill={getFill(selected === item.value)} size={25} />
          </SpendingButton>
        </Container>
      ))}
    </>
  );
}
