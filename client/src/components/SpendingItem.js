import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import Icon from './Icon.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.h5`
  all: unset;
  color: ${light.colors.fontsecondary};
`;

const Location = styled.p`
  all: unset;
  font-size: 9pt;
  color: ${light.colors.fontsmall};
`;

const Spending = styled.div`
  color: ${light.colors.fontsecondary};
  text-align: right;
  flex: 1 1 auto;
  margin-left: auto;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 15px;
`;

export default function SpendingItem({ spending }) {
  return (
    <Container>
      <Wrapper2>
        <div>
          <Icon icon={spending.category} />
        </div>
        <Wrapper>
          <Title>{spending.title}</Title>
          <Location>{spending.location}</Location>
        </Wrapper>
      </Wrapper2>
      <Spending>-{spending.amount}€</Spending>
    </Container>
  );
}